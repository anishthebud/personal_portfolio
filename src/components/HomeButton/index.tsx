import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

type HomeButtonProps = {
  color: string;
};

const HomeButton: React.FC<HomeButtonProps> = ({ color }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/main');
  };

  useEffect(() => {
    document.getElementById('home-button')?.style.setProperty('--mass-effect-color', color);
  }, [color]);

  return (
    <button 
      id="home-button" 
      onClick={handleHomeClick}
      title="Go to Home"
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M9 22V12H15V22" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span>Home</span>
    </button>
  );
};

export default HomeButton;
