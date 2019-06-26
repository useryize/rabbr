import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import styles from './category.less';

class Category extends Component {
    render() {
        const { sliderData } = this.props;
        const sliderSettings = {
            dots: true,
            arrows: false,
            slidesToShow: 1,
            swipeToSlide: true,
            autoplay: false
        }

        return (
            <div className={styles.category}>
                <Slider
                    {...sliderSettings}
                >
                    {
                        sliderData && sliderData.map((item, index) => (
                            <div key={index}>
                                {item.map((subItem, indexItem) => (
                                    <div className={styles.category_section} key={indexItem}>
                                        <img alt="" className={styles.category_icon} src={subItem.src} />
                                        <div>
                                            <span className={styles.category_text}>{subItem.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                    }
                </Slider>
            </div>
        );
    }
}
const mapStateToProps = (state, action) => {
    const { homeCategory } = state.homeModules;
    return {
        ...homeCategory
    };
}
export default connect(mapStateToProps)(Category);