import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { matchRoutes } from 'react-router-config';
import routes from './routers/config';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLodding: false,
        };
    }

    componentDidMount() {
        // const { dispatch } = this.props;
        // dispatch('123');
    }

    render() {
        const { isLodding } = this.state;
        const { children, location } = this.props;
        const matchedRoutes = matchRoutes(routes, location.pathname);

        if (!matchedRoutes.length) {
            return (<div>頁面不存在</div>);
        }
        if (isLodding) {
            return (<div>Lodding</div>);
        }
        return (
            <div className="App">
                <header className="App-header">
                    Haix React Demo頁
                </header>
                <div className="content">
                    { children }
                </div>
            </div>
        );
    }
}

const propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object,
};

App.propTypes = {
    ...propTypes,
};

App.defaultProps = {
    children: null,
    location: {},
};

export default App;
