import { useReducer, useEffect } from "react";

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_PHOTO: "CLOSE_PHOTO",
}

const initialState = {
  modalVisible: null,
  fav: [],
  photoData: [],
  topicData: []
}

// Reducer to update the state based on actions
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, fav: [...state.fav, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, fav: state.fav.filter(photoId => photoId !== action.payload) };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, modalVisible: action.payload };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.CLOSE_PHOTO:
      return { ...state, modalVisible: null };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { modalVisible, fav, photoData, topicData } = state;

  // Function to update favorite photo
  const updateToFavPhotoId = (photoId) => {
    if (state.fav.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  }

  // Function to set selected photo
  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  }

  // Function to close photo details modal
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO });
  }

  // Function to handle topic selection
  const onTopicSelect = (topic_id) => {
    fetch(`/api/topics/photos/${topic_id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => console.error("Error fetching photo data:", error));
  };

  // Fetch initial photo data on component mount
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  // Fetch initial topic data on component mount
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((error) => console.error("Error fetching topics:", error));
  }, []);

  return ({
    state: { modalVisible, fav, photoData, topicData },
    updateToFavPhotoId,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onTopicSelect
  })
}

export default useApplicationData;