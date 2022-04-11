import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import Inventory from './component/Inventory/Inventory';
import Orders from './component/Orders/Orders';
import Shop from './component/Shop/Shop';
import About from './component/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventoris' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
