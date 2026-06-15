import { useState } from "react";
import "./App.css";

function App() {
  const [attendance, setAttendance] = useState([]);

  const checkIn = () => {
    const today = new Date().toLocaleString();

    setAttendance([
      ...attendance,
      {
        name: "Abdur Rehman",
        date: today,
        status: "Present",
      },
    ]);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>⛓️ Blockchain Attendance System</h1>

        <p>
          Secure Attendance Tracking using Web3 Concepts
        </p>

        <button onClick={checkIn}>
          Connect MetaMask & Check In
        </button>

        <h2 style={{ marginTop: "30px" }}>
          Immutable Attendance Logs
        </h2>

        <table style={{ width: "100%", marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date & Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {attendance.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;