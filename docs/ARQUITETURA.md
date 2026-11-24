# Arquitetura

## Arquivos
| Arquivo | Papel |
|---|---|
| `index.html` | O jogo inteiro (CSS + HTML + JS). |
| `sw.js` | Service worker: rede primeiro (3 s), cópia em cache se offline. **Trocar a versão a cada atualização.** |
| `manifest.webmanifest`, `icons/` | PWA (instalar na tela inicial). |
| `.nojekyll` | GitHub Pages serve os arquivos sem processar. |
| `LEIA-ME.md` | Guia para o jogador hospedar/instalar. |
| `tests/` | Testes automáticos com Playwright. |
| `docs/` | Esta documentação. |

## Telas (`<section class="screen">`)
`#title` (início), `#game` (visual novel antiga), `#hub` (Modo Livre), `#rg` (Modo Retornos, cartas de deslizar), `#battle`, `#ai` (Mesa do Mestre). Modais em `#overlay` (função `ovl(html)`), avisos em `#toast` (`toast(t)`).

## Estado e saves (localStorage)
| Chave | Conteúdo |
|---|---|
| `rpm_free` | Save do Modo Livre (`S` com `mode:"free"`). Inclui `h` (hora), `day`, `san`, `coin`... |
| `rpm_slot_rg` | Save do Modo Retornos (`S.rg` = `RG`: arco, retornos, medidores `m[0..3]`, memórias, `bt` = mortes por chefe). |
| `rpm_slot_1..3` | Saves do modo história antigo (só aparecem se existirem). |
| `rpm_pf` | Perfil compartilhado `PF`: nível, XP, árvore, atributos (`vit,res,pow,int`), relacionamentos (`rel`), vida (`life` via `L()`), filhos (`kids`), bestiário (`best`), missões (`sq`), torneio (`tour`), essências (`ess`), comércio (`trd`), ecos (`echo`), móveis (`life.furn`), bônus da casa do dia (`hb`)... |
| `rpm_meta` | Conquistas, finais, maior arco (`maxArc`). |
| `rpm_set` | Ajustes (dificuldade, som, vibração). |

Helpers: `S` (save atual), `RG` (estado do Retornos), `PF`, `L()` (vida no Modo Livre, cria padrões), `RS()` (moradias), `KIDS()`, `BEST()`, `SQS()`, `TOUR()`, `ESS()`, `TRD()`.

## Modos
- **Modo Retornos** (principal): cartas de deslizar por 8 arcos, medidores Mente/Corpo/Laços/Renome, mortes com memórias, metas de arco e prova final, batalhas canônicas (`BAT.*`).
- **Modo Livre**: vida diária com relógio de horas, mapa, moradias, romance, família, masmorras, missões, torneio, comércio. Fortalece Subaru nos Retornos (perfil compartilhado).
- Modo história em slots e Mesa do Mestre: legados. A Mesa fica no hub (Mansão); os slots só aparecem para quem tem save.

## Camadas de atualização (ordem no script)
1. Base: história, batalha, VN, IA offline, Retornos, arsenal, pesca, perfil, economia, vida, romance, mundo, masmorras, estações, facções, rede de relações.
2. **Atualização 8**: chefes canônicos e traços, `tuneFoe`, inimigos por ambiente (`ENV`, `AFFIX`), masmorras maiores, vilas novas, moradias (`RES`), mapa em escala (`POS`, `ROADS`, 640×760), Salão dos Ecos, regiões de viagem (`ZONE`, `ZT`).
3. **Atualização 10**: sinergias (`PAIRS`, `lacoOf`), filhos, bestiário, missões (`SQ`), ações a dois (`YACT`), animações.
4. **Atualização 11**: torneio (`TOUR`), móveis (`FURN`), cartas lendárias (`LEG`).
5. **Cônjuge em casa**: `placeOf` e `sleepPlace` para quem mora junto (`liveP`, `coupleHome`).
6. **Atualização 13**: relógio (`clockify`, `S.h`), cansaço, viagens em horas (`travelH`), comércio (`TG`, `TCITY`).
7. Tela inicial (oculta slots vazios) e `toTitle()`.
