import firebase from 'firebase';
import {
  FAVORITES_UPDATE,
  FAVORITES_CREATE,
  FAVORITES_FETCH_SUCCESS,
  FAVORITES_SAVE_SUCCESS,
} from './types';
import {Actions} from 'react-native-router-flux';

export const favoritesUpdate = ({prop, value}) => {
  return {
    type: FAVORITES_UPDATE,
    payload: {prop, value},
  };
};

export const favoritesCreate = ({place, distance}) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/favorites`)
      .push({place, distance})
      .then(() => {
        dispatch({type: FAVORITES_CREATE});
        Actions.pop();
      });
  };
};

export const favoritesFetch = () => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/favorites`)
      .on('value', (snapshot) => {
        dispatch({type: FAVORITES_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};

export const favoriteSave = ({place, distance, uid}) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/favorites/${uid}`)
      .set({place, distance})
      .then(() => {
        dispatch({type: FAVORITES_SAVE_SUCCESS});
        Actions.favoritesPage({type: 'reset'});
      });
  };
};

export const favoritesDelete = ({uid}) => {
  const {currentUser} = firebase.auth();

  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/favorites/${uid}`)
      .remove()
      .then(() => {
        Actions.favoritesPage({type: 'reset'});
      });
  };
};
