import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {toggleFav, photoId, fav} = props
  const handleClick = () => {
    toggleFav(photoId)
  }

  const selected = fav.includes(photoId) 

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;