import React from 'react';
import MassEffectPanel from '../../components/MassEffectPanel';

function Skills() {
  return (
    <div className="container" style={{backgroundImage: 'url(/backgroundImages/cyberpunk-hacker.gif)', backgroundSize: 'cover', backgroundBlendMode: 'lighten'}}>
      <MassEffectPanel type='skills' color='hsla(235, 100%, 33%, 1.00)'/>
    </div>
  );
}

export default Skills;