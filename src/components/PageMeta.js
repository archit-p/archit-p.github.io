import React from "react"
import { Helmet } from "react-helmet"
import Logo from "src/assets/logo.png"

function PageMeta({ meta }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <link rel="icon" href={Logo} type="image/png" />
    </Helmet>
  )
}

export default PageMeta
