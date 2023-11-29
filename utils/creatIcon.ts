import React from "react"

import {
  UserOutlined,
  LaptopOutlined,
  HomeOutlined,
  GroupOutlined,
  FundProjectionScreenOutlined,
  DesktopOutlined,
} from "@ant-design/icons"

export const creatIcon = (iconName: string): React.ReactNode => {
  switch (iconName) {
    case "UserOutlined":
      return React.createElement(UserOutlined)
    case "LaptopOutlined":
      return React.createElement(LaptopOutlined)
    case "HomeOutlined":
      return React.createElement(HomeOutlined)
    case "GroupOutlined":
      return React.createElement(GroupOutlined)
    case "FundProjectionScreenOutlined":
      return React.createElement(FundProjectionScreenOutlined)
    case "DesktopOutlined":
      return React.createElement(DesktopOutlined)
    default:
      return React.createElement(UserOutlined)
  }
}
