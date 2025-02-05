'use client';

import React from 'react';
import Image from 'next/image';

interface ExperienceItemProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  company: string;
  period: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  imgSrc,
  imgAlt,
  title,
  company,
  period,
  description,
}) => (
  <div className="flex flex-col items-start space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
    <Image
      src={imgSrc}
      alt={imgAlt}
      width={48}
      height={48}
      className="h-12 w-12 rounded-lg sm:h-16 sm:w-16"
    />
    <div className="space-y-3">
      <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
      <p className="font-semibold text-gray-400">
        {company} · {period}
      </p>
      {description.map((desc, index) => (
        <p key={index} className="text-sm leading-relaxed sm:text-base">
          {desc}
        </p>
      ))}
    </div>
  </div>
);

export function Experience() {
  return (
    <div className="pb-16 pt-10 sm:pb-32">
      <section id="experience">
        <h2 className="mb-10 text-center text-3xl font-bold text-rose-600 sm:text-4xl">
          Experiência
        </h2>

        <div className="mx-auto max-w-2xl space-y-10 sm:max-w-4xl">
          <ExperienceItem
            imgSrc="/7comm.jpeg"
            imgAlt="7comm"
            title="Desenvolvedor de software"
            company="7COMm - People and tech to transform"
            period="ago de 2023 - set de 2024 · 1 ano 5 meses"
            description={[
              'Desenvolvimento de sistema de renegociação de dívidas para o Banco Bradesco utilizando Node.js no Backend for Frontend (BFF) e Angular no frontend...',
              'A gestão do projeto foi realizada através de Jira, facilitando o acompanhamento das tarefas, sprints...',
              'Metodologias ágeis (Scrum) para gerenciar o desenvolvimento e garantir entregas rápidas...',
            ]}
          />
        </div>

        <div className="mx-auto mt-20 max-w-2xl space-y-10 sm:max-w-4xl">
          <ExperienceItem
            imgSrc="/app7.jpeg"
            imgAlt="app7"
            title="Desenvolvedor de software"
            company="App7 Sistemas"
            period="fev de 2022 - ago de 2023 · 1 ano 7 meses"
            description={[
              'Desenvolvimento de software whitelabel de iGaming, com foco em soluções estatísticas e customização de plataformas...',
              'Trabalhei na implementação de componentes reutilizáveis e na integração com as equipes...',
            ]}
          />
        </div>
      </section>
    </div>
  );
}
