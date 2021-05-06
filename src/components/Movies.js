import React from 'react';
import styled from 'styled-components';


const Movies = () => {
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
            </Content>
        </Container>
    )
}
const Container = styled.div`
    h4{
        margin-bottom:1em;
    }

`

const Content = styled.div`
    display:grid;
    grid-gap:26px;
    grid-template-columns:repeat(4, minmax(0, 1fr))
`

const Wrap = styled.div`
    border-radius:10px;
    overflow:hidden;
    border: 3px solid rgba(249,249,249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 69%) 0px 26px 30px -10px;
    transition:0.2s linear all;

    img{
        height:100%;
        width:100%;
        object-fit:cover;
    }
    &:hover{
        border: 3px solid rgba(249,249,249, 0.9);
        opacity:0.9;

    }
    
`

export default Movies
