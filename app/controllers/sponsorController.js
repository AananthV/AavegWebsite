const Sponsors = require('../models/Sponsor.js')

exports.getSponsors = async (req, res) => {
  try {
    const sponsorData = await Sponsors.find({}).exec()
    return res.send(sponsorData)
  } catch (error) {
    return res.status(500).send(error)
  }
}
