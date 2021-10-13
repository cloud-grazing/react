import React from 'react';
// import PropTypes from 'prop-types';
import useRate from './useRate';

const ProgressDIY = (props) => {
    // console.log(props, 'props');
    // eslint-disable-next-line react/prop-types
    const { value, onClick, onChange } = props;
    const percent = useRate(value);
    console.log(percent, 'percent');

    return (
        <div className="progress">
            <div
                className="progress-back"
                style={{
                    backgroundColor: 'rgba(0,0,0,0.2)', width: '300px', height: '7px', borderRadius: '10px',
                }}
            >
                <div
                    className="progress-bar"
                    style={{
                        backgroundColor: '#fe5196', width: `${percent}%`, height: '100%', borderRadius: '10px',
                    }}
                />
            </div>
            目前比率:
            {' '}
            {percent}
            %
            <button type="button" value={90} onClick={onClick}>增加比率至90</button>
            <button type="button" value={10} onClick={onClick}>減少比率至10</button>
            <div>
                <label htmlFor="firstTest">
                    請輸入數值
                    <input id="firstTest" type="Number" max="100" min="0" onChange={onChange} />
                </label>
            </div>
        </div>
    );
};

// const propTypes = {
//     onClick: PropTypes.func,
//     value: PropTypes.number,
// };

// ProgressDIY.propTypes = {
//     ...propTypes,
// };

export default ProgressDIY;
