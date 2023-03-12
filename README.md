# ApiRest_Solid
Fundamentos de Solid em uma Api rest

1 - inicializar o projeto
  yarn init -y

2 - adicionar o express e suas tipagens
  yarn add express
  yarn add @types/express -D

3 - adicionar o TypeScript e o ts-node-dev para roda em ambiente de desenvolvimento
  yarn add typescript ts-node-dev -D

4 - Adicionar o tsc para criar o tsconfig
  yard tsc --init

  Dentro do tsconfig.json 

  {
    compilerOpitions: {
    "target": "es2017",
    "module": "commonjs",
    "allowJs": true,
    "esModuleInterop":  true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileName": true,
    },
    "include": [
      "src/**/*.ts"
    ]
  }

5 - Adicionar o uuid v4 ( Uma biblioteca para gerar id universal)
  Para não deixar a responsabilidade para o DB fazer um auto increment, pois pode haver conflito na troca de banco, ex:
   - de mysql para postgres;
  Usamos esse gerador de id universal para Node assim mantendo o controle do projeto em nossas mãos.
  yarn add uuidv4

6 - Acrescentar o script abaixo no package json

  "scripts": {
    "start": "tsnd --transpile-only --respawn --ignore-watch node_modules src/server.ts"
  },

7 - Adicionar o nodemailer
Serviço de envio de email para um servidor de teste enquanto a aplicação está em desenvolvimento
  yarn add nodemailer

instalar as tipagens
  yarn add @types/nodemailer -D