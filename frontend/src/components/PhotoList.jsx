import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const [...data] = props.photos.map(photo => photo);
  return (
    <ul className="photo-list">
      {[...data].map(data => <PhotoListItem key={data.id} {...data} setFav={props.setFav} />)}
    </ul>
  );
};

export default PhotoList;
