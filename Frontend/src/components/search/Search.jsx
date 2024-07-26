import React, { useContext, useState } from 'react';
import { StoreContext } from '../../Context/StoreCotext';
// import "../search/search.css"; 

function Search() {
  const { food_list } = useContext(StoreContext);
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  // Filter the food list based on the search query
  const filteredFoodList = food_list.filter((food) => 
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for food..."
          value={search}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      <div className="search-results">
        {filteredFoodList.length > 0 ? (
          filteredFoodList.map(food => (
            <div key={food.id} className="search-result-item">
              <p>{food.name}</p>
        
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </>
  );
}

export default Search;
