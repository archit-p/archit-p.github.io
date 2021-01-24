import React from "react"
import { Link } from "gatsby"

function Breadcrumbs({ path, ...rest }) {
  let trimmedPath = path
  if (path[path.length - 1] === "/") {
    trimmedPath = trimmedPath.slice(0, -1)
  }
  const items = trimmedPath.split("/")

  let breadcrumbs = []
  // first push the homepage link
  breadcrumbs.push(
    <span
      style={{
        fontWeight: 700,
        display: "inline-block",
        marginRight: "0.25rem",
      }}
      key="seperator-0"
    >
      /
    </span>
  )
  breadcrumbs.push(
    <Link
      aria-current="page"
      style={{
        fontWeight: 700,
        color: "black",
        textDecoration: "none",
        borderBottom: "0.125rem solid black",
        paddingBottom: "0.25rem",
        marginRight: "0.25rem",
      }}
      key="home"
      to="/"
    >
      Archit Pandey
    </Link>
  )
  let currentLink = "/"
  for (var i = 1; i < items.length - 1; ++i) {
    currentLink += items[i]
    breadcrumbs.push(
      <span
        style={{
          fontWeight: 700,
          display: "inline-block",
          marginRight: "0.25rem",
        }}
        key={"seperator-" + i}
      >
        /
      </span>
    )
    breadcrumbs.push(
      <Link
        aria-current="page"
        style={{
          fontWeight: 700,
          color: "black",
          textDecoration: "none",
          borderBottom: "0.125rem solid",
          paddingBottom: "0.25rem",
          marginRight: "0.25rem",
        }}
        to={currentLink}
        key={items[i]}
      >
        {items[i]}
      </Link>
    )
    currentLink += "/"
  }

  return <div {...rest}>{breadcrumbs}</div>
}

export default Breadcrumbs
