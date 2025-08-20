import React from 'react';
import './HomeCard.css';

type HomeCardProps = {
  name: string;
  width: number | string;
  height: number | string;
  image: string;
  description: string;
};

const HomeCard: React.FC<HomeCardProps> = ({ name, width, height, image, description }) => {
  const widthValue = typeof width === 'number' ? `${width}px` : width;
  const heightValue = typeof height === 'number' ? `${height}px` : height;

  return (
    <div className="home-card" style={{ width: widthValue, height: heightValue }}>
      <img className="home-card__image" src={image} alt={name} />
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

