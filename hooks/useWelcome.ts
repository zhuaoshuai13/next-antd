import {
  useState,
  useEffect,
  useCallback,
  ReactElement,
  JSXElementConstructor,
} from "react"

import { RadioChangeEvent, message } from "antd"

import { authApi } from "@/server"
import {
  GetAsyncRoutesResponse,
  currentCompanyResponse,
} from "@/server/authApi/type"
import { PostCurrentComPanyParams } from "@/server/authApi/type"
import { MenuType, useAppStore, useHydration } from "@/sotre"

const useWelcome = (): {
  showModal: boolean
  companyData: currentCompanyResponse["company"] | undefined
  contextHolder: ReactElement<any, string | JSXElementConstructor<any>>
  confirmLoading: boolean
  onChange: (_e: RadioChangeEvent) => void
  handleOk: () => void
} => {
  const [messageApi, contextHolder] = message.useMessage()
  const [showModal, setShowModal] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [companyData, setCompanyData] =
    useState<currentCompanyResponse["company"]>()
  const [value, setValue] = useState("")
  const hasHydrated = useHydration()
  const { role, addRoutes } = useAppStore()
  const success = (): void => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    })
  }
  // 处理数据
  const fixData = useCallback((data: GetAsyncRoutesResponse) => {
    // TODO 过滤菜单
    const newData: MenuType[] = []
    data.forEach((item) => {
      let menuItem: MenuType = { key: "", label: "", icon: "" }
      menuItem.key = item.path
      menuItem.label = item.meta.title
      menuItem.icon = item.meta.icon
      if (item.children) {
        menuItem.children = fixData(item.children)
      }
      newData.push(menuItem)
    })

    return newData
  }, [])

  // 获取数据
  const getRoutes = useCallback(async () => {
    const data = await authApi.useGetAsyncRoutes()
    if (data) {
      const menuData = fixData(data)
      addRoutes(menuData)
      return true
    }
    return false
  }, [addRoutes, fixData])

  // post公司数据
  const postCurrentComPany = useCallback(
    async (params: PostCurrentComPanyParams) => {
      const data = await authApi.usePostCurrentComPany(params)
      return data
    },
    [],
  )

  // 获取公司数据
  const getCurrentComPany = useCallback(async () => {
    const data = await authApi.useGetCurrentComPany()

    // 判断是否有多家公司
    if (data.company.length > 1) {
      setShowModal(true)
      setCompanyData(data.company)
    } else {
      postCurrentComPany({ companyId: data.company[0].uid })
    }
  }, [postCurrentComPany])

  // 单选框切换
  const onChange = (e: RadioChangeEvent): void => {
    setValue(e.target.value)
  }

  // 确认选择公司
  const handleOk = async (): Promise<void> => {
    if (value === "") {
      success()
      return
    }
    setConfirmLoading(true)
    const data = await postCurrentComPany({ companyId: value })
    if (data) {
      setConfirmLoading(false)
      setShowModal(false)
    }
  }

  useEffect(() => {
    if (hasHydrated) {
      getRoutes().then((getRoutesSuccess) => {
        if (getRoutesSuccess) getCurrentComPany()
      })
    }
  }, [getCurrentComPany, getRoutes, hasHydrated, role])
  return {
    showModal,
    companyData,
    contextHolder,
    confirmLoading,
    onChange,
    handleOk,
  }
}
export default useWelcome
