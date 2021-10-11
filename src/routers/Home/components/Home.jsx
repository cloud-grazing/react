import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

const Home = ({
    userName,
    showName,
    animationStatus,
    onSubmitUserName,
    onChangeUserName,
}) => (
    <div>
        <AppBar
            title="介紹"
            showMenuIconButton={false}
        />
        <TextField
            hintText="請輸入你的名稱:"
            onChange={onChangeUserName}
        />
        <RaisedButton label="提交" onClick={() => onSubmitUserName(userName)} primary />
        <div>{ showName }</div>
        {showName && !animationStatus ? (
            <Link to={{
                pathname: '/training',
            }}
            >
                <RaisedButton label="走吧！來去Demo" primary />
            </Link>
        ) : ''}
    </div>
);
const propTypes = {
    userName: PropTypes.string,
    showName: PropTypes.string,
    animationStatus: PropTypes.bool,
    onSubmitUserName: PropTypes.func,
    onChangeUserName: PropTypes.func,
};

Home.propTypes = {
    ...propTypes,
};

Home.defaultProps = {
    userName: 'haixyeh',
    showName: '',
    animationStatus: false,
    onSubmitUserName: () => {},
    onChangeUserName: () => {},
};

PropTypes.checkPropTypes(propTypes, Home.defaultProps, 'prop', 'MyComponent');
export default (Home);
