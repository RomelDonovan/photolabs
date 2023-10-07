import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, toggleFav, setModalVisible, fav } = props

  return (
    <ul className="photo-list">
      {photos.map(photo => <PhotoListItem key={photo.id} photo={photo} toggleFav={toggleFav} setModalVisible={setModalVisible} fav={fav}/>)}
    </ul>
  );
};

export default PhotoList;
