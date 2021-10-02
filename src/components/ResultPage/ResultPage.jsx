import React from 'react';
import PropTypes from 'prop-types';
import GithubBox from '../GithubBox/GithubBox';

const ResultPage = (props) => {
    const { data, location } = props;
    console.log(data, 'data');
    return (
        <div>
            <GithubBox data={data} userId={location.query.userId} />
        </div>
    );
};

ResultPage.propTypes = {
    data: PropTypes.objectOf,
    location: PropTypes.objectOf,
};

ResultPage.defaultProps = {
    data: {},
    location: {},
};

export default ResultPage;
