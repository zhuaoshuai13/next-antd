import useSWR from "swr"
import type { SWRResponse } from "swr"

type MethodType = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

interface Response {
  code: number
  data: any
  message: string
}

const fetchWithProxy = async <T, P>(
  url: string,
  method: MethodType,
  params?: T
): Promise<P> => {
  const options: RequestInit = {}
  const access_token = localStorage.getItem("access_token")
  const token = JSON.parse(access_token ? access_token : '{"state":""}')
  if (token) {
    options.headers = {
      ...options.headers,
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token.state.token}`,
    }
  }
  if (method === "POST") {
    options.body = JSON.stringify(params)
  }
  options.method = method

  const response = await fetch(url, options)
  const data: Response = await response.json()
  if (data.code.toString().startsWith("20")) {
    return data.data
  }
  return data as P
}

export const useClientRequest = <T, P>(
  url: string,
  method: MethodType,
  params?: T
): Promise<P> => {
  return fetchWithProxy<T, P>(url, method, params)
}

export const useServerRequest = <T, P>(
  url: string,
  method: MethodType,
  params?: T
): SWRResponse<P> => {
  const fetcher = (): Promise<P> => fetchWithProxy<T, P>(url, method, params)

  return useSWR<P>(url, fetcher)
}
