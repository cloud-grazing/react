import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

const Main = (props) => {
    const { children } = props;

    return (
        <div>
            <AppBar
                title="Github Finder"
                showMenuIconButton={false}
            />
            <div>
                {children}
            </div>
        </div>
    );
};
const propTypes = {
    children: PropTypes.node
    ,
};
Main.propTypes = {
    ...propTypes,
};

Main.defaultProps = {
    children: null,
};

PropTypes.checkPropTypes(propTypes, Main.defaultProps, 'prop', 'MyComponent');
export default Main;
