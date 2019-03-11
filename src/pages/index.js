import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import iconArrow from '../images/icon-arrow.svg'
import iconHelp from '../images/icon-help.svg'

function toggleFaq (e) {
  e.target.parentElement.classList.toggle('is-open')
}

function IndexPage (props) {
  const faq = props.data.allPrismicFaq
  return (
    <Layout>
      <SEO title="FAQ"/>
      <div className="section">
        <table id="faq" className="table" cellPadding="0" cellSpacing="0">
          <caption>FAQ</caption>
          <tbody>
          {faq.edges.map(({ node }) => (
            <tr key={node.id}>
              <td className="accordion" onClick={(e) => toggleFaq(e)}>
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
      </div>

      <div className="section">
        <table className="table" cellPadding="0" cellSpacing="0">
          <caption>Have more questions?</caption>
          <tbody>
          <tr id="help-center">
            <td>
              <a className="link has-icon" href="https://intercom.help/over">
              <span className="icon">
                <img src={iconHelp} width="28" height="28" alt=""/>
              </span>Help Center</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default IndexPage

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