# Coffee Delivery
Este projeto foi desenvolvido como desafio do curso de React da 
[@Rocketseat](https://github.com/rocketseat-education).
O desafio consistia em desenvolver, com base em uma interface fornecida no Figma ([aqui](https://www.figma.com/file/5yT9ZzZmRQRS4yivGGB3pl/Coffee-Delivery/)),
uma aplicação simples, com 3 páginas, para uma empresa de delivery de café.
 
![App Screenshot](/public/screenshot.jpeg)  

## 📝 Conceitos utilizados
- Estados
- ContextAPI
- LocalStorage
- Imutabilidade do estado
- Listas e chaves no ReactJS
- Propriedades
- Componentização 
- Reducer (useReducer)

## 🖥 Funcionalidades
- Listar todos os produtos disponiveis;
- Possibilidade de adicionar x quantidade de um produto no carrinho;
- Exibir a quantidade de produtos no carrinho em um badge no botão do carrinho;
- No carrinho agrupar por tipo de produto;
- Formulário para envio do endereço de entrega;
- Validação de dados do formulário (não solicitado);
- Apresentar a somatória dos valores para emissão do pedido.
- Página de sucesso ao enviar o pedido;

## 🚀 Tecnologias utilizadas
- ReactJS, ViteJs e TypeScript;
- Styled-components para estilização;
- react-hook-form e Zod para controle e validação do formulário;
- Immer para facilitar o processo de atualização do estado da aplicação;
- phosphor-react como biblioteca de icones;
- @mui, radix-ui e react-toastify em funcionalidades pontuais.

 
## </> Rodando o projeto 
Faça um clone do projet
~~~bash  
  git clone https://github.com/eduhaag/coffee-delivery.git
~~~

Acesse o diretorio local do projeto

~~~bash  
  cd coffee-delivery
~~~

Instale as dependências 

~~~bash  
npm install
~~~

Rode o projeto

~~~bash  
npm run dev
~~~  

Acesse o projeto através de http://localhost:3000

 
## Licença 
[MIT](https://choosealicense.com/licenses/mit/)  
