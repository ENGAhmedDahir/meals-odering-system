import {Route , Routes} from 'react-router-dom';
import './index.css';

import Header from "./components/Header";
import About from './pages/About';
import Home from './pages/Home';



import Ordermodal from './components/modal/Ordermodal';
import OrdersPage from './pages/OrdesPage';
import FoodPaage from './pages/FoodPage';
import DrinkPage from './pages/DrinkPage';


function App() {


  return (
    <div className='container'>
       <Header/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/food' element={<FoodPaage />}/>
      <Route path='/drink' element={<DrinkPage />}/>
      <Route path='/orders' element={<OrdersPage />}/>
    </Routes>
    <Ordermodal />
   
    </div>
  )
}

export default App
