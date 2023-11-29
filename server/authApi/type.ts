// 登陆
export interface LoginParams {
  password: string
  username: string
  isRemember: boolean
}

export interface LoginResponse {
  accessToken: string
  expires: string
  refreshToken: string
  roles: Array<string>
  username: string
}

export interface GetAsyncRoutes {
  uid: string
  meta: {
    roles: Array<string>
    title: string
    icon: string
  }
  path: string
  children: Array<GetAsyncRoutes>
}

export interface GetAsyncRoutesResponse extends Array<GetAsyncRoutes> {}

export interface currentCompanyResponse {
  company: Array<{
    uid: string
    name: string
  }>
}

export interface PostCurrentComPanyParams {
  companyId: string
}

export interface GetCurrentComPanyParamsResponse {
  code: number
  data: string
  message: string
}
