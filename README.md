# Desafio para vaga de QA da Passei Direto
_Utilizando como ferramenta de automação o **Nightwatch**_

## Preparando o ambiente

Para rodar os testes automatizados precisamos primeiramente montar o ambiente para tal.
Com isso será necessário algumas instalações:

1. Selenium requer java, verifique se o mesmo está instalado. Caso contrário faça a instalação através do site:
https://www.java.com/pt_BR/download/

2. Instale o node.js.
https://nodejs.org/en/download/

3. No diretório do projeto, abrir o prompt de comando e executar o seguinte comando:
```sh
npm install
```

4. Iremos criar o arquivo **credential.env** no diretório raiz, contendo as credenciais para seu login no site. Ex:

```sh
export USER=test@test.com
export PASSWORD=yourpassword
```

> **Sempre** crie seu .env ou env.json no diretório raiz do seu projeto e não esqueça de adicioná-lo ao seu `.gitignore` para evitar _acidentalmente_ cometer suas chaves / senhas para o GitHub onde pessoas ruins possam roubar.


## Executando

Com todo o processo feito, vamos executar o nosso teste. Abra o terminal, navegue até a raiz do projeto e execute o comando:

```sh
npm test
```
