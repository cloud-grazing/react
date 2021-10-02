import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { renderRoutes } from 'react-router-config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Main from './components/Main/Main';
// import HomePageContainer from './containers/HomePage/HomePage';
// import ResultPageContainer from './containers/ResultPage/ResultPage';
import routes from './routers/config';
import store from './store/configureSotore';

// const historyStore = syncHistoryWithStore(hashHistory, store);

// 用 reactredux 的 Provider 包起來 將去往去，可以去存儲組件都可以訪問到 state
// 本文使用browserHistory當做歷史，並使用material-ui的MuiThemeProvider包裹整個組件
// 因為本文是簡單的應用程序，我們設計了主要為母模版，有兩個子組件其 HomePageContainer 和 ResultPageContainer
// 一個 HomePageContainer 為根位置的子組件
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={(createBrowserHistory())}>
                {renderRoutes(routes)}
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
