
import './App.css';
import ShowCard from './components/ShowCard';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleShow from './pages/SingleShow';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/:id' element={<SingleShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
