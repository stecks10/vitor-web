'use client';

import { Button } from './ui/button';
import Image from 'next/image';
import avatar from '../public/avatar.png';

import { TechIcons } from './TechIcons';

export function HomePage() {
  return (
    <div
      id="home"
      className="flex min-h-screen flex-col items-center justify-center space-y-8 px-6 pt-10 text-center"
    >
      <Image src={avatar} alt="Foto de perfil" className="w-40 rounded-full" />
      <h1 className="text-4xl font-bold sm:text-5xl">
        Olá, eu sou <span className="text-rose-600">Vitor Nunes</span> <br />
        Desenvolvedor Full-Stack
      </h1>

      <div className="mx-auto mt-4 max-w-3xl text-lg text-foreground sm:text-xl">
        Como desenvolvedor Full-Stack, sou apaixonado por construir soluções
        inovadoras que resolvem problemas reais. Com 4 anos de experiência, me
        especializo na criação de aplicações rápidas, escaláveis e com foco na
        experiência do usuário. Meu trabalho vai do Front-end ao Back-end,
        utilizando as mais modernas tecnologias e frameworks.
      </div>

      <div className="mx-auto mt-4 max-w-3xl text-lg text-foreground sm:text-xl">
        Se você busca alguém para transformar suas ideias em produtos digitais
        de alto impacto, você está no lugar certo!
      </div>

      <TechIcons />

      <div className="mt-6 flex items-center justify-center space-x-4">
        <Button
          variant="secondary"
          className="border-rose-600 px-6 py-2 font-bold transition-colors hover:bg-rose-600 hover:text-white"
        >
          Entre em contato
        </Button>
        <Button
          variant="light"
          className="border-rose-600 bg-rose-500 px-6 py-2 font-bold text-white transition-colors hover:bg-rose-600 hover:text-white"
        >
          Baixar CV
        </Button>
      </div>
    </div>
  );
}
