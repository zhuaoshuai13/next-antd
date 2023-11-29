"use client"
import { Modal, Radio } from "antd"

import useWelcome from "@/hooks/useWelcome"
const Welcome = (): JSX.Element => {
  const {
    showModal,
    companyData,
    contextHolder,
    confirmLoading,
    onChange,
    handleOk,
  } = useWelcome()

  return (
    <>
      {contextHolder}
      <div>Welcome</div>
      <Modal
        title='请选择公司'
        open={showModal}
        cancelButtonProps={{ style: { display: "none" } }}
        closeIcon={false}
        onOk={handleOk}
        confirmLoading={confirmLoading}
      >
        <Radio.Group onChange={onChange}>
          {companyData?.map((item) => (
            <Radio key={item.uid} value={item.uid}>
              {item.name}
            </Radio>
          ))}
        </Radio.Group>
      </Modal>
    </>
  )
}
export default Welcome
