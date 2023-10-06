import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
    props.setFav(!selected)
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;