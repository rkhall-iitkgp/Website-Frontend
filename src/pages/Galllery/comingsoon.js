import React from "react";

export function ComingSoon() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f7f7f7",
        color: "#333",
        textAlign: "center",
      }}
    >
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
