import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HelpCenter from '../components/helpCenter'

import iconArrow from '../images/icon-arrow.svg'
import toggleFaq from '../utils/toggleFaq'

class TeamsPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: 'helloteams@overhq.com',
    }
  }

  render () {
    const faq = this.props.data.allPrismicFaq
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

        <HelpCenter email={this.state.email}/>
      </Layout>
    )
  }
}

export default TeamsPage

export const query = graphql`
  query {
    allPrismicFaq(filter: {tags: {in: "teams"}}, sort: { fields: [data___posted], order: DESC}) {
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