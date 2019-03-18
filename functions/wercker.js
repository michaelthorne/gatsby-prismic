const request = require('request')

exports.handler = (req, res) => {
  const options = {
    url: 'https://app.wercker.com/api/v3/runs/',
    method: 'POST',
    headers: {
      'Authorization': `Bearer c69da77c1b8bbea3cfd06db208bd7d1271f11eaa5a74d80ad5fa049f2ae5bdd9`,
    },
    body: {
      'pipelineId': '5c8b6176c910281000b360d9',
    },
    json: true,
  }

  request(options, (error, response, body) => {
    if (error) {
      console.log(error)
      res.status(response.statusCode).send('¯\\_(ツ)_/¯')
    } else {
      console.log(body)
      res.status(200).send('🎉')
    }
  })
}
