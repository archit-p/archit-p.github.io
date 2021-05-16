import React, { useEffect, useState } from "react"
import UpArrow from "../assets/UpArrow"
import "src/styles/svg.css"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div className="scroll-to-top-container">
      {isVisible && (
        <div className="scroll-icon-container" onClick={scrollToTop}>
          <span className="svg-icon-xl">
            <UpArrow />
          </span>
        </div>
      )}
    </div>
  )
}
