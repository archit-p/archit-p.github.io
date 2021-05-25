import React from "react"
import "normalize.css/normalize.css"
import Footer from "../components/Footer"
import LinkWrapper from "../components/LinkWrapper"
import PageMeta from "../components/PageMeta"
import Emoji from "../components/Emoji"
import ThemeSwitch from "../components/ThemeSwitch"

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
      to:
        "https://drive.google.com/file/d/1z0UT4gpCxoCX5q31rcs5FV0rNIDbevLf/view?usp=sharing",
      title: "cv",
      internal: false,
    },
    {
      to: "/projects",
      title: "projects",
      internal: true,
    },
    {
      to: "/blog",
      title: "blog",
      internal: true,
    },
  ]
}

function Home() {
  const links = getPageLinks()

  return (
    <div className="container">
      <PageMeta meta={getHomeMetaData()} />
      <header
        className="d-flex flex-column jc-center"
        style={{
          height: 120,
        }}
      >
        <div
          style={{ fontSize: "1.25rem", fontWeight: 600 }}
          className="d-flex ai-center"
        >
          Archit Pandey
          <span style={{ marginLeft: "auto" }}>
            <ThemeSwitch />
          </span>
        </div>
      </header>
      <p style={{ maxWidth: 640 }} className="mt-0">
        <Emoji symbol="👋" label="waving-hand" /> Hi there, welcome to my
        webpage! I'm a software engineer by profession, and enjoy gardening in
        my spare time. Currently, I am employed as a Software Development
        Engineer at <a href="http://deskera.com">Deskera</a>.
      </p>
      <ul className="pl-0" style={{ listStyleType: "none" }}>
        {links.map(link => (
          <li className="ap-nav-wrapper" key={link.title}>
            <LinkWrapper
              className="ap-nav-link"
              to={link.to}
              internal={link.internal}
              title={link.title}
            />
          </li>
        ))}
      </ul>
      <Footer bottom={true} />
    </div>
  )
}

export default Home
