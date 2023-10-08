import { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case FAV_PHOTO_ADDED:
      return dispatch({ type: 'FAV_PHOTO_ADDED', payload: { id } });
    case FAV_PHOTO_REMOVED:
      return dispatch({ type: 'FAV_PHOTO_REMOVED', payload: { id } });
    case SET_PHOTO_DATA:
      return dispatch({ type: 'SET_PHOTO_DATA', payload: { id } });
    case SET_TOPIC_DATA:
      return dispatch({ type: 'SET_TOPIC_DATA', payload: { id } });
    case SELECT_PHOTO:
      return dispatch({ type: 'SELECT_PHOTO', payload: { id } });
    case DISPLAY_PHOTO_DETAILS:
      return dispatch({ type: 'DISPLAY_PHOTO_DETAILS', payload: { id } });
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [modalVisible, setModalVisible] = useReducer(false, action);
  const [fav, setFav] = useReducer([], action);

  const toggleFav = (photoId) => {
    if (fav.includes(photoId)) {
      const copyFavArr = [...fav].filter(favPhotoId => favPhotoId !== photoId)
      setFav(copyFavArr);
      return;
    }
    setFav(prev => [...prev, photoId]);
  }

  return ({ state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal })
}

export default useApplicationData;