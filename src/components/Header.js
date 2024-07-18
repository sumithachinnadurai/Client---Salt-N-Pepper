/*
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  & > a {
    margin: 0 15px;
    text-decoration: none;
    color: #333;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Salt-N-Pepper</Logo>
      <Nav>
        <a href="/">Home</a>
        <a href="/menu">Food Menu</a>
        <a href="/menu">Orders</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
*/
import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;

  & > a {
    margin: 0 15px;
    text-decoration: none;
    color: #333;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-left: auto;

  & > div {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 4px 0;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Dropdown = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  z-index: 1000;

  & > a {
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    color: #333;
    border-bottom: 1px solid #ddd;
  }

  & > a:last-child {
    border-bottom: none;
  }
`;

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <HeaderContainer>
      <Logo>Salt-N-Pepper</Logo>
      <Nav>
        <a href="/">Home</a>
        <a href="/menu">Food Menu</a>
        <a href="/orders">Orders</a>
      </Nav>
      <Hamburger onClick={toggleDropdown}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <Dropdown open={dropdownOpen}>
        <a href="/">Home</a>
        <a href="/menu">Food Menu</a>
        <a href="/orders">Orders</a>
      </Dropdown>
    </HeaderContainer>
  );
};

export default Header;
