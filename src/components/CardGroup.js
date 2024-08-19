import React from "react";
import clsx from "clsx";
import styles from "./CardGroup.module.css";

const CardGroup = ({ children, className }) => {
  return <div className={clsx(styles.cardGroup, className)}>{children}</div>;
};

export default CardGroup;
