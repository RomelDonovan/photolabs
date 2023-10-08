import { useState } from "react";

const useApplicationData = () => {
  const [modalVisible, setModalVisible] = useState(null);
  const [fav, setFav] = useState([]);

  const updateToFavPhotoId = (photoId) => {
    if (fav.includes(photoId)) {
      const copyFavArr = [...fav].filter(favPhotoId => favPhotoId !== photoId)
      setFav(() => copyFavArr);
      return; // Remove
    }
    setFav(prev => [...prev, photoId]); // Add
  }

  const setPhotoSelected = (photo) => {
    setModalVisible(() => photo) // View
  }

  const onClosePhotoDetailsModal  = () => {
    setModalVisible(false); // Close
  }

  return ({
    state: { modalVisible, fav },
    updateToFavPhotoId,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  })
}

export default useApplicationData;