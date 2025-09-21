import { useState } from 'react';
import SearchBar from './components/SearchBar';
import { getUser } from './services/githubApi';

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await getUser(username);
      setUser(data);
    } catch (error) {
      console.error('Error fetching user:', error);
      setUser(null);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🔍 GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {user && (
        <div>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
