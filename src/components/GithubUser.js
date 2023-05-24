import React from 'react'
import Github from '../hooks/Github';

const GithubUser = ({ username }) => {
    const [user, loading, error] = Github(username);
    return (
        <div>
            {loading && <h2>Loading. . . .</h2>}
            {error && <h2>{error.message}</h2>}

            {
                user && (
                    <ul>
                        <div className="info">
                            <li >
                                <img className='avatar' src={user.avatar_url} alt={user.id} />
                            </li>
                            <li className='username'>
                                {user.name}
                            </li>

                            <div className="engage">
                                <li className='userfollower'>
                                    Followers: <strong>{user.followers}</strong>
                                </li>
                                <li className='userfollowing'>
                                    Following: <strong>{user.following}</strong>
                                </li>
                            </div>

                            <li className="location">
                            <strong>{user.location}</strong>
                            </li>

                            <li>{user.bio}</li>
                        </div>
                    </ul>
                )
            }
        </div>
    )
}

export default GithubUser

// public_repos :  45
// received_events_url : "https://api.github.com/users/theshrish46/received_events"
// repos_url :  "https://api.github.com/users/theshrish46/repos"
// site_admin :  false
// starred_url :  "https://api.github.com/users/theshrish46/starred{/owner}{/repo}"
// subscriptions_url :  "https://api.github.com/users/theshrish46/subscriptions"
// twitter_username :  "TheShrish46"
// type :  "User"
// updated_at :  "2023-05-18T12:51:14Z"
// url :  "https://api.github.com/users/theshrish46"
// avatar_url :  "https://avatars.githubusercontent.com/u/100413262?v=4"
// bio :  "\"I'm a programmer currently learning MERN stack. And an Open-Source enthusiast."
// blog :  "https://shrish-kerur-theshrish46-gmailcom.vercel.app"
// company :  null
// created_at :  "2022-02-25T10:22:00Z"
// email :  null
// events_url :  "https://api.github.com/users/theshrish46/events{/privacy}"
// followers :  4
// followers_url :  "https://api.github.com/users/theshrish46/followers"
// following :  7
// following_url :  "https://api.github.com/users/theshrish46/following{/other_user}"
// gists_url :  "https://api.github.com/users/theshrish46/gists{/gist_id}"
// gravatar_id :  ""
// hireable :  true