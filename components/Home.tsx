'use client';

import { Button } from './ui/button';
import Image from 'next/image';
import avatar from '../public/avatar.png';

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8 px-6 text-center">
      <Image src={avatar} alt="Foto de perfil" className="w-40" />
      <h1 className="text-4xl font-bold sm:text-5xl">
        Eu transformo <br />
        <span className="text-rose-600">ideias em realidade</span>
        <br /> com cada linha de código!
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground sm:text-xl">
        Sou desenvolvedor Full-Stack com 4 anos de experiência, especializado na
        criação de aplicações modernas, escaláveis e de alta performance. Tenho
        expertise tanto no Front-end, com tecnologias como HTML, CSS,
        JavaScript, TypeScript, React, React Native, Angular, Next.js e
        TailwindCSS, quanto no Back-end com Node.js, NestJS e PostgreSQL.
      </p>
      <div className="mt-6 flex items-center justify-center space-x-4">
        <Button className="rounded-full px-6 py-2 transition-colors hover:bg-rose-600">
          Entre em contato
        </Button>
        <Button className="rounded-full px-6 py-2 transition-colors hover:bg-rose-600">
          Baixar CV
        </Button>
      </div>
    </div>
  );
}
