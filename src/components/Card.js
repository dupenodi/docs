import React from "react";
import clsx from "clsx";
import styles from "./Card.module.css";

const Card = ({ title, img, icon, children, href, className, size = "md" }) => {
  const content = (
    <div
      className={clsx(styles.card, className, {
        [styles.large]: size === "lg",
      })}
    >
      {img && <img src={img} alt={title} className={styles.cardImage} />}
      {icon && <img src={icon} alt="" className={styles.cardIcon} />}
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
