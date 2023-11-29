import { Button, Checkbox, Form, Input } from "antd"

import useLogin from "@/hooks/useLogin"
import type { LoginParams } from "@/server/authApi/type"

import styled from "./accountLoginForm.module.css"

const AccountLoginForm = (): JSX.Element => {
  const { handlerLogin } = useLogin()

  return (
    <div className={styled["login-form"]}>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={(e) => handlerLogin(e)}
        autoComplete='off'
        className={styled["account-login"]}
      >
        <Form.Item<LoginParams>
          label='账号'
          name='username'
          rules={[{ required: true, message: "请输入账号!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<LoginParams>
          label='密码'
          name='password'
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<LoginParams>
          name='isRemember'
          valuePropName='checked'
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit' className={styled["button"]}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default AccountLoginForm
