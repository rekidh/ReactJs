import React from 'react'
import './search.css'

const SearchBar = () => {
  return (
  <div class="wrap">
    <div class="search">
      <input type="text" class="searchTerm" placeholder="Search" />
      <button type="submit" class="searchButton">
        Search
     </button>
    </div>
  </div>
  )
}

export default SearchBar