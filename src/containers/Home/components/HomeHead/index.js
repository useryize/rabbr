import React, { Component } from 'react';
import styles from './HomeHead.less';

class HomeHead extends Component {
    render() {
        return (
            <div className={styles.homeHeader}>
                <header className={styles.homeHeader_wrapper}>
                    <div className={styles.homeHeader_city}>深圳</div>
                    <div className={styles.homeHeader_search}>输入商户名、地点</div>
                    <div className={styles.homeHeader_self}>
                        <div className={styles.homeHeader_portrait} />
                    </div>
                </header>
            </div>
        );
    }
}

export default HomeHead;
