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
          page_url="/aboutMe"
        />
        <HomeCard
          name="Favorite Films"
          width="320px"
          height="320px"
          image="./homeCardPics/favFilms-unsplash.jpg"
          description="Get to know my background, interests, and what drives me."
          page_url="/favFilms"
        />
      </div>
      <div>
        <HomeCard
          name="Experience"
          width="720px"
          height="440px"
          image="./homeCardPics/experience-unsplash.jpg"
          description="Learn about my experience through projects and college."
          page_url="/experience"
        />
        <HomeCard
          name="Resume and Cover Letter"
          width="720px"
          height="200px"
          image="./homeCardPics/resumeCV-unsplash.jpg"
          description="View my latest resume and tailored cover letters."
          page_url="/resumeCV"
        />
      </div>
      <div>
        <HomeCard
          name="Skills"
          width="320px"
          height="320px"
          image="./homeCardPics/skills-unsplash.jpg"
          description="Get to know my background, interests, and what drives me."
          page_url="/skills"
        />
        <HomeCard
          name="Current Tech"
          width="320px"
          height="320px"
          image="./homeCardPics/currentTech-unsplash.jpg"
          description="Get to know my background, interests, and what drives me."
          page_url="/currentTech"
        />
      </div>
    </div>
  );
}

export default App;
