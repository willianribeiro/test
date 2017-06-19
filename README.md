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
* [Instruções para entrega do projeto](https://github.com/vivadecora/projeto-vaga-front-end-nao-fazer-fork#warning-instruções-para-entrega-do-projeto)


## Sobre o Viva Decora:

O Viva Decora é uma empresa do grupo VivaReal, fundada em 2014, partiu  da necessidade de completar o ciclo do consumidor de móveis online.  

O Viva Decora iniciou as atividades com o apoio da estrutura de back-office do VivaReal e depois ganhou equipes independentes de marketing B2B e B2C, operações, produto e engenharia, atualmente com 20 profissionais.  

Nossa plataforma de arquitetura e decoração online é voltada para ajudar os usuários a criar e comprar móveis e objetos para ambientes, baseado em recomendações e inspirações de diferentes arquitetos e designers. Temos mais de 1,5 milhão de visitas por mês  em nosso site e aplicativos e mais de 3 mil profissionais cadastrados. 

O Viva Decora quer ajudar o consumidor em três fases distintas: inspiração, informação e compra.
 

## Sobre o projeto: Curadoria de filmes.

Depois do trabalho alguns amigos quiseram assistir filme juntos. O problema apareceu logo: *"Que filme vamos assistir?"*. Cada um parecia ter seu próprio gosto para filmes e estava difícil decidir.

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
* O projeto consiste apenas em 3 telas: **Tela inicial**, **Meus filmes bons**, **Meus filmes ruins**.
* Cada tela precisa ter uma url própria;
* Não devem ser listados filmes classificados como `adulto`; 
* HTML semântico é importante. Pretende-se que o projeto seja rastreável por motores de busca;
* As telas devem ser responsivas e mobile first;
* Não é preciso se preocupar com contas de usuário. O MVP funcionará apenas para o usuário logado.
* Não é preciso se preocupar com persistência dos dados. É esperado que os dados sobre "Filmes bons ou ruins" seja perdido com o recarregamento da página, **mas não na troca de abas do projeto**. 
* Repetindo: ao trocar entre abas do projeto os dados sobre "filmes bons ou ruins" devem permanecer. Não é necessário que eles persistam depois de um recarregamento.
* Não precisa se preocupar com contas de usuário. **O MVP não possui dados de usuário**.

### Tela inicial

* Contém uma lista de cards de filmes;
* Essa lista vem da API do [The Movie Database](https://developers.themoviedb.org);
* A lista de filmes contém apenas filmes que ainda não foram classificados.

### Informações do card de filme

* Título do filme; 
* Foto de destaque;
* Botão "Gosto desse filme";
* Classificação/*rating* do filme;
* Botão "Não gosto desse filme";
* Trecho da sinopse clicável com até 100 caracteres seguidos de  "...";
* Ao clicar no trecho da sinopse a sinopse completa deverá aparecer em um modal bloqueante;

### Tela "Filmes que gosto"

* Apresenta todos os filmes que foram marcados como "Gosto desse filme".
* A lista desses filmes é ordenada de acordo com a data em que o filme foi classificado, os classificados a menos tempo aparecem no topo.
* Ao clicar no botão "Não gosto desse filme", deve aparecer uma mensagem: "Tem certeza que deseja reclassificar esse filme?". Só depois da confirmação o filme vai para "Meus filmes ruins".

### Tela "Filmes que não gosto"

* Apresentam todos os filmes que foram marcados como "Não gosto desse filme".
* A lista desses filmes é ordenada de acordo com a data em que o filme foi classificado, os classificados a menos tempo aparecem no topo.
* Ao clicar no botão "Gosto desse filme", deve aparecer uma mensagem: "Tem certeza que deseja reclassificar esse filme?". Só depois da confirmação o filme vai para "Meus filmes bons".

## Design do projeto

[Aguardando finalização das telas](https://github.com/vivadecora/projeto-vaga-front-end-nao-fazer-fork/issues/3).

## Outros recursos

* O desenvolvedor @teles começou parte do projeto nesse repositório e se quiser você pode continuar seu projeto a partir desse código. 
* Se quiser pode usar o [vd-modal](https://github.com/vivadecora/vd-modal).

**IMPORTANTE**: Usar qualquer desses recursos não é imprescindível e não vale pontos extras.

## :warning: Instruções para entrega do projeto 

* Desenvolva e versione esse projeto usando git.
* Utilize o serviço de hospedagem de código de sua preferência: github, bitbucket, gitlab ou outro.
* **Não faça um fork desse projeto.** Projetos forkeados sofrerão penalização na classificação.
* Crie um README com instruções claras sobre como executar seu projeto.
* Envie um email com o link para seu código para "jose.maciel [arroba] vivadecora.com.br "
* Dúvidas sobre esse projeto podem ser perguntadas nas [issues](https://github.com/vivadecora/projeto-vaga-front-end-nao-fazer-fork/issues)
