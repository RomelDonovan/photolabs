import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { photo, toggleFav, setModalVisible, fav } = props
  const handleClick = () => {
    setModalVisible(photo);
  }

  return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFav={toggleFav} photoId={photo.id} fav={fav} />
      <img src={photo.urls.regular} alt="" className="photo-list__image" onClick={handleClick} />
      <div className="photo-list__user-details">
        <img src={photo.user.profile} alt="" className="photo-list__user-profile" />
        <p className="photo-list__user-info">
          {photo.user.name}
          <span className="photo-list__user-location">{photo.location.city}, {photo.location.country}</span>
        </p>
      </div>
    </div>
  )
};

export default PhotoListItem;
