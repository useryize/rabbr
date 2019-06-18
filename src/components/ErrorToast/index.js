import React, { Component } from 'react';
import './style.css';

class ErrorToast extends Component {
    render() {
        const { msg } = this.props;
        return (
            <div className="rttorToast">
                <div className="errorText">{msg}</div>
            </div>
        );
    }

    componentDidMount() {
        this.trim = setTimeout(item => {
            this.props.clearError();
        }, 3000);
    }
    componentWillUnmount() {
        this.trim && clearTimeout(this.trim);
    }
}

export default ErrorToast;