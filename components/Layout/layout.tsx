"use client"
import React from "react"

import { Layout, Menu } from "antd"

import { Avatar } from "@/components"
import useLayout from "@/hooks/useLayout"

import styled from "./layout.module.css"

const { Header, Content, Sider } = Layout

const DashBoardLayout = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const { item, clickMenu } = useLayout()
  return (
    <Layout style={{ height: "100vh" }}>
      <Header className={styled.header}>
        <Avatar />
      </Header>
      <Layout>
        <Sider className={styled.slider}>
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={["4"]}
            items={item}
            onSelect={(e) => clickMenu(e.key)}
          />
        </Sider>
        <Content
          style={{
            paddingLeft: "200px",
          }}
        >
          <div className={styled["main-content"]}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default DashBoardLayout
