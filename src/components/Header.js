import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    return (
        <Nav>
            <Link to="/">
                <Logo src="/images/logo.svg" />
            </Link>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIE</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="/images/profile.jpg" />
        </Nav>
    )
}

const Nav = styled.nav`
    background:#090b13;
    height:70px;
    color:#fff;
    display:flex;
    align-items:center;
    padding:0 36px;
    overflow:hidden;
`

const Logo = styled.img`
    height:80px;
    width:80px;
`

const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;


    a{
        display:flex;
        align-items:center;
        margin: 0 12px;
        cursor: pointer;

        img{
            height:20px;
        }
        span{
            position:relative;
            font-size:11px;
            letter-spacing:1.2px;
            &:after{
                position:absolute;
                content:'';
                bottom:-10px;
                left:-20%;
                right:0%;
                height:2px;
                background:#fff;
                transform:scaleX(0);
                transform-origin: center left;
                opacity:0;
                transition: 0.3s linear all;
                
            }
        }
        
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }

`
const UserImg = styled.img`
    width:44px;
    cursor:pointer;
    height:44px;
    background-size:cover;
    border-radius:50%;
`

export default Header
