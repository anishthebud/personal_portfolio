import React, { useState, useRef } from 'react';
import './HomeCard.css';
import { Navigate, useNavigate } from 'react-router-dom';
import OptimizedImage from '../OptimizedImage';

type HomeCardProps = {
  name: string;
  width: number | string;
  height: number | string;
  image: string;
  description: string;
  page_url: string;
};

const HomeCard: React.FC<HomeCardProps> = ({ name, width, height, image, description, page_url }) => {
  const widthValue = typeof width === 'number' ? `${width}px` : width;
  const heightValue = typeof height === 'number' ? `${height}px` : height;
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const goToPage = () => {
    navigate(page_url);
  }

  // Optimize hover handling with requestAnimationFrame
  const handleMouseEnter = () => {
    if (cardRef.current) {
      requestAnimationFrame(() => {
        setIsHovered(true);
      });
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      requestAnimationFrame(() => {
        setIsHovered(false);
      });
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`home-card ${isHovered ? 'home-card--hovered' : ''}`} 
      style={{ width: widthValue, height: heightValue }} 
      onClick={goToPage}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <OptimizedImage 
        src={image}
        alt={name}
        className="home-card__image"
        loading="lazy"
        placeholder="Loading..."
      />
      <div className="home-card__content">
        <div className="home-card__name">{name}</div>
      </div>
      <div className="home-card__description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;

