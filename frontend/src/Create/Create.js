import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
    const [url, setUrl] = useState("")
    const [newURL, setNewURL] = useState("")
    const [error, setError] = useState("")

    const shortenURL = async (e) => {
        e.preventDefault()
        try {
            const body = { url }
            console.log(url)
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/url/shorten`, body)
            setNewURL(response.data.url)
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }

    return (
        <div className='d-flex flex-column'>
            <form onSubmit={shortenURL}>
                <input type='text' placeholder='Paste in your URL' onChange={(e) => setUrl(e.target.value)}></input>
                <input type='submit'></input>
            </form>
            {newURL && (
                <>
                    <h4>Your URL has been shortened:</h4>
                    <a href={newURL}>{newURL}</a>
                </>
            )}
        </div>
    )
}

export default Create