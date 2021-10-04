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
    // 当用户按送出按钮，发出 GET_WELCOME_SUCCESS action 时将接收到的数据 merge
    [GET_WELCOME_SUCCESS]: (state, { payload }) => (
        state.merge({
            name: payload.name,
        })
    ),
    // 当用户输入用户 ID 会发出 CHAGE_USER_ID action 时将接收到的数据 merge
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
