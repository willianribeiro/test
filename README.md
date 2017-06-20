# Projeto vaga Front-end no Viva Decora

Esse é um repositório com as regras para criação do projeto para vaga de desenvolvedor front-end no Viva Decora. 
A vaga é **para trabalho presencial no Viva Decora, localizado em São Paulo no bairro da Consolação.**

**IMPORTANTE:** Nesse exato momento o projeto ainda não está terminado. Estamos aguardando [design](https://github.com/vivadecora/projeto-vaga-front-end-nao-fazer-fork/issues/3) e [trecho de código](https://github.com/vivadecora/projeto-vaga-front-end-nao-fazer-fork/issues/4) para que ele comece a valer. 

## Tabela de conteúdos

* [Sobre o Viva Decora](https://github.com/vivadecora/projeto-vaga-front-end-nao-fazer-fork#sobre-o-viva-decora)
* [Sobre o projeto: Curadoria de filmes.](https://github.com/vivadecora/projeto-vaga-front-end-nao-fazer-fork#sobre-o-projeto-curadoria-de-filmes)
* [Curadoria de filmes. Requisitos do MVP.](https://github.com/vivadecora/projeto-vaga-front-end-nao-fazer-fork#curadoria-de-filmes-requisitos-do-mvp)
* [Design do projeto](https://github.com/vivadecora/projeto-vaga-front-end-nao-fazer-fork#design-do-projeto)
* [Outros recursos](https://github.com/vivadecora/projeto-vaga-front-end-nao-fazer-fork#outros-recursos)
* [Critérios de avaliação](https://github.com/vivadecora/projeto-vaga-front-end-nao-fazer-fork#critérios-de-avaliação)
* [Pontos extras](https://github.com/vivadecora/projeto-vaga-front-end-nao-fazer-fork#pontos-extras)
* [Instruções para entrega do projeto](https://github.com/vivadecora/projeto-vaga-front-end-nao-fazer-fork#warning-instruções-para-entrega-do-projeto)


## Sobre o Viva Decora:

O Viva Decora é uma empresa do grupo VivaReal, fundada em 2014, partiu  da necessidade de completar o ciclo do consumidor de móveis online.  

O Viva Decora iniciou as atividades com o apoio da estrutura de back-office do VivaReal e depois ganhou equipes independentes de marketing B2B e B2C, operações, produto e engenharia, atualmente com 20 profissionais.  

Nossa plataforma de arquitetura e decoração online é voltada para ajudar os usuários a criar e comprar móveis e objetos para ambientes, baseado em recomendações e inspirações de diferentes arquitetos e designers. Temos mais de 1,5 milhão de visitas por mês  em nosso site e aplicativos e mais de 3 mil profissionais cadastrados. 

O Viva Decora quer ajudar o consumidor em três fases distintas: inspiração, informação e compra.
 

## Sobre o projeto: Curadoria de filmes.

Depois do trabalho alguns amigos quiseram assistir um filme juntos. O problema apareceu logo: *"Que filme vamos assistir?"*. Cada um parecia ter seu próprio gosto para filmes e estava difícil decidir.

Para resolver isso, Vanessa deu a ideia: 

> *Vamos fazer um app online com uma lista de filmes onde todos poderão dizer quais filmes acham bons ou ruins. O que acham?*

O Bruno respondeu:

> *Acho que vale a pena. Deveríamos fazer um MVP desse app só com funcionalidades básicas e ver se nos ajuda.*

Todos acharam uma boa ideia. Os requisitos do MVP do projeto "Curadoria de filmes" foram definidos como no próximo tópico. 

## Curadoria de filmes. Requisitos do MVP.

* Apenas código front-end será escrito para esse projeto: html5, css e javascript.
* Será usada a [API versão 4 de filmes do The Movies Database](https://developers.themoviedb.org/4)
* Pré-processadores css podem ser usados à vontade.
* O projeto deve ser uma *single page application (SPA)* escrita utilizando Angular 1.x, por exemplo, Angular 1.5.8 .
* O projeto consiste apenas em 3 telas: **Tela inicial**, **Filmes curtidos**, **Filmes não curtidos**.
* Cada tela precisa ter uma url própria;
* As telas devem ser responsivas;
* Não é preciso se preocupar com persistência dos dados. É esperado que os dados sobre "Filmes curtidos / filmes não curtidos" seja perdido com o recarregamento da página, **mas não na troca de abas do projeto**. 
* Repetindo: ao trocar entre abas do projeto os dados sobre "filmes curtidos/filmes não curtidos" devem permanecer. Não é necessário que eles persistam depois de um recarregamento.
* Não precisa se preocupar com contas de usuário. **O MVP não possui dados de usuário**.

### Tela "Filmes não curados"

* É a tela inicial;
* Exibe um card de filme de uma lista de filmes;
* Um botão "Não curti!" que adiciona o filme na lista de "Filmes não curtidos";
* Um botão "Pular" que remove o filme da lista de filmes não curados;
* Um botão "Curti" que adiciona o filme na lista de "Filmes curtidos.";
* Essa lista vem da API do [The Movie Database](https://developers.themoviedb.org);
* A lista de filmes contém apenas filmes que ainda não foram curados.

### Informações do card de filme

* Título do filme; 
* Foto de destaque;
* Ano do filme;
* Categoria do filme;
* Botão "Gosto desse filme";
* Classificação/*rating* do filme;
* Botão "Não gosto desse filme";
* Trecho da sinopse clicável com até 100 caracteres seguidos de  "...";
* Ao clicar no trecho da sinopse a sinopse completa deverá aparecer em um modal bloqueante;

### Tela "Filmes curtidos"

* Apresenta todos os filmes que foram marcados como "Filmes curtidos".
* A lista desses filmes é ordenada de acordo com a data em que o filme foi curado, os curados a menos tempo aparecem no topo.
* No MVP não é possível descurtir um filme depois que ele estiver nessa lista.

### Tela "Filmes não curtidos"

* Apresentam todos os filmes que foram marcados como "Filmes não curtidos".
* A lista desses filmes é ordenada de acordo com a data em que o filme foi curado, os curados a menos tempo aparecem no topo.
* No MVP não é possível curtir um filme depois que ele estiver nessa lista.

## Design do projeto

As telas do filmes estão no Marvel. Você pode verifica-las nos seguintes links:

* [Mobile - Filmes não curados](https://marvelapp.com/255gaff/screen/29558499)
* [Mobile - Modal de sinopse](https://marvelapp.com/255gaff/screen/29558496)
* [Mobile - Menu aberto](https://marvelapp.com/255gaff/screen/29558498)
* [Mobile - Filmes curtidos](https://marvelapp.com/255gaff/screen/29558497)
* [Mobile - Filmes não curtidos](https://marvelapp.com/255gaff/screen/29558501)

* [Desktop - Filmes não curados](https://marvelapp.com/4abc9c6/screen/29557679)
* [Desktop - Filmes curtidos. Estado vazio](https://marvelapp.com/4abc9c6/screen/29557683)
* [Desktop - Filmes não curtidos. Estado vazio](https://marvelapp.com/4abc9c6/screen/29557685)
* [Desktop - Filmes curtidos](https://marvelapp.com/4abc9c6/screen/29557681)
* [Desktop - Filmes não curtidos](https://marvelapp.com/4abc9c6/screen/29557684)
* [Desktop - Modal de sinopse](https://marvelapp.com/4abc9c6/screen/29557680)

## Outros recursos

* O desenvolvedor [@teles](https://github.com/teles) começou parte do projeto nesse repositório e se quiser você pode continuar seu projeto a partir desse código. 
* Se quiser pode usar o [vd-modal](https://github.com/vivadecora/vd-modal).

**IMPORTANTE**: Usar qualquer desses recursos não é imprescindível e não vale pontos extras.

## Critérios de avaliação

* Fidelidade ao layout solicitado;
* Fidelidade às funcionalidades solicitadas;
* Componentização e extensibilidade dos componentes Javascript;
* Clareza de nomenclatura do CSS;
* HTML estruturado de forma semântica;
* Adesão ao mobile first.

## Pontos extras

* Por desenvolvimento de testes unitários no Javascript;
* Por uso de mock de chamadas Ajax nos testes unitários;
* Por padronização do código: seguir algum styleguide de Javascript e/ou CSS;
* Por aplicar alguma forma de dados estruturado ao HTML;
* Pela aplicação das animações de transição.

## :warning: Instruções para entrega do projeto 

* Desenvolva e versione esse projeto usando git.
* Utilize o serviço de hospedagem de código de sua preferência: github, bitbucket, gitlab ou outro.
* **Não faça um fork desse projeto.** Projetos forkeados sofrerão penalização na classificação.
* Crie um README com instruções claras sobre como executar seu projeto.
* Envie um email com o link para seu código para "jose.maciel [arroba] vivadecora.com.br "
* Dúvidas sobre esse projeto podem ser perguntadas nas [issues](https://github.com/vivadecora/projeto-vaga-front-end-nao-fazer-fork/issues)
