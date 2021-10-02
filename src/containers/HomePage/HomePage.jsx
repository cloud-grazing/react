import { connect } from 'react-redux';
import HomePage from '../../components/HomePage/HomePage';

import {
    getGithub,
    changeUserId,
} from '../../actions/githubActions';

export default connect(
    (state) => ({
        userId: state.getIn(['github', 'userId']),
    }),
    (dispatch) => ({
        onChangeUserId: (event) => (
            dispatch(changeUserId(event.target.value))
        ),
        onSubmitUserId: (userId) => () => (
            setTimeout(() => {
                dispatch(getGithub(userId));
            }, 2000)
        ),
    }),
    (stateProps, dispatchProps, ownProps) => {
        const { userId } = stateProps;
        const { onSubmitUserId } = dispatchProps;
        console.log(userId, 'userId');
        return {
            ...stateProps, ...dispatchProps, ...ownProps, onSubmitUserId: onSubmitUserId(userId),
        };
    },
)(HomePage);
