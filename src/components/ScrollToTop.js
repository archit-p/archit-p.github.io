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
    <div
      style={{
        position: "fixed",
        bottom: 10,
        right: 10,
        zIndex: 1000,
        animation: "fadeIn 700ms ease-in-out 1s both",
        cursor: "pointer",
      }}
    >
      {isVisible && (
        <div
          onClick={scrollToTop}
          style={{
            width: 64,
            height: 64,
            padding: 20,
            borderRadius: 1000,
            backgroundColor: "white",
            boxShadow: "0 0.5rem 2rem 0 rgba(44, 51, 73, 0.2)",
          }}
        >
          <UpArrow />
        </div>
      )}
    </div>
  )
}
