import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'
class Category extends Component {
    render() {
        const { sliderData } = this.props;
        return (
            <Fragment>
                <Slider>
                    {
                        sliderData && sliderData.map((item, index) => (
                            <div key={index}>
                                {item.map((subItem, indexItem) => (
                                    <div className="category__section" key={indexItem}>
                                        <img alt="" className="category__icon" src={subItem.src} />
                                        <div>
                                            <span className="category__text">{subItem.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                    }
                </Slider>
            </Fragment>

        );
    }
}
const mapStateToProps = (state, action) => {
    return {
        ...state.homeCategory
    };
}
export default connect(mapStateToProps)(Category);