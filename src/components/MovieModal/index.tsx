import React from 'react';
import { MovieItem } from '../../utils/api';
import './index.css';

interface MovieModalProps {
  movie: MovieItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, isOpen, onClose }) => {
  if (!isOpen || !movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="modal-header">
          <img src={movie.image_url} alt={movie.name} className="modal-image" />
          <div className="modal-title">
            <h1>{movie.name}</h1>
            <h2>Released in {movie.year}</h2>
            <h3>Directed by {movie.director}</h3>
          </div>
        </div>
        
        <div className="modal-body">
          <p className="modal-description">{movie.description}</p>
        </div>
        
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
