import React, { useState } from "react";
import FilterContainer from "./FilterContainer";
import styles from "./Filter.module.css";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  const filter = [
    "All",
    "Artificial Intelligence",
    "Comedy",
    "Gaming",
    "Vlog",
    "Beauty",
    "Travel",
    "Food",
    "Fashion",
    "Music",
    "Education",
    "Sports",
    "News",
    "Technology",
    "Science",
    "Health & Fitness",
    "Movies & Shows",
    "Podcasts",
    "Motivation",
    "Finance",
    "DIY & Crafts",
    "Photography",
    "Auto & Vehicles",
    "Kids",
    "Pets & Animals",
    "History",
    "Business & Startups",
    "Live Streams"
  ];

  // Toggle the filter panel's visibility
  const toggleFilterPanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.filter}>
      {/* Filter Panel */}
      <div className={`${styles.filterPanel} ${isOpen ? styles.open : ""}`}>
        <FilterContainer filter={filter} />
      </div>
    </div>
  );
}
