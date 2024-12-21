import React from "react";
import styles from "./css/comingsoon.module.css";

export function ComingSoon() {
  return (
    <div className={styles.comingsoon}>
      <h1 className={styles.heading}>
        Coming Soon
      </h1>
      <p className={styles.text}>
      Stay tuned for updates and some exciting new features coming soon!
      </p>
    </div>
  );
}

export default ComingSoon;
