import {FEEDBACK_UPDATE, FEEDBACK_SEND} from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const feedbackUpdate = ({prop, value}) => {
  return {
    type: FEEDBACK_UPDATE,
    payload: {prop, value},
  };
};

export const feedbackSend = ({name, subject, comment, rating}) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/feedback`)
      .push({name, subject, comment, rating})
      .then(() => {
        dispatch({type: FEEDBACK_SEND});
        Actions.pop();
      });
  };
};
