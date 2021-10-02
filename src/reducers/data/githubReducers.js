/* eslint-disable no-unused-vars */
import { handleActions } from 'redux-actions';
import { GithubState } from '../../constants/models';

import {
    GET_GITHUB_INITIATE,
    GET_GITHUB_SUCCESS,
    GET_GITHUB_FAIL,
    CHAGE_USER_ID,
} from '../../constants/actionTypes';

const githubReducers = handleActions({
    // 当用户按送出按钮，发出 GET_GITHUB_SUCCESS action 时将接收到的数据 merge
    GET_GITHUB_SUCCESS: (state, { payload }) => (
        state.merge({
            data: payload.data,
        })
    ),
    // 当用户输入用户 ID 会发出 CHAGE_USER_ID action 时将接收到的数据 merge
    CHAGE_USER_ID: (state, { payload }) => (
        state.merge({
            userId:
            payload.userId,
        })
    ),
}, GithubState);

export default githubReducers;
