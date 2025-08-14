import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css"
export default function App() {
  const [text, setText] = useState("");
  const [qrText, setQrText] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [visible, setVisible] = useState(true);

  const generateQR = () => {
    if (text.trim() !== "") {
      setQrText(text);
      setShowQR(true);
    }
  };

  const closeApp = () => {
    setVisible(false); // hide whole app
  };

  if (!visible) return null;

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <span style={styles.closeBtn} onClick={closeApp} title="Close App">✖</span>
        <h1 style={styles.heading}>QR Code Generator</h1>

        <input
          style={styles.input}
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setShowQR(false)}
        />

        <button style={styles.button} onClick={generateQR}>Generate</button>

        {showQR && (
          <div style={{ marginTop: "20px" }}>
            <QRCode value={qrText} size={200} />
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  body: {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",


  },
  container: {
    position: "relative",
    background: "rgba(255, 255, 255, 0.15)",
    padding: "30px",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    width: "320px",
    textAlign: "center",
    animation: "fadeIn 0.5s ease",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "#ff4d4d",
    color: "white",
    fontSize: "14px",
    fontWeight: "bold",
    width: "25px",
    height: "25px",
    lineHeight: "25px",
    textAlign: "center",
    borderRadius: "50%",
    cursor: "pointer",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
    transition: "0.3s",
  },
  heading: {
    color: "white",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "15px 0",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "14px",
  },
  button: {
    padding: "10px 20px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },
};
