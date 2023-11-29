import { Form, Input, Button, Typography } from "antd"

// import { PhoneLoginParams } from "@/server/authApi/type"

// 登陆
export interface PhoneLoginParams {
  phone: string
  code: number
  isRemember: boolean
}

import styled from "./phoneLoginForm.module.css"
const PhoneLoginForm = (): JSX.Element => {
  return (
    <div className={styled["phoneLogin-form"]}>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        // onFinish={(e) => handlerLogin(e)}
        autoComplete='off'
        className={styled["phone-login"]}
      >
        <Form.Item<PhoneLoginParams>
          label='手机号'
          name='phone'
          rules={[{ required: true, message: "请输入手机号!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<PhoneLoginParams>
          label='验证码'
          name='code'
          rules={[{ required: true, message: "请输入验证码!" }]}
        >
          <Input />
        </Form.Item>

        <div className={styled["get-code"]}>
          <Typography.Link href='#API'>获取验证码</Typography.Link>
        </div>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit' className={styled["button"]}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default PhoneLoginForm
