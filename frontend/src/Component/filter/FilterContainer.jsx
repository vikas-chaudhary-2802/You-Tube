import React, { useState } from "react";
import styles from "./FilterContainer.module.css";

export default function FilterContainer({ filter }) {
  const [activeFilter, setActiveFilter] = useState(null); // Track active filter

  const handleFilterClick = (item) => {
    // Toggle active filter (or select a new filter)
    setActiveFilter(activeFilter === item ? null : item);
  };

  return (
    <div className={styles.containerHead}>
      {/* This will create a scrollable horizontal list of filters */}
      <ul className={styles.filterList}>
        {filter.map((val, ind) => (
          <li
            key={ind}
            className={`${styles.filterItem} ${activeFilter === val ? styles.active : ""}`}
            onClick={() => handleFilterClick(val)}
          >
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
}
