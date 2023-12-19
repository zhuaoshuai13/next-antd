import { useState } from "react"

import { Button, Modal } from "antd"

import styled from "./tableAction.module.css"

type Props = {
  updateCallback: () => void
  deleteCallback: () => void
}

const TableAction = ({
  updateCallback,
  deleteCallback,
}: Props): JSX.Element => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className={styled.btn}>
        <Button type='primary' onClick={updateCallback}>
          修改
        </Button>
        <Button type='primary' danger onClick={() => setShowModal(true)}>
          删除
        </Button>
      </div>
      <Modal
        open={showModal}
        onOk={deleteCallback}
        onCancel={() => setShowModal(false)}
      >
        <p className={styled.text}>是否确认删除</p>
      </Modal>
    </>
  )
}
export default TableAction
