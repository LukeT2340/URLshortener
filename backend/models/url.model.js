const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    originalURL: { type: String, required: true},
    newURLextension: { type: String, required: true, unique: true},
    createdAt: { type: Date, default: Date.now}
})

module.exports = mongoose.model('Url', urlSchema)