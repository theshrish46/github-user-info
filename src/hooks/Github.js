import React from 'react'
import { useState, useEffect } from 'react'

const Github = (username) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUserDate = async () => {
            setLoading(true)

            try {
                const userDate = await fetch(`https://api.github.com/users/${username}`)
                const parsedData = await userDate.json()
                setUser(parsedData)
                setLoading(false)
                console.log(parsedData)
            }
            catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }

        fetchUserDate()

    }, [username]);


    return ([user, loading, error])
}

export default Github
