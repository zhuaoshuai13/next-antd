import { ReactNode, useEffect, useState } from "react"

import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

export interface MenuType {
  key: string
  label: string
  icon: string | ReactNode
  children?: MenuType[]
}
// 定义数据
type State = {
  token: string
  role: Array<string>
  routes: Array<MenuType>
}

// 定义操作
type Actions = {
  // 添加token

  addToken: (_token: string) => void
  // 删除token
  removeToken: () => void
  // 添加role
  addRole: (_role: Array<string>) => void
  // 添加routes
  addRoutes: (_routes: Array<MenuType>) => void
}

export const useAppStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      // 初始值
      token: "",
      role: [],
      routes: [],
      // 增加token
      addToken: (token: string): void =>
        set((state) => {
          state.token = token
        }),
      // 移除token
      removeToken: (): void =>
        set((state) => {
          state.token = ""
        }),
      // 增加用户角色
      addRole: (role: Array<string>): void =>
        set((state) => {
          state.role = role
        }),
      // 添加routes
      addRoutes: (routes: Array<MenuType>): void =>
        set((state) => {
          state.routes = routes
        }),
    })),

    // 本地化存储
    {
      name: "access_token",
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export const useHydration = (): boolean => {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const unsubHydrate = useAppStore.persist.onHydrate(() => setHydrated(false))

    const unsubFinishHydration = useAppStore.persist.onFinishHydration(() =>
      setHydrated(true)
    )

    setHydrated(useAppStore.persist.hasHydrated())

    return () => {
      unsubHydrate()
      unsubFinishHydration()
    }
  }, [])

  return hydrated
}
