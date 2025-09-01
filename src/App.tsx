import React from 'react';
import './App.css';
import HomeCard from './components/HomeCard/HomeCard';
import HackingAnimation from './components/HackingAnimation';

function App() {
  return (
    <>
      <HackingAnimation color="rgba(255, 255, 255, 0.5)" />
      <div id="outerContainer" style={{ minHeight: '100vh', backgroundImage: 'url(/personalPortfolioBackground.png)', backgroundSize: 'cover' }}>
        <div className="rows">
          <HomeCard
            name="About Me"
            width="400px"
            height="400px"
            image="./homeCardPics/aboutMe.png"
            description="Get to know my background, interests, and what drives me."
            page_url="/aboutMe"
          />
          <HomeCard
            name="Experience"
            width="450px"
            height="400px"
            image="./homeCardPics/experience-unsplash.jpg"
            description="Learn about my experience through projects and college."
            page_url="/experience"
          />
          <HomeCard
            name="Skills"
            width="400px"
            height="400px"
            image="./homeCardPics/skills-unsplash.jpg"
            description="Get to know my background, interests, and what drives me."
            page_url="/skills"
          />
        </div>
        <div className="rows">
          <HomeCard
            name="Favorite Films"
            width="637px"
            height="200px"
            image="./homeCardPics/favFilms-unsplash.jpg"
            description="Get to know my background, interests, and what drives me."
            page_url="/favFilms"
          />
          <HomeCard
            name="Resume and Cover Letter"
            width="637px"
            height="200px"
            image="./homeCardPics/resumeCV-unsplash.jpg"
            description="View my latest resume and tailored cover letters."
            page_url="/resumeCV"
          />
        </div>
      </div>
    </>
  );
}

export default App;
