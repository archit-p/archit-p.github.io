import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Footer from "../components/Footer"
import Breadcrumbs from "../components/Breadcrumbs"
import { useStaticQuery, graphql, Link } from "gatsby"
import PageMeta from "../components/PageMeta"

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
    <div className="container">
      <PageMeta meta={getBlogMetaData()} />
      <Breadcrumbs path={location.pathname} style={{ marginTop: "4rem" }} />
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "4rem" }}
      >
        {data.allMarkdownRemark.edges.map(post => (
          <div
            style={{
              display: "inline-block",
            }}
          >
            <Link
              to={post.node.frontmatter.slug}
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                textDecoration: "none",
                color: "black",
              }}
            >
              {post.node.frontmatter.title}
            </Link>
            <span
              className="ml-1"
              style={{ fontSize: "0.875rem", display: "inline", color: "gray" }}
            >
              {post.node.frontmatter.date}
            </span>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Blog
