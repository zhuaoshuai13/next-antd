import { UserOutlined } from "@ant-design/icons"
import { Avatar, Badge, Space, Dropdown } from "antd"
import type { MenuProps } from "antd"
const avatar = (): JSX.Element => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "1111",
    },
    {
      key: "2",
      label: "22222",
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: "退出登录",
    },
  ]
  const onClick: MenuProps["onClick"] = ({ key }) => {
    console.log(key)
  }
  return (
    <Space size={24} style={{ cursor: "pointer" }}>
      <Badge>
        <Dropdown menu={{ items, onClick }} placement='bottomLeft'>
          <Avatar shape='circle' icon={<UserOutlined />} />
        </Dropdown>
      </Badge>
    </Space>
  )
}
export default avatar
