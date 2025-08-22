import React from 'react';
import './App.css';
import HomeCard from './components/HomeCard/HomeCard';

function App() {
  return (
    <div id="outerContainer" style={{ minHeight: '100vh', backgroundImage: 'url(/personalPortfolioBackground.png)', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <HomeCard
          name="About Me"
          width="320px"
          height="320px"
          image="./homeCardPics/aboutMe.png"
          description="Get to know my background, interests, and what drives me."
        />
        <HomeCard
          name="Favorite Films"
          width="320px"
          height="320px"
          image="./homeCardPics/favFilms-unsplash.jpg"
          description="Get to know my background, interests, and what drives me."
        />
      </div>
      <div>
        <HomeCard
          name="Experience"
          width="720px"
          height="440px"
          image="./homeCardPics/experience-unsplash.jpg"
          description="Learn about my experience through projects and college."
        />
        <HomeCard
          name="Resume and Cover Letter"
          width="720px"
          height="200px"
          image="./homeCardPics/resumeCV-unsplash.jpg"
          description="View my latest resume and tailored cover letters."
        />
      </div>
      <div>
        <HomeCard
          name="Skills"
          width="320px"
          height="320px"
          image="./homeCardPics/skills-unsplash.jpg"
          description="Get to know my background, interests, and what drives me."
        />
        <HomeCard
          name="Current Tech"
          width="320px"
          height="320px"
          image="./homeCardPics/currentTech-unsplash.jpg"
          description="Get to know my background, interests, and what drives me."
        />
      </div>
    </div>
  );
}

export default App;
