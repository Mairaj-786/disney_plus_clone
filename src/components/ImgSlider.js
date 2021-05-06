import React from 'react'
import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slides = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badag.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badging.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg" />
            </Wrap>
        </Carousel>

    )
}

const Carousel = styled(Slider)`
    margin-top:20px;

    ul li button{
        &:before{
            font-size:10px;

            color: rgba(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color:white;
    }
    .slick-prev{
        /* z-index: 1; */
    }
    .slick-next{
        opacity:0;
    }

    .slick-list{
        overflow:visible;
    }
`
const Wrap = styled.div`
    cursor:pointer;
    img{
        border: 4px solid transparent;
        width:100%;
        height:100%;
        -webkit-box-shadow: -3px 10px 8px -4px #000000; 
        box-shadow: -3px 10px 8px -4px #000000;
        border-radius:4px;
        transition-duration:300ms;

        &:hover{
            border:4px solid rgba(249,249,249, .8);
        }
    }
`

export default Slides;
