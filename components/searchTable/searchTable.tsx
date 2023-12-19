import { SearchOutlined } from "@ant-design/icons"
import { Form, Button, Input } from "antd"

interface FormProps {
  searchInput: Array<{
    type: string
    name: string
    label: string
  }>
  showButton?: boolean
  buttonClick: () => void
  onSubmit?: () => void
}

import styled from "./searchTable.module.css"

const SearchTable = ({
  searchInput,
  showButton = true,
  buttonClick,
}: FormProps): JSX.Element => {
  const [form] = Form.useForm()
  const onFinish = (values: any): void => {
    console.log(values)
  }
  const onReset = (): void => {
    form.resetFields()
  }

  return (
    <>
      <Form onFinish={onFinish} form={form}>
        <div className={styled.searchTable}>
          <div className={styled.title}>查询表格</div>
          <div className={styled.searchGropu}>
            <div className={styled.inputGroup}>
              {searchInput.map((item, index): JSX.Element => {
                if (item.type === "input") {
                  return (
                    <Form.Item
                      key={index}
                      name={item.name}
                      label={item.label}
                      style={{ marginBottom: 0 }}
                      // rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  )
                }
                return <></>
              })}
            </div>
            <div className={styled.line}></div>
            <div className={styled.btnGroup}>
              <Button
                type='primary'
                icon={<SearchOutlined />}
                htmlType='submit'
              >
                查询
              </Button>

              <Button icon={<SearchOutlined />} onClick={onReset}>
                重置
              </Button>
            </div>
          </div>
        </div>
      </Form>
      {showButton ? (
        <Button type='primary' className={styled.btn} onClick={buttonClick}>
          新建
        </Button>
      ) : null}
    </>
  )
}
export default SearchTable
