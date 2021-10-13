import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProgressDIY from '../hook/ProgressDIY';
import Cheer from '../hook/Cheer';

class Training extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {
        const { userName, history } = this.props;
        if (!userName) {
            history.push('/');
        }
    }

    // 加減計算機
    Counter = () => {
        const [count, setCount] = useState(10);
        const increase = () => { setCount(count + 1); };
        const decrease = () => { setCount(count - 1); };

        return (
            <div className="container">
                <button
                    type="button"
                    aria-label="button"
                    onClick={decrease}
                >
                    -
                </button>
                <span className="number">{count}</span>
                <button
                    type="button"
                    aria-label="button"
                    onClick={increase}
                >
                    +
                </button>
            </div>
        );
    };

    NextLesson = () => {
        const [lesson, setCount] = useState(0);
        const addLesson = () => { setCount(lesson + 1); };
        return (
            <button
                type="button"
                aria-label="button"
                onClick={addLesson}
            >
                Next
            </button>
        );
    };

    Progress = () => {
        const [value, setValue] = useState(0);
        const [score, setScore] = useState(0);
        return (
            <div>
                <ProgressDIY
                    value={value}
                    onClick={(e) => { setValue(e.target.value); }}
                    onChange={(e) => { setValue(e.target.value); }}
                />
                <Cheer value={score} onClick={(e) => { setScore(e.target.value); }} />
            </div>
        );
    };

    render() {
        const { userName } = this.props;
        const { Counter, NextLesson, Progress } = this;
        const { lesson } = this.state;

        return (
            <div className="Training">
                {`您好~ ${userName}`}
                <p>恭喜，你已經從home頁將userName寫入store，並且使用Immutable將資料取得。</p>
                <p>簡單來使用看看hooks吧！</p>
                <hr />
                <p>在React class 內 render內寫 hook</p>
                <Counter />
                <NextLesson />
                {lesson}
                <Progress />
            </div>
        );
    }
}

const propTypes = {
    userName: PropTypes.string,
    history: PropTypes.object.isRequired,
    // children: PropTypes.node.isRequired,
};

Training.propTypes = {
    ...propTypes,
};

Training.defaultProps = {
    children: null,
    userName: '',
};

const select = (state) => ({
    userName: state.getIn(['welcomeReducers', 'userName']),
});

export default connect(select)(Training);
