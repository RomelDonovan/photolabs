import { useState } from "react";

const useApplicationData = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [fav, setFav] = useState([]);

  const toggleFav = (photoId) => {
    if (fav.includes(photoId)) {
      const copyFavArr = [...fav].filter(favPhotoId => favPhotoId !== photoId)
      setFav(copyFavArr);
      return;
    }
    setFav(prev => [...prev, photoId]);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  return ({
    state: { modalVisible, fav },
    setModalVisible, 
    toggleFav,
    closeModal
  })
}

export default useApplicationData;