// ./src/components/SearchBar.tsx
import React, { useState } from 'react';
// import './SearchBar.scss'; // Assuming you have a stylesheet for SearchBar

interface SearchBarProps {
  pageData: { pageName: string; content: string }[]; // Array of page data
  setFilteredData: React.Dispatch<React.SetStateAction<string>>; // Adjust the type accordingly
}

const SearchBar: React.FC<SearchBarProps> = ({ pageData, setFilteredData }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Searching for: ${searchQuery}`);

    // Perform search logic across all pages
    const filteredContent = pageData
      .filter((page) => page.content.toLowerCase().includes(searchQuery.toLowerCase()))
      .map((page) => page.content)
      .join('\n');

    setFilteredData(filteredContent);
  }

  return (
    <form onSubmit={handleSearchSubmit} className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
