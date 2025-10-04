import { useState } from "react";

function App() {
  // Step 1: Initialize the dictionary
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  // Step 2: States for input and result
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  // Step 3: Function to handle search
  const handleSearch = () => {
    // Make search case-insensitive
    const foundWord = dictionary.find(
      (item) => item.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div style={styles.container}>
      <h1>XDictionary 📖</h1>

      {/* Input for search term */}
      <input
        type="text"
        placeholder="Enter a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />

      {/* Search button */}
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>

      {/* Result display */}
      <div style={styles.result}>
        {result && result !== "Word not found in the dictionary." ? (
          <>
            <h3>Definition:</h3>
            <p>{result}</p>
          </>
        ) : (
          result && <p>{result}</p>
        )}
      </div>
    </div>
  );
}

// Inline CSS for basic styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    padding: "10px",
    width: "250px",
    fontSize: "16px",
  },
  button: {
    marginLeft: "10px",
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer",
  },
  result: {
    marginTop: "30px",
  },
};

export default App;
