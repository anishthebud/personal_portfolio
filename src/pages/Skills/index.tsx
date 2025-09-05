import React from 'react';
import MassEffectPanel from '../../components/MassEffectPanel';
import HackingAnimation from '../../components/HackingAnimation';

function Skills() {
  return (
    <>
      <HackingAnimation color='hsla(235, 100%, 33%, 1.00)'/>
      <div className="container" >
        <MassEffectPanel type='Skills' color='hsla(235, 100%, 33%, 1.00)'/>
      </div>
    </>
  );
}

export default Skills;