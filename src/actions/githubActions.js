// 这边引入了 fetch 的 polyfill，考以让旧的浏览器也可以使用 fetch
import 'whatwg-fetch';
// 引入 actionTypes 常数
import {
    GET_GITHUB_INITIATE,
    GET_GITHUB_SUCCESS,
    GET_GITHUB_FAIL,
    CHAGE_USER_ID,
} from '../constants/actionTypes';

// 引入 uiActions 的 action
import {
    showSpinner,
    hideSpinner,
} from './uiActions';

/*
 * 这边是这个范例的重点，要学习我们之前尚未讲解的异步 action 处理方式：不同于一般同步 action 直接发送 action
 * 异步 action 会回传一个带有 dispatch 参数的 function，里面使用了 Ajax（这里使用 fetch()）进行处理
 * 一般和 API 交互的流程：INIT（开始请求/秀出 spinner）-> COMPLETE（完成请求/隐藏 spinner）-> ERROR（请求失败）
 * 这次我们虽然没有使用 redux-actions 但我们还是维持标准 Flux Standard Action 格式：{ type: '', payload: {} }
*/
export const getGithub = (userId = 'torvalds') => (dispatch) => {
    dispatch({ type: GET_GITHUB_INITIATE });
    dispatch(showSpinner());
    fetch(`https://api.github.com/users/${userId}/repos`)
        .then((response) => response.json())
        .then((json) => {
            dispatch({ type: GET_GITHUB_SUCCESS, payload: { data: json } });
            dispatch(hideSpinner());
        })
        .catch((response) => {
            // eslint-disable-next-line no-console
            console.log(response);
            dispatch({ type: GET_GITHUB_FAIL });
        });
};

// 同步 actions 处理，回传 action 对象
export const changeUserId = (text) => ({ type: CHAGE_USER_ID, payload: { userId: text } });
