import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, updateToFavPhotoId, setPhotoSelected, fav }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        updateToFavPhotoId={updateToFavPhotoId}
        photoId={photo.id} fav={fav}
      />

      <img src={photo.urls.regular} alt="" className="photo-list__image" onClick={() => setPhotoSelected(photo)} />
      <div className="photo-list__user-details">
        <img src={photo.user.profile} alt="" className="photo-list__user-profile" />
        <p className="photo-list__user-info">
          {photo.user.name}
          <span className="photo-list__user-location">{photo.location.city}, {photo.location.country}</span>
        </p>
      </div>
    </div>
  );
};

export default PhotoListItem;
