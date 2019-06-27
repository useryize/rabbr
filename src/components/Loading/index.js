import React, { Component } from 'react';
import styles from './Loading.less'
class Loading extends Component {
    render() {
        return (
            <div className={styles.loading}>
                <div className={styles.loading_img} />
                <span>正在加载...</span>
            </div>
        );
    }
}

export default Loading;
