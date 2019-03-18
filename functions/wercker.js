const request = require('request')

exports.handler = (req, res) => {
  const options = {
    url: 'https://app.wercker.com/api/v3/runs/',
    method: 'POST',
    headers: {
      'Authorization': `'Bearer ${process.env.WERCKER_ACCESS_TOKEN}'`,
    },
    body: {
      'pipelineId': '5c8b6176c910281000b360d9',
    },
    json: true,
  }

  request(options, (error, response) => {
    if (!error && response.statusCode === 200) {
      res.status(200).send(':)')
    } else {
      console.error(error)
      res.status(response.statusCode).send(':(')
    }
  })
}
