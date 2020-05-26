import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { ButtonContainer } from './Button';
import styled from 'styled-components';
class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-3 py-sm-1">
                <Link to='/'>
                    <img src={logo} alt="store"
                    width="80px" height="80px"
                    className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5"></li>
                    <Link to="/" className="nav-link">
                        products
                    </Link>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"></i>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize; 
    }
`
export default Navbar;