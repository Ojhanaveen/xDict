import { useState } from "react";

function App() {
  // Initialize dictionary
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  // State for search and result
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  // Handle search button click
  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setResult("Word not found in the dictionary.");
      return;
    }

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
      {/* Cypress expects "Dictionary App" — not "XDictionary" */}
      <h1>Dictionary App</h1>

      {/* Search input */}
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

      {/* Result section */}
      <div style={styles.result}>
        <h3>Definition:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

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
