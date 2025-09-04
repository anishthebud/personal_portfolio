import React, { useEffect, useState } from 'react';
import MoviePanel from '../../components/MoviePanel';
import MovieModal from '../../components/MovieModal';
import './index.css';
import { getData, MovieItem } from '../../utils/api';
import HomeButton from '../../components/HomeButton';
import HackingAnimation from '../../components/HackingAnimation';

// Make a rotating display of my top 10 favorite movies, with a clickable display showing a poster of the movie with a description of that movie


function FavFilms() {
  const [items, setItems] = useState<MovieItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMovie, setCurrentMovie] = useState<MovieItem | null>(null);
  const [movieBefore, setMovieBefore] = useState<MovieItem | null>(null);
  const [movieAfter, setMovieAfter] = useState<MovieItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    const response = await getData<MovieItem>("favFilms");
    if (response.status === 'SUCCESS' && response.data) {
      setItems(response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      setMovieBefore(items[(currentIndex - 1 + items.length) % items.length]);
      setCurrentMovie(items[currentIndex]);
      setMovieAfter(items[(currentIndex + 1) % items.length]);
    }
  }, [items, currentIndex]);

  const handleMovieClick = () => {
    if (currentMovie) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);  
  }

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }

  return (
    <>
      <HackingAnimation color="#8a2be2" />
      <HomeButton color="#8a2be2" />
      <div className="filmContainer">
      <h1>My Four Favorite Films</h1>
      <div className="filmDisplayContainer">
        {movieBefore && 
          <>
            <MoviePanel movieItem={movieBefore} curr={false}/>
            <button className="directionButton" id="goLeft" onClick={handleLeftClick}>&lt;</button>
          </>
        }
        {currentMovie && (
          <MoviePanel 
            movieItem={currentMovie} 
            curr={true} 
            onClick={handleMovieClick}
          />
        )}
        {movieAfter &&
          <>
            <button className="directionButton" id="goRight" onClick={handleRightClick}>&gt;</button>
            {movieAfter && <MoviePanel movieItem={movieAfter} curr={false}/>}
          </>
        }
      </div>
      
      <MovieModal
        movie={currentMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      </div>
    </>
  );
}

export default FavFilms;