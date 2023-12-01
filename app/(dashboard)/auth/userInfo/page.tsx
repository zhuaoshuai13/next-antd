"use client"
import { UserOutlined } from "@ant-design/icons"
import { Avatar, Tag, Tabs } from "antd"
import type { TabsProps } from "antd"

import { UserBasicInfo, UserSecuritySetting } from "@/components"

import styled from "./page.module.css"
const userInfo = (): JSX.Element => {
  const items: TabsProps["items"] = [
    {
      key: "info",
      label: "基本信息",
      children: <UserBasicInfo />,
    },
    {
      key: "safe",
      label: "安全设置",
      children: <UserSecuritySetting />,
    },
    {
      key: "user",
      label: "实名认证",
      children: <>实名认证</>,
    },
  ]
  return (
    <div className={styled.userInfo}>
      <div className={styled.head}>
        <div>
          <Avatar size={64} icon={<UserOutlined />} />
        </div>
        <div className={styled.group}>
          <div className={styled.infoLine}>
            <div className={styled.title}>用户名：</div>
            <div className={styled.info}>朱傲</div>
          </div>
          <div className={styled.infoLine}>
            <div className={styled.title}>账号ID：</div>
            <div className={styled.info}>twym-30774185</div>
          </div>
          <div className={styled.infoLine}>
            <div className={styled.title}>注册时间：</div>
            <div className={styled.info}>1985-05-31 23:23:04</div>
          </div>
        </div>
        <div className={styled.group}>
          <div className={styled.infoLine}>
            <div className={styled.title}>实名认证：</div>
            <div className={styled.info}>
              <Tag color='#87d068'>已认证</Tag>
            </div>
          </div>
          <div className={styled.infoLine}>
            <div className={styled.title}>手机号码：</div>
            <div className={styled.info}>11221312</div>
          </div>
        </div>
      </div>
      <div className={styled.bottom}>
        <Tabs defaultActiveKey='1' type='card' size='large' items={items} />
      </div>
    </div>
  )
}
export default userInfo
