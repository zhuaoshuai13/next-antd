import { useClientRequest } from "@/utils/request"

import {
  LoginParams,
  LoginResponse,
  GetAsyncRoutesResponse,
  currentCompanyResponse,
  PostCurrentComPanyParams,
  GetCurrentComPanyParamsResponse,
} from "./type"

// 用户登陆
export const useLogin = async (params: LoginParams): Promise<LoginResponse> => {
  const response = await useClientRequest<LoginParams, LoginResponse>(
    "/api/auth/login",
    "POST",
    params
  )
  return response
}

// 获取路由
export const useGetAsyncRoutes = async (): Promise<GetAsyncRoutesResponse> => {
  const response = await useClientRequest<null, GetAsyncRoutesResponse>(
    "/api/auth/asyncRoutes",
    "GET"
  )
  return response
}

// 获取公司数据
export const useGetCurrentComPany =
  async (): Promise<currentCompanyResponse> => {
    const response = await useClientRequest<null, currentCompanyResponse>(
      "/api/auth/currentCompany",
      "GET"
    )
    return response
  }

//选择公司
export const usePostCurrentComPany = async (
  params: PostCurrentComPanyParams
): Promise<GetCurrentComPanyParamsResponse> => {
  const response = await useClientRequest<
    PostCurrentComPanyParams,
    GetCurrentComPanyParamsResponse
  >("/api/auth/currentCompany", "POST", params)

  return response
}

export const authApi = {
  useLogin,
  useGetAsyncRoutes,
  useGetCurrentComPany,
  usePostCurrentComPany,
}
