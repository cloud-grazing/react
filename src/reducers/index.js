import { combineReducers } from 'redux-immutable';
import ui from './ui/uiReducers';// import routes from './routes';
import welcomeReducers from './data/welcomeReducers';// import routes from './routes';

const rootReducer = combineReducers({
    ui,
    welcomeReducers,
});

export default rootReducer;
