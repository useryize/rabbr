import React, { Component } from 'react';
import styles from './Activity.less';
import prcLeft from './ico/prcLeft.png';
import prcRight from './ico/prcRight.png';

class Activity extends Component {
    render() {
        return (
            <div className={styles.activity}>
                <div className={styles.activity_block}>
                    <div
                        className={`${styles.activity_content} ${styles.activity_content_pink}`}
                        onClick={() => {
                            document.location.href = "https://h5.dianping.com/app/ziggurat/1005/index.html?activity_tlt=1005&infrom=mzone";
                        }}
                    >
                        <div className={styles.activity_title}>最高88元</div>
                        <div className={`${styles.activity_subTitle} ${styles.activity_subTitle_pink}`}>速领新人红包</div>
                        <img alt="" className={styles.activity_pic} src={prcLeft} />
                    </div>
                </div>
                <div className={styles.activity_block}>
                    <div
                        className={`${styles.activity_content} ${styles.activity_content_blue}`}
                        onClick={() => {
                            document.location.href = "//h5.dianping.com/app/ziggurat/1361/index.html?notitlebar=1&token=*&latitude=*&longitude=*&activity_tlt=1361&infrom=mzone"
                        }}
                    >
                        <div className={styles.activity_title}>品质福利放送</div>
                        <div className={`${styles.activity_subTitle} ${styles.activity_subTitle_blue}`}>享吃喝玩乐礼</div>
                        <img alt="" className={styles.activity_pic} src={prcRight} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Activity;
