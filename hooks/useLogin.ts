import { useRouter } from "next/navigation"

import { authApi } from "@/server"
import { LoginParams } from "@/server/authApi/type"
import { useAppStore } from "@/sotre"

const useLogin = (): {
  handlerLogin: (_params: LoginParams) => Promise<void>
} => {
  const { addToken, addRole } = useAppStore()
  const router = useRouter()

  const handlerLogin = async (params: LoginParams): Promise<void> => {
    const data = await authApi.useLogin(params)
    // 存储token
    addToken(data.accessToken)
    addRole(data.roles)
    // 跳转welcome页面
    router.push("/welcome")
  }
  return { handlerLogin }
}
export default useLogin
