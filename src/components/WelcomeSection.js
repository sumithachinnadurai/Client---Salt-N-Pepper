import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  padding: 40px 20px;
`;

const WelcomeMessage = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

const SubMessage = styled.h2`
  font-size: 24px;
  color: #777;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const WelcomeImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

const WelcomeSection = () => {
  return (
    <Section>
      <WelcomeMessage>Welcome to Salt-N-Pepper</WelcomeMessage>
      <SubMessage>ORDER ONLINE</SubMessage>
      <ImageContainer>
        <WelcomeImage src={process.env.PUBLIC_URL + '/images/welcome_image.jpg'} alt="Welcome Image" />
      </ImageContainer>
    </Section>
  );
};

export default WelcomeSection;
/*
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  padding: 40px 20px;
`;

const WelcomeMessage = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

const SubMessage = styled.h2`
  font-size: 24px;
  color: #777;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const WelcomeImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

const WelcomeSection = () => {
  return (
    <Section>
      <WelcomeMessage>Welcome to Salt-N-Pepper</WelcomeMessage>
      <SubMessage>ORDER ONLINE</SubMessage>
      <ImageContainer>
        <WelcomeImage src={process.env.PUBLIC_URL + '/images/welcome_image.jpg'} alt="Welcome Image" />
      </ImageContainer>
    </Section>
  );
};

export default WelcomeSection;
*/