import React from "react"
import "normalize.css/normalize.css"
import Footer from "../components/Footer"
import Breadcrumbs from "../components/Breadcrumbs"
import { useStaticQuery, graphql, Link } from "gatsby"
import PageMeta from "../components/PageMeta"
import ThemeSwitch from "../components/ThemeSwitch"

function getBlogMetaData() {
  return {
    title: "Blog - Archit Pandey",
    description:
      "Interesting tech and programming findings, experimenting with difference languages and frameworks.",
    keywords: "blog, technology, programming",
  }
}

function Blog({ location }) {
  // we are querying graphql store for getting all markdown data
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM Do YYYY")
              slug
              title
            }
          }
        }
      }
    }
  `)

  return (
    <div
      className="container"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <PageMeta meta={getBlogMetaData()} />
      <header className="d-flex ai-center" style={{ height: 120 }}>
        <Breadcrumbs path={location.pathname} />
        <span style={{ marginLeft: "auto" }}>
          <ThemeSwitch />
        </span>
      </header>
      <div className="d-flex flex-column" style={{ flex: 1 }}>
        {data.allMarkdownRemark.edges.map(post => (
          <div className="mb-4">
            <Link className="blog-link mr-1" to={post.node.frontmatter.slug}>
              <span
                className="mb-0 mt-0 d-inline-block"
                style={{ fontSize: "1.25rem", fontWeight: 600 }}
              >
                {post.node.frontmatter.title}
              </span>
            </Link>
            <span className="blog-date">{post.node.frontmatter.date}</span>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Blog
