// 这边引入了 fetch 的 polyfill，考以让旧的浏览器也可以使用 fetch
import 'whatwg-fetch';
// 引入 actionTypes 常数
import {
    GET_WELCOME_INITIATE,
    GET_WELCOME_SUCCESS,
    CHAGE_USER_ID,
    GET_WELCOME_FINISH,
} from '../constants/actionTypes';

/* === */
export const setWelcome = (userName) => (dispatch) => {
    dispatch({ type: GET_WELCOME_INITIATE });
    if (userName) {
        const text = `歡迎蒞臨： ${userName}，很高興與您相遇!`;
        const newTextAry = Array.from(text);
        let showText = '';
        newTextAry.forEach((textSplit, index) => {
            setTimeout(() => {
                showText += textSplit;
                dispatch({ type: GET_WELCOME_SUCCESS, payload: { name: showText } });
                if (index === newTextAry.length - 1) {
                    dispatch({ type: GET_WELCOME_FINISH });
                }
            }, 150 * (index + 1));
        });
    }
};

// 同步 actions 处理，回传 action 对象
export const changeUserName = (text) => ({ type: CHAGE_USER_ID, payload: { userName: text } });
