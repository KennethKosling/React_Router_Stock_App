import './App.css';
import Home from '../HomePage/Home';
import About from '../AboutPage/About';
import Dashboard from '../DashboardPage/Dashboard';
import Stock from '../StockPage/Stock';
import stocks from '../../data';
import { Routes, Route } from 'react-router-dom';
import Nav from '../../components/Nav';
import { useState } from 'react';

function App() {
  const [stock, setStock] = useState(null)

  const getStock = (stock => {
    setStock(stock)
  })

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Dashboard stocks={stocks} getStock={getStock}/>} />
        <Route path="/stocks/:symbol" element={<Stock stock={stock}/>} />
      </Routes>
    </div>
  );
}

export default App;
