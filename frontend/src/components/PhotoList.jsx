import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {photos, setFav, setModalVisible} = props
  
  return (
    <ul className="photo-list">
      {photos.map(photo => <PhotoListItem key={photo.id} {...photo} setFav={setFav} setModalVisible={setModalVisible} />)}
    </ul>
  );
};

export default PhotoList;
