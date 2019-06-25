import React, { Component, Fragment } from 'react';
import Slider from './components/Category';
import HeadLine from './components/HeadLine';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Slider></Slider>
                <HeadLine></HeadLine>
            </Fragment>
        );
    }
}

export default Home;