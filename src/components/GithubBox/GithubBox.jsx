import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Card, CardActions, CardHeader, CardText,
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const GithubBox = (props) => {
    const { data, userId } = props;
    return (
        <div>
            <Card>
                <CardHeader
                    title={data.get('name')}
                    subtitle={userId}
                    avatar={data.get('avatar_url')}
                />
                <CardText>
                    Followers :
                    {' '}
                    {data.get('followers')}
                </CardText>
                <CardText>
                    Following :
                    {' '}
                    {data.get('following')}
                </CardText>
                <CardActions>
                    <Link to="/">
                        <RaisedButton
                            label="Back"
                            icon={<ActionHome />}
                            secondary
                        />
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};

const propTypes = {
    data: PropTypes.objectOf,
    userId: PropTypes.number,
};
GithubBox.propTypes = {
    ...propTypes,
};
GithubBox.defaultProps = {
    data: {},
    userId: 0,
};
PropTypes.checkPropTypes(propTypes, GithubBox.defaultProps, 'prop', 'MyComponent');

export default GithubBox;
