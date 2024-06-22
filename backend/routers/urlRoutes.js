const router = require('express').Router()
const Url = require('../models/url.model')

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'

// Shorten
router.post('/shorten', async (req, res) => {
    const url = req.body.url

    if (!url) {
        return res.status(400).json({ error: "No url provided"})
    }

    try {
        const { customAlphabet } = await import('nanoid')
        const nanoid = customAlphabet(alphabet, 4)
        

        const shortId = nanoid()
        const newURL = new Url({
            originalURL: url,
            newURLextension: shortId
        })

        await newURL.save()
        return res.status(201).json({ url: `${process.env.siteURL}/r/${newURL.newURLextension}`})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router