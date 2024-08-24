import React from "react";
import clsx from "clsx";
import styles from "./Card.module.css";

const Card = ({ title, img, icon, children, href, className, size = "md" }) => {
  // Use the provided img or icon URL directly without appending any domain
  const imageUrl = img || icon;

  const content = (
    <div
      className={clsx(styles.card, className, {
        [styles.large]: size === "lg",
      })}
    >
      {imageUrl && <img src={imageUrl} alt={title || ""} className={styles.cardImage} />}
      {title && <h3 className={styles.cardTitle}>{title}</h3>}
      <div className={styles.cardContent}>{children}</div>
    </div>
  );

  return href ? (
    <a href={href} className={styles.cardLink}>
      {content}
    </a>
  ) : (
    <div className={styles.cardContainer}>{content}</div>
  );
};

export default Card;
