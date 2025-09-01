import React from 'react';
import './HomeCard.css';
import { Navigate, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const goToPage = () => {
    navigate(page_url);
  }

  return (
    <div className="home-card" style={{ width: widthValue, height: heightValue }} onClick={goToPage}>
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

