import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import icon from '../../assets/search.svg';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${searchText}`);
    // Add your search logic here
  };

  return (
    <div className={styles.searchBar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Search" 
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)} 
          className={styles.input} 
          aria-label="Search"
        />
        <button type="submit" className={styles.button}>
          <img src={icon} alt="Search Icon" className='styles.icon'/>
        </button>
      </form>
    </div>
  );
}
