import React, { useState, useEffect } from 'react'; 
import { NavLink, Outlet } from 'react-router-dom'; 
import { getCategories } from '../api'; 
import SearchBar from './SearchBar.js'; 


export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    // Fetch categories asynchronously
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
      setFilteredCategories(fetchedCategories);
    };

    fetchCategories();
  }, []);

  const handleSearch = (query) => {
    const filtered = categories.filter((cat) =>
      cat.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  return (
    <div className="container">
      <h1>Schools</h1>

      <SearchBar onSearch={handleSearch} />

      <ul className="categories">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <li key={cat.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "category-active" : null
                }
                to={`/categories/${cat.id}`}
              >
                {cat.name}
              </NavLink>
            </li>
          ))
        ) : (
          <p>No categories found</p>
        )}
      </ul>

      <Outlet />
    </div>
  );
}


