import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photoData, updateToFavPhotoId, setPhotoSelected, fav } = props

  return (
    <ul className="photo-list">
      {photoData.map(photo => <PhotoListItem key={photo.id} photo={photo} updateToFavPhotoId={updateToFavPhotoId} setPhotoSelected={setPhotoSelected} fav={fav} />)}
    </ul>
  );
};

export default PhotoList;
