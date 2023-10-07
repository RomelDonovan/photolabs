import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {location, urls, user, setFav} = props
  const handleClick = () => {
    props.setModalVisible(true);
  }

  return (
    <div className="photo-list__item">
      <PhotoFavButton setFav={setFav} />
      <img src={urls.regular} alt="" className="photo-list__image" onClick={handleClick} />
      <div className="photo-list__user-details">
      <img src={user.profile} alt="" className="photo-list__user-profile" />
      <p className="photo-list__user-info">
      {user.name}
      <span className="photo-list__user-location">{location.city}, {location.country}</span>
      </p>
      </div>
    </div>
  )
};

export default PhotoListItem;
