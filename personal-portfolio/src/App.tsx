import React from 'react';
import './App.css';
import HomeCard from './components/HomeCard';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <HomeCard
          name="About Me"
          width="320px"
          height="320px"
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
          description="Get to know my background, interests, and what drives me."
        />
        <HomeCard
          name="Favorite Films"
          width="320px"
          height="320px"
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
          description="Get to know my background, interests, and what drives me."
        />
      </div>
      <div>
        <HomeCard
          name="Experience"
          width="720px"
          height="440px"
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
          description="Learn about my experience through projects and college."
        />
        <HomeCard
          name="Resume and Cover Letter"
          width="720px"
          height="200px"
          image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2400&auto=format&fit=crop"
          description="View my latest resume and tailored cover letters."
        />
      </div>
      <div>
        <HomeCard
          name="Skills"
          width="320px"
          height="320px"
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
          description="Get to know my background, interests, and what drives me."
        />
        <HomeCard
          name="Current Tech"
          width="320px"
          height="320px"
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
          description="Get to know my background, interests, and what drives me."
        />
      </div>
    </div>
  );
}

export default App;
