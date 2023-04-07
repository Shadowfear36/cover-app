import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
          path="/"
          exact
          element={<Login />}
        />
        <Route 
          path="/signup"
          exact
          element={<SignUp />}
        />
      </Routes>
    </div>
  );
}

export default App;
