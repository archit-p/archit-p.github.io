import React, { useEffect } from "react"
import Breadcrumbs from "src/components/Breadcrumbs"
import Footer from "src/components/Footer"
import Prism from "prismjs"
import "prismjs/components/prism-makefile"
import "prismjs/components/prism-json"
import "prismjs/components/prism-go"
import "prismjs/components/prism-python"
import "prismjs/themes/prism.css"
import PageMeta from "../components/PageMeta"
import ScrollToTop from "../components/ScrollToTop"

function getPostMetaData(title, description, keywords) {
  return {
    title: title,
    description: description,
    keywords: keywords,
  }
}

function BlogTemplate({ location, pageContext }) {
  useEffect(function () {
    Prism.highlightAll()
  }, [])

  return (
    <div className="container">
      <PageMeta
        meta={getPostMetaData(
          pageContext.frontmatter.title,
          pageContext.frontmatter.description,
          pageContext.frontmatter.keywords
        )}
      />
      <Breadcrumbs path={location.pathname} style={{ marginTop: "4rem" }} />
      <ScrollToTop />
      <section style={{ marginTop: "4rem" }}>
        <h1>{pageContext.frontmatter.title}</h1>
        <span style={{ fontSize: "0.875rem", color: "gray" }}>
          {pageContext.frontmatter.date}
        </span>
        <article
          style={{ marginTop: "2rem" }}
          dangerouslySetInnerHTML={{ __html: pageContext.content }}
        />
      </section>
      <Footer />
    </div>
  )
}

export default BlogTemplate
