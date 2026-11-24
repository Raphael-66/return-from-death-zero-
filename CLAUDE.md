# Retorno pela Morte — guia para o Claude

Jogo de fã (não oficial, sem fins lucrativos) inspirado em Re:Zero, em **português do Brasil**, feito como PWA de um arquivo só. Dono: Raphael-66. Publicado no GitHub Pages: https://raphael-66.github.io/return-from-death-zero-/

Leia também: `docs/ARQUITETURA.md`, `docs/SISTEMAS.md`, `docs/BALANCEAMENTO.md`, `docs/HISTORICO.md`, `docs/ROADMAP.md`.

## Regras do projeto
- Todo texto do jogo e das conversas com o dono é em **português do Brasil**, tom leve e caloroso, frases curtas.
- Personagens canônicos podem aparecer, mas **sem reproduzir falas, letras ou textos oficiais**: a história é recontada com texto próprio. Nada de arte oficial: ícones e ilustrações são originais (SVG/Unicode).
- Conteúdo de família e romance é sempre **leve e adequado** (sem nada sexual).
- O jogo precisa funcionar **offline** e no **celular** (tela de 390 px é a referência).
- Os saves ficam no `localStorage` do aparelho. **Nunca quebre saves antigos**: toda estrutura nova precisa de valor padrão e migração (veja `normalize`, `L()`, `RS()`, `clockify`).

## Como o código está organizado (resumo)
- `index.html` (~7.300 linhas): CSS no `<style>`, HTML mínimo das telas e **um único `<script>`** dentro de uma IIFE com `"use strict"`.
- O código cresce em **camadas de atualização**: cada pacote novo vai no fim do script, logo **antes do bloco `/* tela inicial: Modo Retornos (principal)` e do `toTitle();`**, e estende funções antigas com o padrão:
  ```js
  var _velha=nomeDaFuncao;
  nomeDaFuncao=function(...){ /* antes */ _velha(...); /* depois */ };
  ```
  A ordem importa: a última camada envolve todas as anteriores. Funções muito usadas nesse padrão: `startBattle`, `endBattle`, `playCard`, `endTurn`, `renderBattle`, `renderHub`, `sleepDay`, `goPlace`, `levelize`, `eq`, `placeOf`, `sleepPlace`, `personMenu`, `paneStore`, `openMenu` (esta foi editada no lugar).
- Ganchos de extensão prontos: `PAX` (botões de ação no lugar do mapa), `PAH` (tratadores dessas ações), `WSEC` (seções da aba Mundo), `MAPTOP`, `ACH` (conquistas), `CARDS`/`addC` (cartas), `GD`/`tierSet` (itens/espólios).

## Fluxo de trabalho de uma atualização
1. `git pull`, ler a parte relevante do `index.html` (grep pelo nome da função).
2. Escrever o pacote novo numa camada no fim do script (ou editar no lugar, se for correção pontual).
3. Checar sintaxe: extrair o `<script>` e rodar `node --check`.
4. Rodar os testes em `tests/` (veja `tests/README.md`): pelo menos `flow.js`, `rg.js` e o `monkey.js` nos dois modos.
5. **Atualizar a versão do service worker** em `sw.js` (as strings `versão XXXX` e `rpm-XXXX` com um hash novo); sem isso o celular continua com a versão antiga.
6. Atualizar `docs/HISTORICO.md` (e os outros docs se mudar algo estrutural).
7. Commit em português, push na `main`. O GitHub Pages publica sozinho em ~1 minuto.

## Armadilhas conhecidas
- `S.t` no Modo Livre é um **getter** calculado de `S.h` (horas). Nunca retorna 3; use `S.h` para horário. `advanceTime(h)` aceita horas (padrão 2h).
- Overlays (`#overlay`) são reaproveitados: sempre conferir `$("#overlay").hidden` antes de abrir outro automaticamente.
- `renderBattle` recria o DOM da batalha: animações flutuantes vão para a camada fixa `#fxl`.
- Perfil compartilhado entre modos: `PF` (`rpm_pf`). Cartas extras, moedas, fragmentos etc. sincronizam via `pfPull`/`pfPush` (`PF.sh`).
- A classe CSS `.me` era usada no painel e na barra de vida: a barra do jogador agora é `.bar.hpme`.
