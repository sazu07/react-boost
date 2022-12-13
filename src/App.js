
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Restaurant from './components/Restaurant/Restaurant';
import Meals from './components/Meals/Meals';
import { useState } from 'react';

function App() {
  const [food, setFood] = useState('')
  return (
    <div >
      <Header setFood={setFood}></Header>
      <Routes>
        <Route path='/' element={<Restaurant food={food}/>}></Route>
        <Route path='/meals' element={<Meals></Meals>}></Route>
      </Routes>
    </div>
  );
}

export default App;
