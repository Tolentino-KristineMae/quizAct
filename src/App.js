import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to My React App</h1>
      <p style={styles.paragraph}>
        You have successfully created your React app. Start building something awesome!
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  title: {
    color: "#008080", // Teal theme
    fontSize: "36px",
  },
  paragraph: {
    fontSize: "18px",
    color: "#333",
  },
};

export default App;
