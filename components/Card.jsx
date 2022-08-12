import React from "react";
import styles from "../styles/Home.module.css";
const Card = ({
  href,
  title,
  text,
  captureDragStart,
  captureDragEnter,
  captureDragEnd,
}) => {
  return (
    <a
      href={href}
      className={styles.card}
      draggable
      onDragStart={(e) => captureDragStart(e)}
      onDragEnter={(e) => captureDragEnter(e)}
      onDragEnd={(e) => captureDragEnd(e)}
    >
      <h2>{title} &rarr;</h2>
      <p>{text}</p>
    </a>
  );
};

export default Card;
