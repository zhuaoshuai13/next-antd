"use client"
import React from "react"

import { Tabs } from "antd"
import type { TabsProps } from "antd"

import { AccountLoginForm, PhoneLoginForm } from "@/components"

import styled from "./page.module.css"

const Login: React.FC = () => {
  const items: TabsProps["items"] = [
    {
      key: "account",
      label: "密码登录",
      children: <AccountLoginForm />,
    },
    {
      key: "phone",
      label: "手机号登录",
      children: <PhoneLoginForm />,
    },
  ]
  return (
    <div className={styled.login}>
      <div className={styled["login-wrapper"]}>
        <Tabs defaultActiveKey='account' items={items} />
      </div>
    </div>
  )
}

export default Login
