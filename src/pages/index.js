import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import iconArrow from '../images/icon-arrow.svg'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="FAQ"/>
      <table id="faq" className="table" cellPadding="0" cellSpacing="0">
        <caption>FAQ</caption>
        <tbody>
        {data.allPrismicFaq.edges.map(({ node }) => (
          <tr key={node.id}>
            <td className="accordion">
              <div className="link">{node.data.question.text}
                <span className="arrow">
                  <img src={iconArrow} width="16" height="26" alt=""/>
                </span>
              </div>
            </td>
            <td className="description" dangerouslySetInnerHTML={{ __html: node.data.answer.html }}/>
          </tr>
        ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allPrismicFaq(filter: {tags: {in: "ios"}}) {
      edges {
        node {
          id
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