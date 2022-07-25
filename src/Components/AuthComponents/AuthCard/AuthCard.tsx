import React from 'react';
import AuthFormComponent from '../AuthForm/AuthFormComponent';
import ImageCard from '../ImageAuht/ImageCard';
import { CardContainer } from './AuthCardStyle';

function AuthCard() {
  return (
    <CardContainer>
      <AuthFormComponent />
      <ImageCard />
    </CardContainer>
  );
}

export default AuthCard;
