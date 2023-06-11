// components/SearchForm.js

import { useState } from 'react';

export default function SearchForm({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchQuery);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search-input" id="search-input" placeholder="Search by Name...." 
      className='rounded-l-lg p-2 text-black w-3/6' value={searchQuery} onChange={handleChange} />
      <button type="submit" id="search-btn" className='rounded-r-lg bg-sky-600 p-2'>Search</button>
    </form>
  );
}
