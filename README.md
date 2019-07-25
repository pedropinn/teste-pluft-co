# Sistema para exibir restaurantes.
Sistema desenvolvido como teste, para vaga front-end da empresa Pluft-co, deve exibir restaurantes próximos ao usuário, e será capaz de realizar pedido pela aplicação.

# Dependências
Criar DB através do mongoDB via docker:

- docker pull mongo
- docker run --name NOME -p 27017:27017 -d mongo

>Iniciar containers pausado:
>- docker start NOME
>- docker ps -a

### Executar na pasta api
- npm rum start

### Executar na pasta raiz
- npm rum devNode

## Cadastrar informações no DB.

Não foi desenvolvido na aplicação a opção para **post**, inserção de novos dados via **Insomnia**.
>#### Definir rota de post.
>http://localhost:3001/api/restaurants

  

>#### Estrutura para realizar post:
> 
> > {
> "name" : "Restaurante nº 1",
> "description" : "Descrição do restaurante numero 1.",
> "address" : "Rua do restaurante n 111" ,
> "url" : "www.site.com",
> "menu" : [{
> "recipe" : "prato teste1",
> "ingredients" : "receita teste1",
> "price" : "R$ 10,00" },
>  { "recipe" : "prato teste3",
> "ingredients" : "receita teste3",
> "price" : "R$ 20,00"
> }, 
> {"recipe" : "prato teste3",
> "ingredients" : "receita teste3",
> "price" : "R$ 30,00" }]}


## Observações

Desenvolvimento não concluído.

  

Api desenvolvida com **NodeJS**, aplicação com **ReactJS**.
