import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import IconButton from 'material-ui/IconButton';
// import FontIcon from 'material-ui/FontIcon';

const HomePage = ({
    userId,
    onSubmitUserId,
    onChangeUserId,
}) => (
    <div>
        <AppBar
            title="Github Finder"
            showMenuIconButton={false}
        />
        <div>
            github帳號:
            {userId}
        </div>
        <TextField
            hintText="Please Key in your Github User Id."
            onChange={onChangeUserId}
        />
        <Link to={{
            pathname: '/result',
            query: { userId },
        }}
        >
            <RaisedButton label="Submit" onClick={() => onSubmitUserId(userId)} primary />
        </Link>
    </div>
);
const propTypes = {
    userId: PropTypes.string,
    onSubmitUserId: PropTypes.func,
    onChangeUserId: PropTypes.func,
};

HomePage.propTypes = {
    ...propTypes,
};

HomePage.defaultProps = {
    userId: 'haixyeh',
    onSubmitUserId: () => {},
    onChangeUserId: () => {},
};

PropTypes.checkPropTypes(propTypes, HomePage.defaultProps, 'prop', 'MyComponent');
export default (HomePage);
