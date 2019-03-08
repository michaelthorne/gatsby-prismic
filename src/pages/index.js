import React from 'react'
import { graphql, Link } from 'gatsby'

export default ({ data }) => {
  return (
    <div>
      {data.allPrismicFaq.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.uid}>
            {node.data.question.text}
          </Link>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allPrismicFaq {
      edges {
        node {
          id
          uid
          data {
            question {
              text
            }
            answer {
              html
            }
          }
        }
      }
    }
  }
`