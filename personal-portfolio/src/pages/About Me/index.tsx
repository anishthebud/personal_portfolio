import React from 'react';
import MassEffectPanel from '../../components/MassEffectPanel';
import HackingAnimation from '../../components/HackingAnimation';

function AboutMe() {
  return (
    <>
      <HackingAnimation color='hsla(0, 100%, 33%, 1.00)'/>
      <div className="container">
        <MassEffectPanel type='About Me' color='hsla(0, 100%, 33%, 1.00)'/>
      </div>
    </>
  );
}

export default AboutMe;
