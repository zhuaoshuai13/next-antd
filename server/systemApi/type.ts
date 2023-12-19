// 公司数据结构
export interface companyDetails {
  address: string
  bank: string
  cardNumberOfBank: string
  city: string
  desc: string
  fax: string
  licenseNumber: string
  name: string
  primaryEmail: string
  primaryPhone: string
  principalName: string
  principalPhone: string
  province: string
  taxNumber: string
  bossId: string
}

// 创建公司
export interface PostCompanyInfoParams extends Partial<companyDetails> {
  name: string
  bossId: string
}

// 获取公司列表
export interface GetCompanyInfoResponse {
  data: {
    count: number
    list: Array<companyDetails>
  }
}
