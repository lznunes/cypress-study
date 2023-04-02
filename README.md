Pre Requisites:

 NodeJS 10 or 12
 VS Code


Recomendado criar ambiente virtual e ativar ambiente antes de instalar os pacotes para evitar conflito com pacotes locais do computador

Neste caso utilizamos do Python mesmo:

#python3.8 -m venv venv

Ativando ambiente virtual:

#. venv/bin/activate

Agora pode instalar pacotes tranquilamente

###################################

Confirgurando para rodar Cypress

1. In  VS Code terminal  initing NodeJS project

#npm init

2. Install Cypress with Cucumber

#npm install --save-dev cypress

#npm install --save-dev @badeball/cypress-cucumber-preprocessor

#npm install --save-dev @bahmutov/cypress-esbuild-preprocessor

3. Initing Cypress project
#npx cypress open