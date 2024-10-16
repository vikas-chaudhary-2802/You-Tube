import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css"; // Import the CSS module

export default function Card({ channel, video }) {
  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
      <div className={styles.container}>
        <img
          className={styles.thumbnail}
          src={video.imageUrl}
          alt={video.title}
        />
        <div className={styles.details}>
          <img
            className={styles.icon}
            src={channel.img}
            alt={`${channel.name}'s avatar`}
          />
          <div className={styles.textContainer}>
            <h3 className={styles.title}>{video.title}</h3>
            <p className={styles.uploadedBy}>{channel.name}</p>
            <div className={styles.info}>
              <span>{video.views} views</span>
              <span>•</span>
              <span>{new Date(video.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
