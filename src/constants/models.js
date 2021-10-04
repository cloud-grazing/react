import Immutable from 'immutable';

export const UiState = Immutable.fromJS({
    spinnerVisible: false,
});

// 我們使用 userName 來暫存用户 name 存放數據
export const WelcomeState = Immutable.fromJS({
    userName: '',
    name: '',
    animationStatus: false,
});
