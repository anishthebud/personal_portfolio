import React from 'react';
import './index.css';
import MassEffectPanel from '../../components/MassEffectPanel';
import HackingAnimation from '../../components/HackingAnimation';

function Experience() {
  return (
    <>
      <HackingAnimation color='hsla(89, 100%, 33%, 1.00)'/>
      <div className="container">
        <MassEffectPanel type='Experience' color='hsla(89, 100%, 33%, 1.00)'/>
      </div>
    </>
  );
}

export default Experience;
