export function Experience() {
  return (
    <div className="pb-32">
      <section id="experience">
        <h2 className="mb-10 text-center text-4xl font-bold text-rose-600">
          Experiência
        </h2>

        <div className="mx-auto max-w-4xl space-y-10">
          <div className="flex items-start space-x-6">
            <img
              src="https://media.licdn.com/dms/image/v2/C4E0BAQGxqnPQkRXOEw/company-logo_100_100/company-logo_100_100/0/1644954559095?e=1746662400&v=beta&t=BDomzxLyaf7HpPsYZ1OnWxmAzx3e4hY4z9LUJkweCuo"
              alt="7comm"
              className="h-12 w-12"
            />
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Desenvolvedor de software</h3>
              <p className="font-semibold text-gray-400">
                7COMm - People and tech to transform · Tempo integral
              </p>
              <p className="text-base leading-relaxed">
                Desenvolvimento de um sistema de renegociação de dívidas para o
                banco Bradesco. A integração com o backend foi realizada através
                do recebimento de endpoints fornecidos pela equipe responsável,
                e implementamos as chamadas no nosso BFF (Backend for Frontend)
                utilizando o framework Node.js.
              </p>

              <p className="text-base leading-relaxed">
                Para garantir uma arquitetura organizada, dividimos as
                responsabilidades em módulos que são acionados pelo
                micro-frontend. No BFF, adotamos o Mocha para os testes
                unitários e implementamos logs de rastreabilidade para
                monitoramento e análise.
              </p>

              <p className="text-base leading-relaxed">
                Já no frontend, utilizamos o framework Angular e o design system
                Fluig, com testes unitários automatizados via Jest. A automação
                de testes e a integração contínua foram realizadas com
                ferramentas como Bamboo e SonarQube, garantindo qualidade e
                conformidade com as melhores práticas de código.
              </p>

              <p className="text-base leading-relaxed">
                O projeto foi gerido com metodologias ágeis, aplicando
                tagueamento, integração com microserviços e adoção de uma
                abordagem baseada em micro-frontend para garantir flexibilidade
                e escalabilidade no sistema.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-4xl space-y-10">
          <div className="flex items-start space-x-6">
            <img
              src="https://media.licdn.com/dms/image/v2/C4E0BAQGGcI8EsaaV2Q/company-logo_100_100/company-logo_100_100/0/1630609762106?e=1746662400&v=beta&t=A2qC4RF8-P7R-2-nkwXLt4Ho-HFWAiPlhVWKcLN11t8"
              alt="app7"
              className="h-12 w-12"
            />
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Desenvolvedor de software</h3>
              <p className="font-semibold text-gray-400">
                App7 Sistemas · Tempo integral
              </p>
              <p className="text-base leading-relaxed">
                Desenvolvimento de um sistema de renegociação de dívidas para o
                banco Bradesco. A integração com o backend foi realizada através
                do recebimento de endpoints fornecidos pela equipe responsável,
                e implementamos as chamadas no nosso BFF (Backend for Frontend)
                utilizando o framework Node.js.
              </p>

              <p className="text-base leading-relaxed">
                Para garantir uma arquitetura organizada, dividimos as
                responsabilidades em módulos que são acionados pelo
                micro-frontend. No BFF, adotamos o Mocha para os testes
                unitários e implementamos logs de rastreabilidade para
                monitoramento e análise.
              </p>

              <p className="text-base leading-relaxed">
                Já no frontend, utilizamos o framework Angular e o design system
                Fluig, com testes unitários automatizados via Jest. A automação
                de testes e a integração contínua foram realizadas com
                ferramentas como Bamboo e SonarQube, garantindo qualidade e
                conformidade com as melhores práticas de código.
              </p>

              <p className="text-base leading-relaxed">
                O projeto foi gerido com metodologias ágeis, aplicando
                tagueamento, integração com microserviços e adoção de uma
                abordagem baseada em micro-frontend para garantir flexibilidade
                e escalabilidade no sistema.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
