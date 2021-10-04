import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { renderRoutes } from 'react-router-config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import routes from './routers/config';
import store from './store/configureSotore';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <BrowserRouter>
                <Switch>
                    <App>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Router history={(createBrowserHistory())}>
                                {renderRoutes(routes)}
                            </Router>
                        </Suspense>
                    </App>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
