import Immutable from 'immutable';

export const UiState = Immutable.fromJS({
    spinnerVisible: false,
});

// 我们使用 userId 来暂存用户 ID，data 存放 Ajax 取回的数据
export const GithubState = Immutable.fromJS({
    userId: '',
    data: {},
});
