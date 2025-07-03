// src/components/SearchBar/SearchBar.jsx
import React, { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query.toLowerCase());
  };

  return (
    <div className="flexCenter search-bar">
      <HiLocationMarker color="var(--blue)" size={25} />
      <input
        type="text"
        placeholder="Busque um imóvel"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="button" onClick={handleSearch}>Busca</button>
    </div>
  );
};

export default SearchBar;
