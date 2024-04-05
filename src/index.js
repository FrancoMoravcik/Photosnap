import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Photosnap from './components/photosnap/Photosnap';
import Features from './components/features/Features';
import Stories from './components/stories/Stories';
import Pricing from './components/pricing/Pricing';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Photosnap />} />
        <Route exact path='/stories' element={<Stories />} />
        <Route exact path='/features' element={<Features />} />
        <Route exact path='/pricing' element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();