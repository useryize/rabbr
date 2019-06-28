import React, { Component } from 'react';
import styles from './Banner.less';

class Banner extends Component {
    render() {
        return (
            <header className={styles.banner}>
                <div className={styles.banner_title}>
                    <span className={styles.banner_logo} />
                    <span className={styles.banner_text}>吃喝玩乐，找优惠</span>
                </div>
                <div className={styles.banner_btns}>
                    <div
                        className={styles.banner_btn}
                        onClick={() => {
                            document.location.href = 'https://evt.dianping.com/synthesislink/6702.html'
                        }}
                    >打开大众点评</div>
                    <div
                        className={`${styles.banner_btn} ${styles.banner_btn_bg}`}
                        onClick={() => {
                            document.location.href = 'https://m.dianping.com/download/redirect?id=11186'
                        }}
                    >下载APP享特价</div>
                </div>
            </header>
        );
    }
}

export default Banner;
