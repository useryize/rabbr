import React, { Component, Fragment } from 'react';
import Slider from './components/Category';
import HeadLine from './components/HeadLine';
import Discount from './components/Discount';
import LinkList from './components/LinkList';
import HomeHead from './components/HomeHead';
import Banner from './components/Banner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <HomeHead></HomeHead>
                <Banner></Banner>
                <Slider></Slider>
                <HeadLine></HeadLine>
                <Discount></Discount>
                <LinkList></LinkList>
            </Fragment>
        );
    }
}

export default Home;