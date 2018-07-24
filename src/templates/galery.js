import React from "react"
import Card from "../components/Card.js"
import { withPrefix } from 'gatsby-link'


export default ({data}) => {

  const items = data.allMarkdownRemark.edges;

    return (
      <div>
        {items.map((item, index)=><Card imagePath={item.node.frontmatter.image} title={item.node.frontmatter.title} content={item.node.html} category={item.node.frontmatter.category} key={index} />)}
      </div>
    )
}


export const galeryQuery = graphql `
  query galeryQuery ($path: String!, $category: String){
    allMarkdownRemark(filter: {
            frontmatter: {category: {eq: $category}},
            fields: { slug: { ne: $path} }
        }){
      edges{
        node{
          html,
          frontmatter{
            title,
            image,
            category
          },
        }
      }
    }

  }
`;
