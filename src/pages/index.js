import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Footer from "../components/Footer"
import LinkWrapper from "../components/LinkWrapper"
import PageMeta from "../components/PageMeta"

function getHomeMetaData() {
  return {
    title: "Archit Pandey",
    description: "Programmer, Software Engineer",
    keywords: "blog, technology, programming",
  }
}

function getPageLinks() {
  return [
    {
      to: "/blog",
      title: "blog",
      internal: true,
    },
    {
      to:
        "https://drive.google.com/file/d/1z0UT4gpCxoCX5q31rcs5FV0rNIDbevLf/view?usp=sharing",
      title: "cv",
      internal: false,
    },
    {
      to: "https://github.com/archit-p",
      title: "github",
      internal: false,
    },
    {
      to: "https://linkedin.com/in/archit-p",
      title: "linkedin",
      internal: false,
    },
  ]
}

function Home() {
  const links = getPageLinks()

  return (
    <div className="container">
      <PageMeta meta={getHomeMetaData()} />
      <div style={{ fontSize: "1.5rem", fontWeight: 700, marginTop: "4rem" }}>
        Archit Pandey
      </div>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {links.map(link => (
          <li
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              boxSizing: "border-box",
            }}
            key={link.title}
          >
            <LinkWrapper
              style={{
                color: "black",
                fontSize: "1.5rem",
                fontWeight: 700,
                textDecoration: "underline",
                boxSizing: "border-box",
              }}
              to={link.to}
              internal={link.internal}
              title={link.title}
            />
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  )
}

export default Home
