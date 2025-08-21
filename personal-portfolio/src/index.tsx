import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landing from './pages/landing';
import AboutMe from './pages/About Me';
import CurrentTech from './pages/Current Tech';
import Experience from './pages/Experience';
import FavFilms from './pages/Fav Films';
import ResumeCV from './pages/Resume CV';
import Skills from './pages/Skills';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/main" element={<App />}/>
        <Route path="/aboutMe" element={<AboutMe />}/>
        <Route path="/currentTech" element={<CurrentTech />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/favFilms" element={<FavFilms />}/>
        <Route path="/resumeCV" element={<ResumeCV />}/>
        <Route path="/skills" element={<Skills />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
