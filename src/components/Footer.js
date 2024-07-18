
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const FooterLinks = styled.div`
  margin: 10px 0;

  & > a {
    margin: 0 10px;
    text-decoration: none;
    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Salt-N-Pepper</p>
      <FooterLinks>
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Support</a>
        <a href="#">Advertising</a>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
