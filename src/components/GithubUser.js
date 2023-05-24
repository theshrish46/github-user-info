import React from 'react'
import { useState, useEffect } from 'react'

const GithubUser = ({ username }) => {
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

    return (
        <div>
            {loading && <h2>Loading. . . .</h2>}
            {error && <h2>{error.message}</h2>}

            {
                user && (
                    <ul>
                        <div className="info">
                            <li className='avatar'>SHrish Kerur</li>
                            <li className='username'>Shrish Kerur</li>
                            <li className='userfollower'>Followers: 4</li>
                            <li className='userfollowing'>Following: 7</li>
                        </div>
                    </ul>
                )
            }
        </div>
    )
}

export default GithubUser
