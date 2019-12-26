import {combineReducers} from 'redux';
import stories from './stories';
import app from './app';

export default combineReducers({
  stories,
  app,
});