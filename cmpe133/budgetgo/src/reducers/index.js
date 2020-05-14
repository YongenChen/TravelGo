import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import FavoritesFormReducer from './FavoritesFormReducer';
import FavoriteReducer from './FavoriteReducer';
import FeedbackReducer from './FeedbackReducer';

export default combineReducers({
  auth: AuthReducer,
  favoritesForm: FavoritesFormReducer,
  favorites: FavoriteReducer,
  feedbackForm: FeedbackReducer,
});
