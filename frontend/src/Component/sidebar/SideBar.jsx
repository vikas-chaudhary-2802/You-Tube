import React, { useState } from "react";
import styles from "./SideBar.module.css";
import home from '../../assets/home.svg';
import shorts from '../../assets/shorts.svg';
import subscription from '../../assets/subscription.svg';
import music from '../../assets/music.svg';
import you from '../../assets/your_channel.svg';
import download from '../../assets/download.svg';

export default function SideBar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    // Toggle the active item (if it's already active, set it to null)
    setActiveItem(activeItem === item ? null : item);
  };

  return (
    <div className={styles.outer}>
      <div className={styles.menuItems}>
        <div onClick={() => handleClick("home")}>
          <img
            src={home}
            alt="Home"
            className={`${styles.menuItem} ${activeItem === "home" ? styles.active : ""}`}
          />
        </div>

        <div onClick={() => handleClick("shorts")}>
          <img
            src={shorts}
            alt="Shorts"
            className={`${styles.menuItem} ${activeItem === "shorts" ? styles.active : ""}`}
          />
        </div>

        <div onClick={() => handleClick("subscriptions")}>
          <img
            src={subscription}
            alt="Subscriptions"
            className={`${styles.menuItem} ${activeItem === "subscriptions" ? styles.active : ""}`}
          />
        </div>

        <div onClick={() => handleClick("music")}>
          <img
            src={music}
            alt="Music"
            className={`${styles.menuItem} ${activeItem === "music" ? styles.active : ""}`}
          />
        </div>

        <div onClick={() => handleClick("you")}>
          <img
            src={you}
            alt="Your Channel"
            className={`${styles.menuItem} ${activeItem === "you" ? styles.active : ""}`}
          />
        </div>

        <div onClick={() => handleClick("downloads")}>
          <img
            src={download}
            alt="Downloads"
            className={`${styles.menuItem} ${activeItem === "downloads" ? styles.active : ""}`}
          />
        </div>
      </div>
    </div>
  );
}
