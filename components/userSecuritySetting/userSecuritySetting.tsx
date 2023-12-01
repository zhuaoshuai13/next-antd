"use client"

import { Button, Form, Input } from "antd"
const UserSecuritySetting = (): JSX.Element => {
  type FieldType = {
    oldPwd?: string
    newPwd?: string
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
          label='旧密码'
          name='oldPwd'
          rules={[{ required: true, message: "请输入旧密码!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label='新密码'
          name='newPwd'
          rules={[{ required: true, message: "请输入新密码!" }]}
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
export default UserSecuritySetting
