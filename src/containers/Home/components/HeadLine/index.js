import React, { Component } from 'react';
import styles from './HeadLine.less';

class HeadLine extends Component {
    render() {
        console.error(styles);
        return (
            <div className='red'>
                HeadLine
            </div>
        );
    }
}

export default HeadLine;