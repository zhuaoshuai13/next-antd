"use client"
import { Table } from "antd"
import type { ColumnsType } from "antd/es/table"

import { SearchTable, TableAction } from "@/components"
import type { companyDetails } from "@/server/systemApi/type"
interface DataType extends companyDetails {
  key: React.Key
}

const columns: ColumnsType<DataType> = [
  {
    title: "名称",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "地址",
    width: 100,
    dataIndex: "address",
    key: "address",
  },
  {
    title: "银行",
    dataIndex: "bank",
    key: "bank",
    width: 150,
  },
  {
    title: "银行卡号",
    dataIndex: "cardNumberOfBank",
    key: "cardNumberOfBank",
    width: 150,
  },
  {
    title: "省",
    dataIndex: "province",
    key: "province",
    width: 150,
  },
  {
    title: "城市",
    dataIndex: "city",
    key: "city",
    width: 150,
  },
  {
    title: "描述",
    dataIndex: "desc",
    key: "desc",
    width: 150,
  },
  {
    title: "传真",
    dataIndex: "fax",
    key: "fax",
    width: 150,
  },
  {
    title: "营业执照",
    dataIndex: "licenseNumber",
    key: "licenseNumber",
    width: 150,
  },
  {
    title: "默认邮箱",
    dataIndex: "primaryEmail",
    key: "primaryEmail",
    width: 150,
  },
  {
    title: "主要负责人",
    dataIndex: "principalName",
    key: "principalName",
    width: 150,
  },
  {
    title: "主要电话",
    dataIndex: "principalPhone",
    key: "principalPhone",
    width: 150,
  },

  {
    title: "税号",
    dataIndex: "taxNumber",
    key: "taxNumber",
    width: 150,
  },
  {
    title: "bossId",
    dataIndex: "bossId",
    key: "bossId",
    width: 150,
  },

  {
    title: "操作",
    key: "operation",
    fixed: "right",
    width: 150,
    render: (): JSX.Element => (
      <TableAction
        updateCallback={() => {
          console.log("up")
        }}
        deleteCallback={() => {
          console.log("del")
        }}
      />
    ),
  },
]

const data: DataType[] = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    address: "casc",
    bank: "a",
    city: "a",
    cardNumberOfBank: "a",
    desc: "d",
    fax: "a",
    licenseNumber: "a",
    name: "acasc",
    primaryEmail: "a",
    primaryPhone: "a",
    principalName: "a",
    province: "a",
    principalPhone: "a",
    taxNumber: "a",
    bossId: "111",
  })
}
const a = (): void => {
  console.log("a")
}
const systemCompany = (): JSX.Element => {
  return (
    <div>
      {/* 公司管理 */}
      <SearchTable
        searchInput={[
          { type: "input", name: "address", label: "地址" },
          { type: "input", name: "cardNumberOfBank", label: "银行卡号" },
          { type: "input", name: "licenseNumber", label: "营业执照" },
          { type: "input", name: "principalPhone", label: "电话" },
          { type: "input", name: "principalName", label: "主要负责人" },
          { type: "input", name: "bossId", label: "bossId" },
        ]}
        buttonClick={a}
      ></SearchTable>
      <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 500 }} />
    </div>
  )
}
export default systemCompany
