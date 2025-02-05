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
        <p
          key={index}
          className="mx-auto max-w-2xl space-y-10 px-4 text-xl font-semibold leading-relaxed sm:max-w-4xl sm:text-base"
        >
          {desc}
        </p>
      ))}
    </div>
  </div>
);

export function Experience() {
  return (
    <div className="mb-28 pb-16 pt-16 sm:pb-32">
      <section id="experience">
        <h2 className="mb-20 text-center text-3xl font-bold text-rose-600 sm:text-4xl">
          Experiência
        </h2>

        <div className="mx-auto max-w-2xl space-y-10 px-4 sm:max-w-4xl">
          <ExperienceItem
            imgSrc="/7comm.jpeg"
            imgAlt="7comm"
            title="Desenvolvedor de software"
            company="7COMm - People and tech to transform"
            period="ago de 2023 - set de 2024 · 1 ano 5 meses"
            description={[
              'Desenvolvi um sistema de renegociação de dívidas para o Banco Bradesco, no qual integrei as chamadas de endpoints fornecidas pela equipe de backend ao nosso BFF (Backend for Frontend), utilizando o framework Node.js com NestJS. A arquitetura foi desenhada de forma modular, permitindo flexibilidade e escalabilidade, com a responsabilidade de cada módulo sendo definida entre os microfrontends e os serviços de backend.',
              'No BFF, implementei testes unitários utilizando Mocha e configurei logs de rastreabilidade para monitoramento e análise de performance. No lado do frontend, utilizei Angular juntamente com o design system Fluig, realizando testes automatizados com Jest para garantir a qualidade do código. A automação dos testes e a integração contínua foram gerenciadas com Bamboo e SonarQube, permitindo um ciclo de desenvolvimento ágil e o cumprimento das melhores práticas de qualidade.',
              'A integração com a infraestrutura em Azure garantiu uma plataforma robusta e escalável para o sistema, permitindo alta disponibilidade e facilidade de manutenção. O gerenciamento do projeto foi conduzido com metodologias ágeis utilizando Jira, permitindo um acompanhamento eficiente das tarefas, definição de prioridades e entregas no tempo previsto. A abordagem baseada em microserviços e micro-frontends garantiu flexibilidade no desenvolvimento e escalabilidade do sistema.',
            ]}
          />
        </div>

        <div className="mx-auto mt-20 max-w-2xl space-y-10 px-4 sm:max-w-4xl">
          <ExperienceItem
            imgSrc="/app7.jpeg"
            imgAlt="app7"
            title="Desenvolvedor de software"
            company="App7 Sistemas"
            period="fev de 2022 - ago de 2023 · 1 ano 7 meses"
            description={[
              'Desenvolvimento de uma plataforma whitelabel de iGaming, com foco na implementação de soluções estatísticas e customização de plataformas para diferentes clientes. No frontend, a equipe trabalhou com AngularJS e React para criar interfaces dinâmicas, responsivas e interativas, proporcionando uma experiência de usuário altamente eficiente e adaptável às diversas necessidades dos clientes.',
              'Foi utilizado SASS para garantir um design modular e escalável, melhorando a manutenção e a consistência visual ao longo do projeto. Para o layout e a estrutura, a equipe adotou o Bootstrap, garantindo uma interface consistente e responsiva em diferentes dispositivos, assegurando a compatibilidade e fluidez da experiência.',
            ]}
          />
        </div>
      </section>
    </div>
  );
}
