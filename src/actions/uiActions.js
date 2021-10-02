// import { createAction } from 'redux-actions';
import {
    SHOW_SPINNER,
    HIDE_SPINNER,
} from '.';

// 同步 actions 处理，回传 action 对象
export const showSpinner = () => ({ type: SHOW_SPINNER });
export const hideSpinner = () => ({ type: HIDE_SPINNER });
