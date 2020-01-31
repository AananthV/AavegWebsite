const mongoose = require('mongoose')

const sponsorSchema = new mongoose.Schema({
  name: 'string',
  title: 'string',
  logo: 'string',
  link: 'string'
})

module.exports = mongoose.model('Sponsor', sponsorSchema)
