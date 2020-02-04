# DesafioTesseract

Esse é um projeto feito para um desafio proposto no processo seletivo do Grupo Tesseract, foi desenvolvido utilizado o Angular v8.3.23.

O projeto consiste em duas telas: a listagem de usuários e os detalhes do usuário, ambas com a possibilidade de realizar uma busca pelo login através da barra superior.

##Lista de Usuários

Disponível em /src/app/lista-usuarios e também é utilizada para realizar a busca pelo login dos usuários

##Detalhes do usuário

Disponível em /src/app/detalhes-usuario.

##Barra superior
Disponível em /src/app/barra-superior, é reponsável por fazer o redirecionamento para a busca ou para a listagem de usuários caso o "logo" seja clicado

###Informações importantes:

A classe UsuarioModel é usada para modelar as informações recebidas pelo endpoint (https://api.github.com/orgs/grupotesseract/public_members), já a classe Usuario é usada para as informações do (https://api.github.com/orgs/grupotesseract/public_members).

As requisições de informações gerais como a listagem de usuários e informações básicas de cada usuário são feitas através de usuarios.service, já as informações específicas de um usuário(quantidade de repositórios e quantidade de seguidores) ficam a cargo da própria classe Usuario