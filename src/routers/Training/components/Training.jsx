import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const Training = ({
    userName,
    onSubmitUserName,
    onChangeUserName,
}) => (
    <div>
        <AppBar
            title="練練習囉"
            showMenuIconButton={false}
        />
        <div>
            請輸入你的名稱:
            {userName}
        </div>
        <TextField
            hintText="Please Key in your Name"
            onChange={onChangeUserName}
        />
        <Link to={{
            pathname: '/result',
            query: { userName },
        }}
        >
            <RaisedButton label="Submit" onClick={() => onSubmitUserName(userName)} primary />
        </Link>
    </div>
);
const propTypes = {
    userName: PropTypes.string,
    onSubmitUserName: PropTypes.func,
    onChangeUserName: PropTypes.func,
};

Training.propTypes = {
    ...propTypes,
};

Training.defaultProps = {
    userName: 'haixyeh',
    onSubmitUserName: () => {},
    onChangeUserName: () => {},
};

PropTypes.checkPropTypes(propTypes, Training.defaultProps, 'prop', 'MyComponent');
export default (Training);
