import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FAQ from '../components/faq'
import HelpCenter from '../components/helpCenter'

class TeamsPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: 'Over Teams FAQ',
      email: 'helloteams@overhq.com',
    }
  }

  render () {
    const faq = this.props.data.allPrismicFaq.edges
    return (
      <Layout>
        <SEO title={this.state.title}/>
        <div className="section">
          <FAQ title={this.state.title} faq={faq}/>
        </div>

        <HelpCenter email={this.state.email}/>
      </Layout>
    )
  }
}

export default TeamsPage

export const query = graphql`
  query {
    allPrismicFaq(filter: {lang: {eq: "en-za"}, tags: {in: "teams"}}, sort: { fields: [data___posted], order: DESC}) {
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