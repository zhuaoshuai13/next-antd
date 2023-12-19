"use client"
import React from "react"

import { ConfigProvider } from "antd"
import zhCN from "antd/lib/locale/zh_CN"
import { Inter } from "next/font/google"

import StyledComponentsRegistry from "@/lib/AntdRegistry"
import { myTheme, WaveConfig } from "@/theme/themeConfig"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// }

const RootLayout = ({ children }: React.PropsWithChildren): React.ReactNode => (
  <ConfigProvider wave={WaveConfig} theme={myTheme} locale={zhCN}>
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  </ConfigProvider>
)

export default RootLayout
