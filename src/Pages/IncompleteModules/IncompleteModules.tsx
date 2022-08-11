import React from 'react';
import { FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';
import { MainContent } from './component';

function IncompleteModule() {
  return (
    <MainContent>
      <h1>
        Modulo incompleto :(
      </h1>
      <span>
        Em breve novas aulas serão adicionada! Me siga nas redes sociais para ficar informado!
      </span>
      <section className="Redes_sociais">
        <a href="https://www.instagram.com/allblack_arts/" target="_blank" rel="noreferrer">
          <FiInstagram color="white" size={40} />
        </a>

        <a href="https://www.linkedin.com/in/breno-nascimento-0b3331229/" target="_blank" rel="noreferrer">
          <FiLinkedin color="white" size={40} />
        </a>

        <a href="https://www.youtube.com/channel/UCUHNOO-fKfV_hZ-QXau1gAg" target="_blank" rel="noreferrer">
          <FiYoutube color="white" size={40} />
        </a>
      </section>
    </MainContent>
  );
}

export default IncompleteModule;
