import React from 'react';
import AuthFormComponent from '../AuthForm/AuthFormComponent';
import ImageCard from '../ImageAuht/ImageCard';
import { CardContainer } from './AuthCardStyle';
import './styles.css';

function AuthCard() {
  return (
    <section className="containerCard">
      <CardContainer>
        <ImageCard />
        <AuthFormComponent />
      </CardContainer>
    </section>
  );
}

export default AuthCard;
