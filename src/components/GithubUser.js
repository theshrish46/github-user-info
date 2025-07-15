import React from 'react';
import Github from '../hooks/Github';

const GithubUser = ({ username }) => {
  const [user, loading, error] = Github(username);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {loading && <h2 className="text-xl font-semibold text-blue-600">Loading...</h2>}
      {error && <h2 className="text-red-500 text-xl">{error.message}</h2>}

      {user && (
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full">
          <div className="flex flex-col items-center text-center">
            <img
              src={user.avatar_url}
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-600 italic">@{user.login}</p>
          </div>

          <div className="mt-6 space-y-3 text-gray-700">
            <p><strong>Followers:</strong> {user.followers}</p>
            <p><strong>Following:</strong> {user.following}</p>
            {user.location && <p><strong>Location:</strong> {user.location}</p>}
            {user.bio && <p><strong>Bio:</strong> {user.bio}</p>}
            {user.blog && (
              <p>
                <strong>Blog:</strong>{' '}
                <a
                  href={user.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {user.blog}
                </a>
              </p>
            )}
            <p><strong>Public Repos:</strong> {user.public_repos}</p>
            {user.twitter_username && (
              <p>
                <strong>Twitter:</strong>{' '}
                <a
                  href={`https://twitter.com/${user.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  @{user.twitter_username}
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubUser;
