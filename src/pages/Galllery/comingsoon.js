import React from "react";
import styles from "./css/gallery.module.css";

export function ComingSoon() {
  return (
    <div className={styles.comingsoon}>
      <h1 style={{ fontSize: "3em", fontWeight: "bold", marginBottom: "20px" }}>
        Coming Soon
      </h1>
      <p style={{ fontSize: "1.5em", maxWidth: "600px", lineHeight: "1.6" }}>
      Stay tuned for updates and some exciting new features coming soon!
      </p>
    </div>
  );
}

export default ComingSoon;
