import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FAQ from '../components/faq'
import HelpCenter from '../components/helpCenter'

class AndroidPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: 'helloandroid@overhq.com',
    }
  }

  render () {
    const faq = this.props.data.allPrismicFaq.edges
    return (
      <Layout>
        <SEO title="FAQ"/>
        <div className="section">
          <FAQ faq={faq}/>
        </div>

        <HelpCenter email={this.state.email}/>
      </Layout>
    )
  }
}

export default AndroidPage

export const query = graphql`
  query {
    allPrismicFaq(filter: {tags: {in: "android"}}, sort: { fields: [data___posted], order: DESC}) {
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