import React from 'react';
import './index.css';
import MassEffectPanel from '../../components/MassEffectPanel';

function Experience() {
  return (
    <div className="container" style={{backgroundImage: 'url(/backgroundImages/cyberpunk-hacker.gif)', backgroundSize: 'cover', backgroundBlendMode: 'lighten'}}>
      <MassEffectPanel type='experience' color='hsla(89, 100%, 33%, 1.00)'/>
    </div>
  );
}

export default Experience;
