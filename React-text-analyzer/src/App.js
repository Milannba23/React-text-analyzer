import React, { useState } from "react";

function InputPolje() {
  const [tekst, setTekst] = useState("");

  // Provera da li je polje ZAISTA prazno (ignoriše same razmake)
  const jePrazan = tekst.trim().length === 0;

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #ddd",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "white"
      }}
    >
      <h3 style={{ textAlign: "center", color: "#333" }}>React Text Analyzer</h3>

      <input
        type="text"
        value={tekst}
        onChange={(e) => setTekst(e.target.value)}
        placeholder="Kucaj nesto..."
        style={{
          padding: "12px",
          fontSize: "16px",
          width: "100%",
          boxSizing: "border-box",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "4px"
        }}
      />

      <div
        style={{
          padding: "15px",
          backgroundColor: "#f9f9f9",
          borderRadius: "5px",
          lineHeight: "1.6"
        }}
      >
        <p><strong>Trenutni tekst:</strong> {tekst}</p>
        <p><strong>Broj karaktera:</strong> {tekst.length}</p>
        <p><strong>Velika slova:</strong> {tekst.toUpperCase()}</p>
        <p><strong>Mala slova:</strong> {tekst.toLowerCase()}</p>
        <p><strong>Očišćen tekst (trim):</strong> "{tekst.trim()}"</p>
        <p>
          <strong>Da li je prazan?</strong>{" "}
          <span style={{ color: jePrazan ? "red" : "green", fontWeight: "bold" }}>
            {jePrazan ? "Da" : "Ne"}
          </span>
        </p>
      </div>

      <button
        onClick={() => setTekst("")}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          backgroundColor: "#ff9800",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
          fontSize: "16px",
          fontWeight: "bold"
        }}
      >
        Očisti polje
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ backgroundColor: "#fafafa", minHeight: "100vh", padding: "20px" }}>
      <InputPolje />
    </div>
  );
}