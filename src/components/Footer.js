import React from "react"
import { LinkedIn } from "../assets/LinkedIn"
import Twitter from "../assets/Twitter"
import Github from "../assets/Github"
import Email from "../assets/Email"

function Footer({ bottom }) {
  return (
    <footer className={`footer-container footer-bottom`}>
      <div>© 2021 Archit Pandey | Built using Gatsby</div>
      <div className="mt-2">
        <span style={{ fontSize: "1.5rem" }}>
          <a href="https://linkedin.com/in/archit-p">
            <span
              className="svg-icon svg-text"
              style={{ marginRight: "0.25rem" }}
            >
              <LinkedIn />
            </span>
          </a>
          <a href="https://twitter.com/thesysarch">
            <span
              className="svg-icon svg-text"
              style={{ marginRight: "0.25rem" }}
            >
              <Twitter />
            </span>
          </a>
          <a href="https://github.com/archit-p">
            <span
              className="svg-icon svg-text"
              style={{ marginRight: "0.25rem" }}
            >
              <Github />
            </span>
          </a>
          <a href="mailto:archpndy@gmail.com">
            <span className="svg-icon svg-text">
              <Email />
            </span>
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
