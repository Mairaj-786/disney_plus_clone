import React from 'react'
import styled from 'styled-components'
const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
            </Background>
            <ImgTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
            </ImgTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>

                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2017.7m Family Fantasy Kids. Animations
            </SubTitle>
            <Description>
                A Chines mom who sad when her grown son leave
                A Chines mom who sad when her grown son leave
                A Chines mom who sad when her grown son leave
            </Description>
        </Container>
    )
}
const Container = styled.div`
    height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
`
const Background = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index: -1;
    opacity:0.8;
    img{
        width:100%;
        height:100%;
    }
`

const ImgTitle = styled.div`
    margin:2em 0;
    height:30vh;
    min-height:200px;
    width:35vw;
    min-width:200px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`

const Controls = styled.div`
    display:flex;
`

const PlayButton = styled.button`
    border-radius:4px;
    padding:0 25px;
    cursor: pointer;
    margin-right:22px;
    text-transform:uppercase;
    letter-spacing:1.1.px;
    font-size:14px;
    display:flex;
    align-items:center;
    border:none;
    transition:0.2s linear all;

    &:hover{
        background:rgba(198, 198, 198,0.5);
    }

`

const TrailerButton = styled(PlayButton)`
    display:flex;
    align-items:center;
    background:rgba(0,0,0,0.2);
    color:#fff;
    border:1px solid rgb(249, 249 ,249);
`

const AddButton = styled.button`
    min-width:40px;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:none;
    background-color:rgba(0,0,0,.5);
    cursor:pointer;
    margin-right:26px;
    border:2px solid #fff;

    span{
        font-size:21px;
        color:white;
    }
    
`

const GroupWatchButton = styled(AddButton)`
    background:rgb(0,0,0);
`

const SubTitle = styled.div`
    color:#ddd;
    font-size:14px;
    margin-top:24px;
`

const Description = styled.div`
    font-size:18px;
    margin-top:13px;
    /* width:80vw; */
    max-width:560px;
    line-height:20px;
    font-weight:300;
`

export default Detail
