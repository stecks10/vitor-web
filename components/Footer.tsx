'use client';

import { GithubLogo, LinkedinLogo } from 'phosphor-react';

export function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-primary p-8 text-primary-foreground shadow-lg dark:bg-secondary dark:text-secondary-foreground"
    >
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-2xl font-semibold">Sobre</h2>
        <p className="mx-auto mb-4 max-w-3xl text-lg">
          Desenvolvedor de Software com mais de 4 anos de experiência na entrega
          de soluções robustas e de alta qualidade. Especialista em React, React
          Native, Angular e Node.js, com sólida experiência na construção de
          APIs RESTful e aplicações front-end modernas. Possuo domínio em
          TypeScript, além de ampla experiência em JavaScript, SQL e MongoDB.
        </p>
        <p className="mb-4">
          <a href="vnn2006@gmail.com">vnn2006@gmail.com</a>
        </p>
        <div className="mb-4 flex justify-center space-x-6">
          <a
            href="https://github.com/stecks10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo size={30} className="transition hover:text-rose-400" />
          </a>
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
        <p className="mt-6 text-sm text-gray-400">
          &copy; 2025 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
