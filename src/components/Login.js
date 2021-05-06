import React from 'react'
import styled from 'styled-components'
const Login = () => {
    return (
        <Container>
            <CTA>
                <CTALoginOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL HERE</SignUp>
                <Discription>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Discription>
                <CTALoginTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    display:flex;
    align-items:top;
    justify-content:center;
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.4vw + 5px);

    &:before{
        position:absolute;
        content:'';
        top:0;
        left:0;
        bottom:0;
        right:0;
        background-image: url('/images/login-background.jpg');
        background-position:top;
        background-size:cover;
        background-repeat:no-repeat;
        z-index: -1;
        opacity:0.8;
    }
`

const CTA = styled.div`
    max-width:650px;
    width:90%;
    display:flex;
    flex-direction:column;
    margin-top:100px;
    align-items:center;
`

const CTALoginOne = styled.img``

const SignUp = styled.a`
    width:100%; 
    background-color:#0063e5;
    padding: .6em .3em;
    color:#f9f9f9;
    text-align:center;
    border-radius:4px;
    font-weight:500;
    margin-top:.5em;
    cursor:pointer;
    transition: all 250ms;
    font-size:18px;
    &:hover{
        background-color:#0080e5;

   }    
`
const Discription = styled.p`
    font-weight:300;
    font-size:12px;
    opacity:0.8;
    line-height:1.5;
    letter-spacing:1px;
    text-align:center;
    margin:1.3em 0;
`
const CTALoginTwo = styled.img`
    width:90%;
`

export default Login
