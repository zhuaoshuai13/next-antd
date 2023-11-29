import { useState, useEffect, useCallback } from "react"

import { useRouter } from "next/navigation"

import { MenuType, useAppStore, useHydration } from "@/sotre"
import { creatIcon } from "@/utils/creatIcon"

const useLayout = (): {
  item: Array<MenuType>
  clickMenu: (_path: string) => void
} => {
  const router = useRouter()
  const [item, setItem] = useState<Array<MenuType>>([])
  const hasHydrated = useHydration()
  const { routes } = useAppStore()

  const generateMenu = useCallback((data: MenuType[]) => {
    const newData: MenuType[] = []
    data.forEach((item) => {
      let menuItem: MenuType = { key: "", label: "", icon: "" }
      menuItem.key = item.key
      menuItem.label = item.label
      menuItem.icon = creatIcon(item.icon as string)
      if (item.children) {
        menuItem.children = generateMenu(item.children)
      }
      newData.push(menuItem)
    })
    return newData
  }, [])

  const clickMenu = (path: string): void => {
    router.push(path)
  }

  useEffect(() => {
    const items = generateMenu(routes)
    setItem(items)
  }, [generateMenu, hasHydrated, routes])
  return { item, clickMenu }
}
export default useLayout
