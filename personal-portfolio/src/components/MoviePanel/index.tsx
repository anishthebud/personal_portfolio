import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { PortfolioItem, getData, MovieItem } from '../../utils/api';

export interface MovieProps {
    movieItem: MovieItem;
    curr: boolean;
    onClick?: () => void;
}

const MoviePanel: React.FC<MovieProps> = ({movieItem, curr, onClick}) => {
    return (
        <div 
            className={`movieContainer ${curr ? 'current' : 'side'}`}
            onClick={curr ? onClick : undefined}
            style={{ cursor: curr ? 'pointer' : 'default' }}
        >
            <img src={movieItem?.image_url} alt={movieItem?.name} />
            {curr && (
                <>
                    <h1>{movieItem?.name}</h1>
                    <h2>Released in {movieItem?.year}</h2>
                    <h2>Directed by {movieItem?.director}</h2>
                </>
            )}
        </div>
    );
}

export default MoviePanel;

