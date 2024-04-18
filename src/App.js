import './App.css';
import Signup from './components/authentication/Signup';
import Login from './components/authentication/Login';
import CandidateDashboard from './components/dashboard/CandidateDash';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/dashboard" element={<CandidateDashboard/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
