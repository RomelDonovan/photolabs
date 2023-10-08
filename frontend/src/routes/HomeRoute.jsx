import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {photos, topics, setPhotoSelected, fav, updateToFavPhotoId} = props
  

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} fav={fav}/>
      <PhotoList photos={photos} updateToFavPhotoId={updateToFavPhotoId} setPhotoSelected={setPhotoSelected} fav={fav} />
    </div>
  );
};

export default HomeRoute;
