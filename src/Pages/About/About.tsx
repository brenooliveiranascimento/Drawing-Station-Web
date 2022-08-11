import React from 'react';
import { MainContent } from '../IncompleteModules/component';

function About() {
  return (
    <MainContent>
      <h1>Sobre o projeto</h1>

      <span>
        Olá me chamo Breno Nascimento, sou o desenvolvedor e o professor
        deste projeto.
        DrawingStation se trata de uma plataforma de ensino de desenho realista
        desenvolvida no intuito de auxiliar os meus alunos e
        praticar o uso de algumas tecnologias como o Redux, TypeScript, React e Firebase.
      </span>
      <span>
        Além da plataforma web também desenvolvi o app mobile que está disponivél na playstore.
      </span>
    </MainContent>
  );
}

export default About;
