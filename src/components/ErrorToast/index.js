import React, { Component } from 'react';

class ErrorToast extends Component {
    render() {
        const { msg } = this.props;
        return (
            <div className="rttorToast">
                <div className="errorText"> </div>
            </div>
        );
    }

    componentDidMount () {
        
    }
}

export default ErrorToast;