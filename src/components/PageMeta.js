import React from "react"
import { Helmet } from "react-helmet"

function PageMeta({ meta }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="google-site-verification" content="uyH_CpYLfeNf0knUsy21H9I4khlWMY68MSl41Ah65Cc" />
    </Helmet>
  )
}

export default PageMeta
