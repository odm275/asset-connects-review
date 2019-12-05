import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"

const IndexPage = () => {
  const images = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "images-student" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const sortImages = images.allFile.edges.sort((a, b) => {
    const num1 = parseInt(a.node.relativePath.split("_")[0])
    const num2 = parseInt(b.node.relativePath.split("_")[0])
    return num1 - num2
  })
  return (
    <Layout>
      <Link to="/multi-family">Multi Family Housing</Link>
      <div
        style={{
          display: "grid",
          gridGap: "5px",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        {sortImages.map((edge, i) => {
          const domain = edge.node.relativePath
            .replace(/^[0-9]+(_)/gi, "")
            .replace(".jpg", "")
            .replace("error_", "")
          var regex = /prod.ach.poetic-ach/g
          var regex2 = /error/g

          const pupError = regex2.test(edge.node.relativePath)

          const num = parseInt(edge.node.relativePath.split("_")[0])
          const isStaging = regex.test(domain)

          return (
            <div
              key={`${edge.node.relativePath}`}
              style={{
                padding: 15,
                border:
                  isStaging || pupError ? "4px solid red" : "4px solid blue",
              }}
            >
              <h2>#{num}</h2>

              <h3 style={{ color: (isStaging || pupError) && "red" }}>
                {isStaging ? "Staging site. We probably don't need this" : null}
              </h3>
              <a href={`http://${domain}/media`}>{domain+'/media'}</a>
              <Img fluid={edge.node.childImageSharp.fluid} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
