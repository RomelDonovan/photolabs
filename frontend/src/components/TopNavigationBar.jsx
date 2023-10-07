import React from 'react';
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const {topics, fav} = props

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      {fav ? <FavBadge fav={fav} isFavPhotoExist /> : <FavBadge />}
    </div>
  )
}

export default TopNavigation;