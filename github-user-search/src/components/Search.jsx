import { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);

    try {
      const users = await searchUsers({ username, location, minRepos });
      if (users.length === 0) {
        setError("No users found with given criteria");
      } else {
        setResults(users);
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching users. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-4 mb-6 space-y-4"
      >
        <h2 className="text-xl font-bold">Advanced GitHub User Search</h2>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center bg-gray-100 p-4 rounded shadow"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
