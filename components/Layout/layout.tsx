"use client"
import React from "react"

import { Layout, Menu } from "antd"

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
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      />
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100%",
            paddingTop: "64px",
            position: "fixed",
            left: 0,
            bottom: 0,
          }}
        >
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
