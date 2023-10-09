import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_PHOTO: "CLOSE_PHOTO",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS"
  // DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS"
}

const initialState = {
  modalVisible: null,
  fav: [],
  photoData: [],
  topicData: []
}

// function to change that state
const reducer = (state, action) => {
  switch (action.type) {
    case "FAV_PHOTO_ADDED":
      return { ...state, fav: [...state.fav, action.payload] };
    case "FAV_PHOTO_REMOVED":
      return { ...state, fav: state.fav.filter(photoId => photoId !== action.payload) };
    case "SELECT_PHOTO":
      return { ...state, modalVisible: action.payload };
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };
    case 'SET_TOPIC_DATA':
      return { ...state, topicData: action.payload };
    case "CLOSE_PHOTO":
      return { ...state, modalVisible: null };
    case "GET_PHOTOS_BY_TOPICS":
      return { ...state, photoData: action.payload };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { modalVisible, fav, photoData, topicData } = state;

  const updateToFavPhotoId = (photoId) => {
    if (state.fav.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  }

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  }

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO });
  }

  const photosByTopic = (topic_id) => {
    fetch(`/api/topics/photos/${topic_id}`)
      .then((res) => res.json())
      .then((photos) =>
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: photos })
      );
  }

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);

  return ({
    state: { modalVisible, fav, photoData, topicData },
    updateToFavPhotoId,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    photosByTopic
  })
}

export default useApplicationData;