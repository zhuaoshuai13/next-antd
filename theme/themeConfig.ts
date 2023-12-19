import type { ThemeConfig } from "antd"
import { ConfigProvider } from "antd"
import { theme } from "antd"

type WaveConfig = NonNullable<Parameters<typeof ConfigProvider>[0]["wave"]>

const myTheme: ThemeConfig = {
  token: {
    fontSize: 14,
  },
  components: {
    Layout: {
      headerBg: "#fff",
    },
  },
  algorithm: theme.defaultAlgorithm,
}

// Prepare effect holder
const createHolder = (node: HTMLElement): HTMLElement => {
  const { borderWidth } = getComputedStyle(node)
  const borderWidthNum = parseInt(borderWidth, 10)

  const div = document.createElement("div")
  div.style.position = "absolute"
  div.style.inset = `-${borderWidthNum}px`
  div.style.borderRadius = "inherit"
  div.style.background = "transparent"
  div.style.zIndex = "999"
  div.style.pointerEvents = "none"
  div.style.overflow = "hidden"
  node.appendChild(div)

  return div
}

const createDot = (
  holder: HTMLElement,
  color: string,
  left: number,
  top: number,
  size: number = 0,
): HTMLElement => {
  const dot = document.createElement("div")
  dot.style.position = "absolute"
  dot.style.left = `${left}px`
  dot.style.top = `${top}px`
  dot.style.width = `${size}px`
  dot.style.height = `${size}px`
  dot.style.borderRadius = "50%"
  dot.style.background = color
  dot.style.transform = "translate(-50%, -50%)"
  dot.style.transition = `all 1s ease-out`
  holder.appendChild(dot)

  return dot
}

// Inset Effect
const showInsetEffect: WaveConfig["showEffect"] = (
  node,
  { event, component },
) => {
  if (component !== "Button") {
    return
  }

  const holder = createHolder(node)

  const rect = holder.getBoundingClientRect()

  const left = event.clientX - rect.left
  const top = event.clientY - rect.top

  const dot = createDot(holder, "rgba(255, 255, 255, 0.65)", left, top)

  // Motion
  requestAnimationFrame(() => {
    dot.ontransitionend = (): void => {
      holder.remove()
    }

    dot.style.width = "200px"
    dot.style.height = "200px"
    dot.style.opacity = "0"
  })
}

const WaveConfig = {
  showEffect: showInsetEffect,
}

export { myTheme, showInsetEffect, WaveConfig }
