import React from 'react'
import { graphql } from 'gatsby'

const Faq = ({ data: { prismicFaq } }) => {
  const { data } = prismicFaq
  return (
    <React.Fragment>
      <h1>{data.question.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.answer.html }}/>
    </React.Fragment>
  )
}

export default Faq

export const pageQuery = graphql`
  query FaqBySlug($uid: String!) {
    prismicFaq(uid: { eq: $uid }) {
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
`