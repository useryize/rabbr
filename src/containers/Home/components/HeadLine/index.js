import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import styles from './HeadLine.less';

class HeadLine extends Component {
    render() {
        const { sliderData } = this.props;
        return (
            <div className={styles.headline}>
                <div className={styles.headline_logo} />
                <div className={styles.headline_slider}>
                    <Slider
                        {...{
                            slidesToShow: 1,
                            swipeToSlide: true,
                            autoplay: true,
                            vertical: true
                        }}
                    >
                        {sliderData.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={styles.headline_sliderInner}
                                    onClick={() => {
                                        document.location.href = item.url;
                                    }}
                                >
                                    <div className={styles.headline_sliderTitle}>{item.title}</div>
                                    <div className={styles.headline_sliderImgWrapper}>
                                        <img alt="" className={styles.headline_sliderImg} src={item.pic} />
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, action) => {
    const { homeHeadLine } = state.homeModules;
    return {
        ...homeHeadLine
    }
}

export default connect(mapStateToProps)(HeadLine);