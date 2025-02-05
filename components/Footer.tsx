'use client';

import { GithubLogo, LinkedinLogo, EnvelopeSimple } from 'phosphor-react';

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-primary p-8 text-primary-foreground shadow-lg dark:bg-secondary dark:text-secondary-foreground md:px-40"
    >
      <div className="container mx-auto flex flex-col items-center px-4 text-start font-semibold md:px-20 lg:px-40">
        <h2 className="mb-4 flex items-center justify-center text-2xl sm:text-3xl">
          Sobre
        </h2>
        <p className="mb-4 max-w-3xl text-left text-base sm:text-lg md:text-xl">
          Desenvolvedor de Software com mais de 4 anos de experiência na entrega
          de soluções robustas e de alta qualidade. Especialista em React, React
          Native, Angular e Node.js, com sólida experiência na construção de
          APIs RESTful e aplicações front-end modernas. Possuo domínio em
          TypeScript, além de ampla experiência em JavaScript, SQL e MongoDB.
        </p>

        <div className="mb-4 flex flex-wrap items-center justify-center gap-6 sm:flex-row">
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
