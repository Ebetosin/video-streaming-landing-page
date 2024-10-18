import React from 'react';

const MovieCard = ({ title, imageUrl }) => {
  return (
    <div style={{ margin: '10px' }}>
      <img src={imageUrl} alt={title} style={{ width: '120px', height: '150px' }} />
      <h4>{title}</h4>
    </div>
  );
};

export default MovieCard