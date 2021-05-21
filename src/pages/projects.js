import React from "react"
import "normalize.css/normalize.css"
import Footer from "../components/Footer"
import Breadcrumbs from "../components/Breadcrumbs"
import PageMeta from "../components/PageMeta"
import EditableReactTable from "../assets/editable-react-table.gif"
import Table from "../assets/Table"
import ThemeSwitch from "../components/ThemeSwitch"

function getMetaData() {
  return {
    title: "Projects - Archit Pandey",
    description:
      "Interesting tech and programming findings, experimenting with difference languages and frameworks.",
    keywords: "code, technology, programming",
  }
}

export default function Projects({ location }) {
  const projects = [
    {
      logo: <Table />,
      title: "Editable React Table",
      subTitle: "React Table built to resemble a database.",
      link: "https://github.com/archit-p/editable-react-table",
      image: EditableReactTable,
      alt: "editable-react-table-demo",
    },
  ]
  return (
    <div className="container">
      <PageMeta meta={getMetaData()} />
      <header className="d-flex ai-center" style={{ height: 120 }}>
        <Breadcrumbs path={location.pathname} />
        <span style={{ marginLeft: "auto" }}>
          <ThemeSwitch />
        </span>
      </header>
      <div>
        {projects.map(project => (
          <div>
            <div className="d-flex" style={{ marginBottom: "1rem" }}>
              <div
                className="project-icon-container"
                style={{
                  marginRight: 12,
                }}
              >
                <span className="svg-icon-xl project-icon">{project.logo}</span>
              </div>
              <div className="project-title-container">
                <h3 className="mb-1">{project.title}</h3>
                <div>{project.subTitle}</div>
              </div>
            </div>
            <div>
              <img
                src={project.image}
                alt="editable-react-table-demo"
                width="100%"
              />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
