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
  <div className="flex items-start space-x-6">
    <Image
      src={imgSrc}
      alt={imgAlt}
      width={48}
      height={48}
      className="h-12 w-12 rounded-lg"
    />
    <div className="space-y-3">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="font-semibold text-gray-400">
        {company} · {period}
      </p>
      {description.map((desc, index) => (
        <p key={index} className="text-base leading-relaxed">
          {desc}
        </p>
      ))}
    </div>
  </div>
);

export function Experience() {
  return (
    <div className="pb-32 pt-10">
      <section id="experience">
        <h2 className="mb-10 text-center text-4xl font-bold text-rose-600">
          Experiência
        </h2>

        <div className="mx-auto max-w-4xl space-y-10">
          <ExperienceItem
            imgSrc="/7comm.jpeg"
            imgAlt="7comm"
            title="Desenvolvedor de software"
            company="7COMm - People and tech to transform"
            period="ago de 2023 - set de 2024 · 1 ano 5 meses"
            description={[
              'Desenvolvimento de sistema de renegociação de dívidas para o Banco Bradesco utilizando Node.js no Backend for Frontend (BFF) e Angular no frontend. O backend foi estruturado com NestJS, garantindo uma arquitetura modular e escalável, permitindo que diferentes componentes do sistema fossem facilmente atualizados e mantidos. Implementação de integração com microsserviços e micro-frontend, com foco em flexibilidade e escalabilidade. Utilização de Mocha para testes unitários no BFF e Jest no frontend, além de Bamboo para integração contínua e SonarQube para análise de qualidade de código.',
              'A gestão do projeto foi realizada através de Jira, facilitando o acompanhamento das tarefas, sprints e definição de prioridades. Utilizamos Azure para o gerenciamento de deploy e a infraestrutura de nuvem, garantindo a alta disponibilidade e escalabilidade do sistema. A automação de testes, integração contínua e práticas de DevOps foram implementadas para garantir a qualidade do código e a entrega contínua de novas funcionalidades.',
              'Metodologias ágeis (Scrum) para gerenciar o desenvolvimento e garantir entregas rápidas e consistentes. Trabalhei de forma colaborativa com uma equipe multifuncional, incluindo desenvolvedores backend, frontend, QA e DevOps, garantindo uma comunicação eficiente e a entrega de alta qualidade. Implementação de logs de rastreabilidade para monitoramento e análise de performance, além de um acompanhamento constante de métricas para otimização do sistema.',
            ]}
          />
        </div>

        <div className="mx-auto mt-20 max-w-4xl space-y-10">
          <ExperienceItem
            imgSrc="/app7.jpeg"
            imgAlt="app7"
            title="Desenvolvedor de software"
            company="App7 Sistemas"
            period="fev de 2022 - ago de 2023 · 1 ano 7 meses"
            description={[
              'Desenvolvimento de software whitelabel de iGaming, com foco em soluções estatísticas e customização de plataformas. Atuei no frontend utilizando AngularJS e React, criando interfaces dinâmicas e responsivas para proporcionar uma experiência de usuário eficiente e adaptável. Utilizei CSS e SASS para estilização, garantindo um design escalável e modular.',
              'Trabalhei na implementação de componentes reutilizáveis e na integração com as equipes de backend e design para garantir a entrega de soluções personalizadas de alta performance e com ótima usabilidade em diversos dispositivos.',
            ]}
          />
        </div>
      </section>
    </div>
  );
}
