import { Link } from "gatsby"
import React from "react"

function LinkWrapper({ to, title, internal, ...rest }) {
  return internal ? (
    <Link to={to} {...rest}>
      {title}
    </Link>
  ) : (
    <a href={to} {...rest}>
      {title}
    </a>
  )
}

export default LinkWrapper
