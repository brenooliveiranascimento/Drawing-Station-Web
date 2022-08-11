import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';
import {
  FiLinkedin, FiInstagram, FiYoutube, FiGithub,
} from 'react-icons/fi';
import { MainContent } from '../IncompleteModules/component';

function About() {
  return (
    <MainContent>
      <h1>Sobre o projeto</h1>

      <span>
        Olá me chamo Breno Nascimento e sou o desenvolvedor e professor
        deste projeto.
        DrawingStation se trata de uma plataforma de ensino de desenho realista
        desenvolvida no intuito de auxiliar os meus alunos, e
        praticar o uso de algumas tecnologias como o Redux, TypeScript, React e Firebase.
      </span>
      <span>
        Além da plataforma web também desenvolvi o app mobile com ReactNative
        que está disponivél na playstore.
      </span>

      <a className="googlePlay" href="https://play.google.com/store/apps/details?id=com.drawingstation" target="_blank" rel="noreferrer">
        <FaGooglePlay size={30} />
      </a>

      <span>
        Link das minhas redes sociair e amil para contato
      </span>
      <span className="email">
        breno564nascimento@gmail.com
      </span>
      <section className="Redes_sociais">

        <a href="https://www.youtube.com/channel/UCUHNOO-fKfV_hZ-QXau1gAg" target="_blank" rel="noreferrer">
          <FiGithub size={40} />
        </a>

        <a href="https://www.linkedin.com/in/breno-nascimento-0b3331229/" target="_blank" rel="noreferrer">
          <FiLinkedin size={40} />
        </a>

        <a href="https://www.instagram.com/allblack_arts/" target="_blank" rel="noreferrer">
          <FiInstagram size={40} />
        </a>

        <a href="https://www.youtube.com/channel/UCUHNOO-fKfV_hZ-QXau1gAg" target="_blank" rel="noreferrer">
          <FiYoutube size={40} />
        </a>

      </section>

    </MainContent>
  );
}

export default About;
