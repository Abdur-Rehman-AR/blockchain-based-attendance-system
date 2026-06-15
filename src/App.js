import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [achievement, setAchievement] = useState("");
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState("");

  const issueCertificate = () => {
    alert(`NFT Certificate Issued Successfully!`);
  };

  const verifyCertificate = () => {
    if (certificateId === "1") {
      setResult("✅ Valid NFT Certificate");
    } else {
      setResult("❌ Certificate Not Found");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🏆 Decentralized Internship Certificate System</h1>
        <p>Blockchain-powered NFT Certificate Verification</p>

        <div className="section">
          <h2>Issue NFT Certificate</h2>

          <input
            type="text"
            placeholder="Intern Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Achievement"
            onChange={(e) => setAchievement(e.target.value)}
          />

          <button onClick={issueCertificate}>
            Issue Certificate
          </button>
        </div>

        <div className="section">
          <h2>Verify Certificate</h2>

          <input
            type="text"
            placeholder="Certificate ID"
            onChange={(e) => setCertificateId(e.target.value)}
          />

          <button onClick={verifyCertificate}>
            Verify
          </button>

          {result && <div className="result">{result}</div>}
        </div>
      </div>
    </div>
  );
}

export default App;