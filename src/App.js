import './App.css';
import Home from '../src/components/Home.jsx';
import {Routes,Route} from 'react-router-dom'
import AdminRegister from './components/AdminRegister.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AdminRegister />} />
      </Routes>
    </div>
  );
}

export default App;
