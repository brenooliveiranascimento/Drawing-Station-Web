import React from 'react';
// import AuthFormComponent from '../AuthForm/AuthFormComponent';
import ImageCard from '../ImageAuht/ImageCard';
import { CardContainer } from './AuthCardStyle';

function AuthCard() {
  return (
    <CardContainer>
      <ImageCard />
      {/* <AuthFormComponent /> */}
    </CardContainer>
  );
}

export default AuthCard;
