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
    <span className="crumb-seperator" key="seperator-0">
      /
    </span>
  )
  breadcrumbs.push(
    <Link aria-current="page" className="crumb-link" key="home" to="/">
      Archit Pandey
    </Link>
  )
  let currentLink = "/"
  for (var i = 1; i < items.length - 1; ++i) {
    currentLink += items[i]
    breadcrumbs.push(
      <span className="crumb-seperator" key={"seperator-" + i}>
        /
      </span>
    )
    breadcrumbs.push(
      <Link
        aria-current="page"
        className="crumb-link"
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
