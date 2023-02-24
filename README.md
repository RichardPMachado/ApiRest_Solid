# ApiRest_Solid
Fundamentos de Solid em uma Api rest

1 - inicializar o projeto
  yarn init -y

2 - adicionar o express
  yarn add express

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

5 - Adicionar o uuid v4
  Para não deixar a responsabilidade para o DB fazer um auto increment, pois pode haver conflito na troca de banco, ex:
   - de mysql para postgres;
  Usamos esse gerador de id universal para Node assim mantendo o controle do projeto em nossas mãos.
  yarn add uuidv4