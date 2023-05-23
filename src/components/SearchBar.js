import React from 'react'
import { useState } from 'react'
import GithubUser from './GithubUser';

const SearchBar = () => {
    const [username, setUsername] = useState('');
    return (
        <>
            <div className='searchbar-cont'>
                <h1 className='search-head'>Please enter the Name</h1>
                <form>
                    <label className='label-tag' htmlFor="username"></label>
                    <input className='input-tag'
                        type="text" placeholder='Enter a name to search'
                        onChange={(event) => setUsername(event.target.value)} />
                </form>
            </div>

            <div className='results'>
            {
                username ?
                <GithubUser username={username} /> :
                <p>Please Enter a valid name . . .</p>
            }
            </div>
        </>
    )
}

export default SearchBar
