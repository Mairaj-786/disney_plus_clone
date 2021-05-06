import React from 'react'
import styled from 'styled-components';

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" />
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 26px;
    display:grid;
    grid-gap:25px;
    padding: 30px 0 26px; 
    grid-template-columns: repeat(5, minmax(0, 1fr));
    `
const Wrap = styled.div`
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.2) ;
    border-radius:10px;
    -webkit-box-shadow: -1px 14px 9px 1px #000000; 
    box-shadow: -1px 14px 9px 1px #000000;
    transition: 0.4s linear all;
        img{
            width:100%;
            height:100%;
            object-fit:cover;

            }
        &:hover{
            transform:scale(1.03);
            border-color:rgba(249,249,249,0.8);
            -webkit-box-shadow: -1px 14px 22px -4px #000000; 
            box-shadow: -1px 14px 22px -4px #000000;
        }
`


export default Viewers
