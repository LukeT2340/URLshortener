const router = require('express').Router()
const Url = require('../models/url.model')

router.get('/:extension', async (req, res) => {
    const URLextension = req.params.extension
    try {
        const url = await Url.findOne({
            newURLextension: URLextension
        })
        console.log(url)
        if (!url) {
            return res.status(404).send("This url doesn't exist")
        }

        return res.redirect(url.originalURL)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router