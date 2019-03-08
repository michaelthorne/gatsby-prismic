import React from 'react'
import { graphql } from 'gatsby'

const Article = ({ data: { prismicArticle } }) => {
  const { data } = prismicArticle
  return (
    <React.Fragment>
      <h1>{data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
    </React.Fragment>
  )
}

export default Article

export const pageQuery = graphql`
  query ArticleBySlug($uid: String!) {
    prismicArticle(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`