import React, { useState } from 'react';

const CitySearch = ({ onSearch, city }) => {
  const [query, setQuery] = useState(city);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (!query) {
      setError('Please enter a city name');
      return;
    }
    setError(null);
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="city-search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search for a city"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default CitySearch;
