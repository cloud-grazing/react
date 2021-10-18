import { handleActions } from 'redux-actions';
import { WelcomeState } from '../../constants/models';

import {
    GET_WELCOME_INITIATE,
    GET_WELCOME_SUCCESS,
    CHAGE_USER_ID,
    GET_WELCOME_FINISH,
} from '../../constants/actionTypes';

const welcomeReducers = handleActions({
    [GET_WELCOME_INITIATE]: (state) => (
        state.merge({
            animationStatus: true,
        })
    ),
    // 當用戶按送出按鈕，發出 GET_WELCOME_SUCCESS action 時將接收到的數據 merge
    [GET_WELCOME_SUCCESS]: (state, { payload }) => (
        state.merge({
            name: payload.name,
        })
    ),
    // 用戶輸入用戶 ID 會發出 CHAGE_USER_ID action 時將接收到的數據 merge
    [CHAGE_USER_ID]: (state, { payload }) => (
        state.merge({
            userName:
            payload.userName,
        })
    ),
    [GET_WELCOME_FINISH]: (state) => (
        state.merge({
            animationStatus: false,
        })
    ),
}, WelcomeState);

export default welcomeReducers;
