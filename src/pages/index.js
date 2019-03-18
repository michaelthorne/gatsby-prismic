import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FAQ from '../components/faq'
import HelpCenter from '../components/helpCenter'

class IndexPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: 'FAQ'
    }
  }

  render () {
    const faq = this.props.data.allPrismicFaq.edges
    return (
      <Layout title="FAQ">
        <SEO title={this.state.title}/>
        <div className="section">
          <FAQ title={this.state.title} faq={faq}/>
        </div>

        <HelpCenter/>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query {
    allPrismicFaq(filter: {lang: {eq: "en-za"}, tags: {in: "ios"}}, sort: { fields: [data___posted], order: DESC}) {
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