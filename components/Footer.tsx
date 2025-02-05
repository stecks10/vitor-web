'use client';

import { GithubLogo, LinkedinLogo, EnvelopeSimple } from 'phosphor-react';

export function Footer() {
  return (
    <footer
      id="contact"
      className="hover:bg-primary-dark flex w-full flex-col items-center justify-between bg-primary p-4 text-primary-foreground shadow-lg transition-colors duration-300 ease-in-out dark:bg-secondary dark:text-secondary-foreground"
    >
      <div className="flex w-full justify-center pb-8 sm:justify-center">
        <h2 className="mb-4 text-2xl sm:mb-0 sm:mr-4 sm:text-3xl">Sobre</h2>
      </div>
      <div className="container mx-auto flex flex-col items-center px-4 text-left md:px-20 lg:px-40">
        {/* Alinhamento do título "Sobre" e texto de descrição */}
        <div className="mb-4 flex flex-col items-center sm:flex-row sm:items-start sm:text-left">
          <p className="max-w-3xl text-base sm:text-lg md:text-xl">
            Desenvolvedor de Software com mais de 4 anos de experiência na
            entrega de soluções robustas e de alta qualidade. Especialista em
            React, React Native, Angular e Node.js, com sólida experiência na
            construção de APIs RESTful e aplicações front-end modernas. Possuo
            domínio em TypeScript, além de ampla experiência em JavaScript, SQL
            e MongoDB.
          </p>
        </div>

        {/* Ícones sociais */}
        <div className="mb-4 flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://github.com/stecks10"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-rose-400"
          >
            <GithubLogo size={30} />
          </a>

          <a
            href="mailto:vnn2006@gmail.com"
            className="transition-colors hover:text-rose-400 dark:border-rose-600"
          >
            <EnvelopeSimple size={30} />
          </a>

          <a
            href="https://www.linkedin.com/in/vitor-nunes-do-nascimento-466004197/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-rose-400"
          >
            <LinkedinLogo size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}
