import React, { useEffect, useState } from "react"
import Sun from "../assets/Sun"
import Moon from "../assets/Moon"

export default function ThemeSwitch() {
  const [mode, setMode] = useState(undefined)

  useEffect(() => {
    setMode(document.documentElement.getAttribute("color-mode"))
  }, [])

  function setColorMode(newValue) {
    setMode(newValue)
    localStorage.setItem("color-mode", newValue)
    document.documentElement.setAttribute("color-mode", newValue)
  }

  return (
    <span
      className="svg-icon svg-text d-flex jc-center ml-1"
      style={{ fontSize: "1.5rem", cursor: "pointer" }}
      onClick={() => setColorMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? <Sun /> : <Moon />}
    </span>
  )
}
