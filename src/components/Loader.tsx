import React from "react";

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <div style={styles.loader}></div>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f8f8",
  },
  loader: {
    width: "50px",
    height: "50px",
    border: "5px solid #ddd",
    borderTop: "5px solid #0070f3",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default Loader;
