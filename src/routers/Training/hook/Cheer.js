import React from 'react';
import useRate from './useRate';
// import PropTypes from 'prop-types';

const Cheer = (props) => {
    // eslint-disable-next-line react/prop-types
    const { value, onClick } = props;
    const score = useRate(value);

    return (
        <div>
            <h1>Haix加油器</h1>
            <div>
                目前分數
                {score}
                <br />
                還有沒有! 再來
                {88 - score}
                分!
            </div>
            <button type="button" value={Number(value) + 1} onClick={onClick}>加1分</button>
            <button type="button" value={Number(value) + 7} onClick={onClick}>加7分</button>
            <button type="button" value={Number(value) + 10} onClick={onClick}>加10分</button>
            <button type="button" value={0} onClick={onClick}>0分</button>
        </div>
    );
};

// const propTypes = {
//     onClick: PropTypes.func,
//     value: PropTypes.number,
// };

// Cheer.propTypes = {
//     ...propTypes,
// };

export default Cheer;
