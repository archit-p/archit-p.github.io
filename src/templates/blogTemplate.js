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
      <header className="d-flex ai-center" style={{ height: 120 }}>
        <Breadcrumbs path={location.pathname} />
      </header>
      <ScrollToTop />
      <section>
        <h1>{pageContext.frontmatter.title}</h1>
        <span className="blog-date">{pageContext.frontmatter.date}</span>
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
