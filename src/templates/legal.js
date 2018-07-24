import React from "react";


export default ({data})=>(
  <div >
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <p  dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></p>
  </div>
)

export const legalQuery = graphql`
  query legalQuery ($slug: String!){
      markdownRemark (fields: { slug: { eq: $slug} }){
        frontmatter {
          title
        }
        html
      }
}`
