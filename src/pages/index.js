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
  console.log("total images:", images.allFile.edges.length)
  return (
    <Layout>
      <Link to="/multi-family">Multi Family Housing</Link>
      <div
        style={{
          display: "grid",
          gridGap: "5px",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {images.allFile.edges.map((edge, i) => {
          const domain = edge.node.relativePath
            .replace(/^[0-9]+(_)/gi, "")
            .replace(".jpg", "")

          return (
            <div key={`${edge.node.relativePath}`} style={{ padding: 10 }}>
              <a href={`http://${domain}`}>{domain}</a>
              <Img fluid={edge.node.childImageSharp.fluid} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
