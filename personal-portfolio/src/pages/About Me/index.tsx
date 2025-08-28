import React from 'react';
import MassEffectPanel from '../../components/MassEffectPanel';

function AboutMe() {
  return (
    <div className="container" style={{backgroundImage: 'url(/backgroundImages/cyberpunk-hacker.gif)', backgroundSize: 'cover', backgroundBlendMode: 'lighten'}}>
      <MassEffectPanel type='About Me' color='hsla(0, 100%, 33%, 1.00)'/>
    </div>
  );
}

export default AboutMe;
