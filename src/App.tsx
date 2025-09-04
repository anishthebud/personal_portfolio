import React, { useEffect } from 'react';
import './App.css';
import HomeCard from './components/HomeCard/HomeCard';
import HackingAnimation from './components/HackingAnimation';

function App() {
  return (
    <>
      <HackingAnimation color="rgba(255, 255, 255, 0.5)" />
      <div id="outerContainer">
        <div className="rows">
          <HomeCard
            name="About Me"
            width="400px"
            height="400px"
            image="./homeCardPics/aboutMe.png"
            description="Get to know my background and interests."
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
            description="Get to know what technical and soft skills I possess."
            page_url="/skills"
          />
        </div>
        <div className="rows">
          <HomeCard
            name="Favorite Films"
            width="637px"
            height="200px"
            image="./homeCardPics/favFilms-unsplash.jpg"
            description="Get to know me through my four favorite films."
            page_url="/favFilms"
          />
          <HomeCard
            name="Resume and Links"
            width="637px"
            height="200px"
            image="./homeCardPics/resumeCV-unsplash.jpg"
            description="View my latest resume and links to professional profiles."
            page_url="/resumeCV"
          />
        </div>
      </div>
    </>
  );
}

export default App;
