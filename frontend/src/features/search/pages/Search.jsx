
import React, { useState } from "react";
import "../style/Search.css"
const users = [
  {
    id: 1,
    username: "rahul_kumar",
    name: "Rahul Kumar",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    username: "priya_singh",
    name: "Priya Singh",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 3,
    username: "aman_dev",
    name: "Aman Kumar",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 4,
    username: "sneha_verma",
    name: "Sneha Verma",
    image: "https://i.pravatar.cc/150?img=32",
  },
];

const Search = () => {
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-page">

      <div className="search-container">

        <h2>Search</h2>

        <div className="search-input-box">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search"
            value={search}
            onFocus={() => setShowResults(true)}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowResults(true);
            }}
          />

          {search && (
            <button onClick={() => setSearch("")}>×</button>
          )}
        </div>

        {showResults && search && (
          <div className="search-results">

            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div className="search-user" key={user.id}>

                  <img src={user.image} alt={user.username} />

                  <div className="search-user-info">
                    <strong>{user.username}</strong>
                    <p>{user.name}</p>
                  </div>

                  <button className="follow-btn">
                    Follow
                  </button>

                </div>
              ))
            ) : (
              <div className="no-result">
                <div className="no-result-icon">⌕</div>
                <h3>No results found</h3>
                <p>
                  We couldn't find anything matching your search.
                </p>
              </div>
            )}

          </div>
        )}

        {!search && (
          <div className="recent-section">
            <div className="recent-header">
              <h3>Recent</h3>
              <button>Clear all</button>
            </div>

            <div className="empty-recent">
              <div className="recent-icon">⌕</div>
              <h3>No recent searches</h3>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

export default Search;
