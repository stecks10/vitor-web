'use client';

import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-primary p-8 px-40 text-primary-foreground shadow-lg dark:bg-secondary dark:text-secondary-foreground"
    >
      <div className="container flex flex-col items-center text-left">
        <h2 className="mb-4 mr-[720px] max-w-3xl text-left text-lg">Sobre</h2>
        <p className="mb-4 max-w-3xl text-left text-lg">
          Desenvolvedor de Software com mais de 4 anos de experiência na entrega
          de soluções robustas e de alta qualidade. Especialista em React, React
          Native, Angular e Node.js, com sólida experiência na construção de
          APIs RESTful e aplicações front-end modernas. Possuo domínio em
          TypeScript, além de ampla experiência em JavaScript, SQL e MongoDB.
        </p>

        <div className="mb-4 flex space-x-6">
          <a
            href="https://github.com/stecks10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo size={30} className="transition hover:text-rose-400" />
          </a>

          <Button
            variant="light"
            className="px-6 py-2 font-bold transition-colors dark:border-rose-600"
          >
            Enviar Email
          </Button>
          <a
            href="https://www.linkedin.com/in/vitor-nunes-do-nascimento-466004197/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo
              size={30}
              className="transition hover:text-rose-400"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
