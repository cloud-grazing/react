import { connect } from 'react-redux';
import Home from './components/Home';

import {
    setWelcome,
    changeUserName,
} from '../../actions/welcomeActions';

export default connect(
    (state) => ({
        userName: state.getIn(['welcomeReducers', 'userName']),
        showName: state.getIn(['welcomeReducers', 'name']),
        animationStatus: state.getIn(['welcomeReducers', 'animationStatus']),
    }),
    (dispatch) => ({
        onChangeUserName: (event) => (
            dispatch(changeUserName(event.target.value))
        ),
        onSubmitUserName: (userName) => () => (
            dispatch(setWelcome(userName))
        ),
    }),
    (stateProps, dispatchProps, ownProps) => {
        const { userName } = stateProps;
        const { onSubmitUserName } = dispatchProps;
        return {
            ...stateProps,
            ...dispatchProps,
            ...ownProps,
            onSubmitUserName: onSubmitUserName(userName),
        };
    },
)(Home);
