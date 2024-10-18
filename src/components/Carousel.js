import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import MovieCard from './MovieCard';

const Carousel = () => {
  const { filteredMovies } = useContext(AppContext);

  return (
    <div style={{ display: 'flex', overflowX: 'scroll', padding: '20px' }}>
      {filteredMovies.map(movie => (
        <MovieCard key={movie.id} title={movie.title} imageUrl={movie.imageUrl} />
      ))}
    </div>
  );
};

export default Carousel;