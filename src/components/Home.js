import React from 'react'
import styled from 'styled-components';
import Slides from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';
const Home = () => {
    return (
        <Container>
            <Slides />
            <Viewers />
            <Movies />
        </Container>
    )
}

const Container = styled.main`
    position:relative;
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    overflow-x:hidden;

    &:before{
        content:'';
        background-image: url('/images/home-background.png') ;
        background-repeat: no-repeat;
        background-position:fixed;
        background-size:100% 100%;
        position:absolute;   
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index: -1;
    }
`

export default Home
