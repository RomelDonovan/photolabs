import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { updateToFavPhotoId, photoId, fav } = props
  const selected = fav.includes(photoId)

  return (
    <div className="photo-list__fav-icon"
      onClick={() => updateToFavPhotoId(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;