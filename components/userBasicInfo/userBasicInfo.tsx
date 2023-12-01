"use client"

import { Button, Form, Input } from "antd"
const UserBasicInfo = (): JSX.Element => {
  type FieldType = {
    email?: string
    nickname?: string
  }
  return (
    <div>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item<FieldType>
          label='邮箱'
          name='email'
          rules={[{ required: true, message: "请输入邮箱!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label='昵称'
          name='nickname'
          rules={[{ required: true, message: "请输入昵称!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default UserBasicInfo
