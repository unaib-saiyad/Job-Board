import './App.css';
import Signup from './components/authentication/Signup';
import Login from './components/authentication/Login';
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
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/" element={<Login/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
