import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import Photosnap from './components/photosnap/Photosnap';
import Features from './components/features/Features'
import Stories from './components/stories/Stories'
import Pricing from './components/pricing/Pricing'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

     <BrowserRouter>

     <Routes>
      <Route exact path='/' element={<Photosnap/>}></Route>
      <Route exact path='/stories' element={<Stories/>}></Route>
      <Route exact path='/features' element={<Features/>}></Route>
      <Route exact path='/pricing' element={<Pricing/>}></Route>

     </Routes>

     </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
