import React, { useEffect, useState } from 'react';
import Github from '../hooks/Github';

const GithubUser = ({ username }) => {
  const [user, loading, error] = Github(username);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      if (user) {
        try {
          const res = await fetch(`https://api.github.com/users/${username}/repos`);
          const data = await res.json();
          setRepos(data.slice(0, 5)); // Show top 5 repos
        } catch (err) {
          console.error("Failed to fetch repos:", err);
        }
      }
    };
    fetchRepos();
  }, [user, username]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6 flex justify-center items-start">
      {loading && <h2 className="text-xl text-blue-600 animate-pulse">Loading...</h2>}
      {error && <h2 className="text-red-500 text-xl">{error.message}</h2>}

      {user && (
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 transition-all duration-500 hover:shadow-2xl">
          {/* User Header */}
          <div className="flex items-center gap-4 border-b pb-4 mb-4">
            <img
              src={user.avatar_url}
              alt="Avatar"
              className="w-20 h-20 rounded-full border-4 border-blue-400 shadow-md transition-transform duration-300 hover:scale-105"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
              <p className="text-gray-600">@{user.login}</p>
              <p className="text-sm text-gray-500">{user.location}</p>
            </div>
          </div>

          {/* Stats and Bio */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <p><strong>Followers:</strong> {user.followers}</p>
            <p><strong>Following:</strong> {user.following}</p>
            <p><strong>Repos:</strong> {user.public_repos}</p>
            {user.bio && <p className="col-span-full"><strong>Bio:</strong> {user.bio}</p>}
            {user.blog && (
              <p className="col-span-full">
                <strong>Blog:</strong>{' '}
                <a href={user.blog} className="text-blue-600 underline" target="_blank" rel="noreferrer">
                  {user.blog}
                </a>
              </p>
            )}
            {user.twitter_username && (
              <p className="col-span-full">
                <strong>Twitter:</strong>{' '}
                <a
                  href={`https://twitter.com/${user.twitter_username}`}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  @{user.twitter_username}
                </a>
              </p>
            )}
          </div>

          {/* Repositories */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Top Repositories</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {repos.map(repo => (
                <div
                  key={repo.id}
                  className="border rounded-lg p-4 bg-slate-50 hover:bg-white shadow hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-semibold text-blue-700">{repo.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{repo.description || "No description"}</p>
                  <div className="text-xs text-gray-500">
                    Language: {repo.language || "N/A"} <br />
                    ⭐ Stars: {repo.stargazers_count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubUser;
