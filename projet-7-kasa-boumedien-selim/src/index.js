import React from 'react';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Logement from './pages/FicheLogement'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element = {<App />}/>   
        <Route path='/Home' element = {<Home />}/>
        <Route path='/About' element = {<About />}/>
        <Route path='/Logement/:id' element = {<Logement />}/>
        <Route path='/*' element = {<ErrorPage />}/>    
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

