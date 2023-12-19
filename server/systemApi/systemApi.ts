import { useClientRequest } from "@/utils/request"

import { PostCompanyInfoParams, GetCompanyInfoResponse } from "./type"
// 获取公司列表
export const useGetCompanyInfo = async (
  params: number,
): Promise<GetCompanyInfoResponse> => {
  const response = await useClientRequest<null, GetCompanyInfoResponse>(
    `api/company/page/${params}`,
    "GET",
  )
  return response
}
// 增加公司
export const usePostCompanyInfo = async (
  params: PostCompanyInfoParams,
): Promise<GetCompanyInfoResponse> => {
  const response = await useClientRequest<
    PostCompanyInfoParams,
    GetCompanyInfoResponse
  >("api/company/", "POST", params)
  return response
}
export const systemApi = { useGetCompanyInfo, usePostCompanyInfo }
