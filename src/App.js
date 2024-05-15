import './App.css';
import Home from './components/Home/Home';
import Details from './components/Details/Details'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/job/:id" element={<Details/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
