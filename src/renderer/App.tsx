import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Hello() {
  return (
    <div className="home">
      <div className="container">
        <div className="box pulse" />
        <div className="box spin" />
        <div className="box wobble" />
      </div>

      <div className="container">
        <div className="box pulse">Some Text</div>
        <div className="box bounce-out-down">Some Text</div>
        <div className="box wobble">Some Text</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
