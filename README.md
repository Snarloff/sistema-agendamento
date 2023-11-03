# Sistema de Agendamento

![agendar-consultas](https://github.com/Snarloff/sistema-agendamento/assets/46792575/53257fa0-7ae4-4c49-a165-6d4a323ffd18)

Este é um projeto de sistema de agendamento desenvolvido como parte de estudos anteriores. O sistema permite que os usuários cadastrem e visualizem agendamentos em um calendário, vejam detalhes de agendamentos individuais e recebam notificações por e-mail quando uma consulta está próxima.

## Visão Geral

O Sistema de Agendamento é uma aplicação web que oferece as seguintes funcionalidades:

1. Visualização de um calendário completo usando FullCalendar.js.
2. Exibição de agendamentos nas datas do calendário.
3. Detalhes de agendamentos individuais, incluindo descrição, nome, CPF, data e horário.
4. Finalização de consultas por meio de um botão.
5. Rota de cadastro (/cadastrar) para criar novos agendamentos.
6. Envio automático de notificações por e-mail quando a consulta está próxima de acontecer, usando Nodemailer.
7. Utilização de EJS, CSS e Bootstrap para o frontend.
8. Utilização de Express para o servidor.
9. Integração com o MongoDB usando Mongoose.

## Tecnologias Utilizadas

O projeto faz uso das seguintes tecnologias e pacotes:

- [FullCalendar.js](https://fullcalendar.io/): Uma biblioteca JavaScript para criação de calendários interativos.
- [EJS](https://ejs.co/): Uma linguagem de modelagem embutida para gerar HTML com JavaScript.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Linguagem de estilo para a aparência do aplicativo.
- [Bootstrap](https://getbootstrap.com/): Um framework CSS.
- [Express](https://expressjs.com/): Um framework web para Node.js.
- [Mongoose](https://mongoosejs.com/): Uma biblioteca de modelagem de objetos MongoDB para Node.js.
- [Nodemailer](https://nodemailer.com/): Uma biblioteca para envio de e-mails.
- [MongoDB](https://www.mongodb.com/): Um banco de dados NoSQL.

## Instruções de Uso

Para executar o projeto em sua máquina, siga os passos abaixo:

1. Clone este repositório:

   ```shell
   git clone https://github.com/Snarloff/sistema-agendamento.git
   ```

2. Navegue até o diretório do projeto:

   ```shell
   cd sistema-agendamento
   ```

3. Instale as dependências:

   ```shell
   npm install
   ```

4. Inicie o servidor:

   ```shell
   node .
   ```

A aplicação estará disponível em `http://localhost:3000`.

Certifique-se de configurar corretamente a conexão com o MongoDB e as configurações do Nodemailer.

## Abaixo estão algumas prints do projeto:

![image](https://github.com/Snarloff/sistema-agendamento/assets/46792575/51ee7ad3-64ec-4579-a24d-5ab06cd2d9d2)
![image](https://github.com/Snarloff/sistema-agendamento/assets/46792575/6276502b-7daf-4ff7-b7fc-9cdaca037f0e)
![image](https://github.com/Snarloff/sistema-agendamento/assets/46792575/b45d8eb0-3476-4219-9ae6-521c45f822fb)




## Contribuições

Este projeto é destinado a fins de estudo e não está mais em desenvolvimento ativo. Contribuições são bem-vindas, mas esteja ciente de que o projeto pode não atender a todos os padrões de produção.

## Problemas e Sugestões

Se você encontrar problemas ou tiver sugestões para melhorar este projeto, por favor, abra uma issue neste repositório.
