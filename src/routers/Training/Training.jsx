import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import './Training.css';

class Training extends Component {
    constructor() {
        super();
        this.state = {
            // isLodding: false,
        };
    }

    componentDidMount() {
        // const { dispatch } = this.props;
    }

    render() {
        return (
            <div className="Training">
                <header className="Training-header">
                    write now2
                </header>
            </div>
        );
    }
}

const propTypes = {
    // children: PropTypes.node.isRequired,
};

Training.propTypes = {
    ...propTypes,
};

Training.defaultProps = {
    children: null,
};

export default Training;
