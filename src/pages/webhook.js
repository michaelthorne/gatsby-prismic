import React, { Component } from 'react'

const axios = require('axios')

class WebhookPage extends Component {
  constructor (props) {
    super(props)
    axios.post('https://app.wercker.com/api/v3/runs/', {
      pipelineId: '5c8b6176c910281000b360d9',
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <div>
        Webhook!
      </div>
    )
  }
}

export default WebhookPage