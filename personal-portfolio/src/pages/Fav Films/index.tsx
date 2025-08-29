import React, { useEffect, useState } from 'react';
import MoviePanel from '../../components/MoviePanel';
import MovieModal from '../../components/MovieModal';
import './index.css';
import { getData, MovieItem } from '../../utils/api';

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
      setItems(response.data.sort((a, b) => b.ranking - a.ranking));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      setCurrentMovie(items[currentIndex]);
      setMovieBefore(items[(currentIndex - 1 + items.length) % items.length]);
      setMovieAfter(items[(currentIndex + 1) % items.length]);
    }
  }, [items, currentIndex]);

  console.log('Items:', items);
  console.log('Current Movie:', currentMovie);
  console.log('Current Index:', currentIndex);

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
    <div className="filmContainer">
      <h1>Top 10 Favorite Films</h1>
      <div className="filmDisplayContainer">
        {movieBefore && <MoviePanel movieItem={movieBefore} curr={false}/>}
        <button className="directionButton" id="goLeft" onClick={handleLeftClick}>&lt;</button>
        {currentMovie && (
          <MoviePanel 
            movieItem={currentMovie} 
            curr={true} 
            onClick={handleMovieClick}
          />
        )}
        <button className="directionButton" id="goRight" onClick={handleRightClick}>&gt;</button>
        {movieAfter && <MoviePanel movieItem={movieAfter} curr={false}/>}
      </div>
      
      <MovieModal
        movie={currentMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default FavFilms;