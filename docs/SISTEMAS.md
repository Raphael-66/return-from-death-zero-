# Sistemas do jogo

## Batalha (cartas)
- Energia por rodada `enMax()` (3 + bônus), mão `handSize()` (5 + bônus), vida `maxHp()`.
- Carta: `{n,c(custo),dmg,multi,blk,heal,draw,en,weak,dot,pay,san,o(dono)}`. Bônus de dano/defesa: `bonus(dono)`.
- Inimigo: `cfg = {enemy, hp, intents[], i2[] (fase 2), arch, lv, tier, tr, tr2, drain, hold, win, lose}`.
- **Níveis de inimigo** (`tier`): `mob`, `elite`, `boss`, `super`. Super chefes = personagens canônicos (`CANON`).
- **Traços** (`tr`, `tr2` na fase 2): `multi` (golpes por rodada), `armor` (armadura renovada), `ward` (reduz cada golpe seu), `enrage` (fúria a partir da rodada N, +10%/rodada), `regen`.
- `levelize(cfg)` → `tuneFoe`: vida e golpes calculados a partir do **baralho do jogador** (simulação `estPT`) e da vida dele. Veja `BALANCEAMENTO.md`.
- **Retorno pela Morte**: cada derrota para o mesmo chefe no Retornos dá −8% vida e −4% golpes na próxima tentativa (até −40%/−20%). Guardado em `RG.bt`.
- **Sinergias**: Laço (carta de alguém próximo logo depois de uma de Subaru), Duplas (`PAIRS`), Par (cura após carta do par; casado salva de golpe fatal 1×), Filhos (carta própria aos 10 anos com laço 40).
- Animações: `fxDiff` compara estado antes/depois de `playCard`/`endTurn`.

## Ligação entre os modos
- Força vem do Modo Livre (equipamentos, árvore, atributos, cartas, laços/sinergias, lendárias) e é usada nas batalhas da história, que têm poder fixo por arco.
- O arco do Retornos (`META.maxArc`, função `storyArc`) limita nível, atributos, laços e etapas do romance no Modo Livre.

## Modo Retornos
- Marcos canônicos (`CFLAGS`) são copiados para `PF.canon` e liberam etapas do romance no Modo Livre (`CREQ`).
- Ritmo: 3–5 cartas comuns entre momentos da história; medidores com efeito elástico (ganhos ×0,6 acima de 65 e ×0,35 acima de 80; perdas ×0,75 abaixo de 35 e ×0,5 abaixo de 20).
- 8 arcos (`ARCS`), cartas `K(...)`, medidores, mortes (`DTH`, `rgDie`), memórias, metas (`AGOAL`), prova final (`trialCfg`), emboscadas (`encounterCard`).
- Batalhas da história: `BAT.elsa` (segurar 6 rodadas), `lobos`, `baleia`, `culto` (Petelgeuse), `garfiel`, `regulus`, `torre` (Reid), `imperio`, `mortos` (Sphinx).

## Modo Livre
- **Relógio**: `S.h` de 7 (07:00) até 31 (07:00 do dia seguinte). Ações custam 2h (`advanceTime()`). 22–24h: −1 sanidade/h; madrugada: −2,5/h, XP −25%, −15% vida nas lutas. Dormir tarde reduz o descanso e acorda mais tarde; às 31h desmaio (−10, acorda 12:00).
- **Mapa**: `PLACES` (+ `vil` para vilas, `dg` para masmorras), `POS` (640×760), `ROADS`, regiões `ZONE` (M Mathers, C Centro, O Oeste, A Augria, V Vollachia).
- **Viagem**: `travelH(a,b)` em horas (30 min até 2 dias), montarias encurtam, viagens longas acampam às 22:00 (ou seguem de noite com risco).
- **Moradias** `RES[lugar]` = `[nome, preço, bônus de sono, aluguel/semana, descrição]`. Dormir acorda onde dormiu (`sleepPlace`). Móveis `FURN` por casa.
- **Romance**: estágios `STG` (pontos `rp`), status `corte → namoro → noivado → casado` (`rsOf`), morar juntos, lua de mel, ações `YACT`, filhos (gravidez 10 dias, crescem 1 ano/semana, até 3).
- **Cônjuge**: morando juntos, à tarde/noite está na casa do casal (`coupleHome`).
- **Masmorras** `DUN`: 8 a 16 andares, guardião a cada 5, elites, acampamentos, armadilhas, saque em mochila.
- **Missões** `SQ`: passos `visit`, `fight`, `explore`, `pay`, `boss`, `choice`; até 3 ativas.
- **Torneio** semanal na Capital: quartas (elite), semi (chefe), final (super: Julius/Wilhelm/Garfiel).
- **Salão dos Ecos** (Capital): revanche diária com cada super chefe.
- **Forja lendária** (Loja): 3 essências do super chefe + ¤1500 + ◆5 → carta `LEG`.
- **Comércio**: `TG` (10 mercadorias), `TCITY` (12 cidades); preço = base × origem/distância/procura × oscilação diária × oferta do dia; carga 12 (+montaria).
- **Bestiário**: registra cada inimigo (vitórias, derrotas, traços); 1ª vitória contra chefe ◆+1, super ◆+2.
- Outros: pesca, mercado/forja de equipamento, pedidos, negócios, facções, pets/montarias, estações e festivais, rede de relações, diário.

## Pesca
- `SPOTS` (um por lugar do mapa) e `FISH` (`s` = pontos, `b` = comportamento, `tm`/`se`/`rain` = condições). `pickFish` sorteia entre as espécies ativas; a força do lançamento (`FS.power`) aumenta a chance de raros.
- Minijogo em `fHook` (estado `FS.G`): barra `barH` cresce com a vara; progresso sobe dentro da barra e cai fora; baú (`chest`) e captura perfeita.

## Moedas
¤ moedas (comuns) · ◆ fragmentos (raros) · ☾ sanidade · ↺ mortes.

## Acabamento (Atualização 23)
- **Spoilers**: `MASKN` (regex por nome e arco) + `maskFuture(root)`, aplicado ao `#pane` por um `MutationObserver` no `#overlay` e no `openMenu`. Usa `nowArc()`.
- **Perfeição**: `perfCats()` devolve categorias `{n,got,tot,w}`; `perfPct()` faz a média ponderada; `perfCheck()` libera `perf25/50/100`.
- **Linha do tempo**: `META.tl` (até 60), `META.tlBest`, `epithet(id,n)`; `RG.tStart` marca a carta em que o retorno começou.
- **Correio**: `PF.mail` (até 40 cartas `{d,f,w,t,x,g,got,rd}`), `MAILT` (cartas por remetente), `mailMorning()` roda ao acordar, `openMail()`. Botão `#hMail` no cartão do dia.
- **Aniversários**: `BDAY` (estação, dia), `bdOn(day)`, bônus ×3 no `relAdd` quando o clique veio de um presente (`GIFTCLK`); `PF.bdg` evita repetir no mesmo ano.
- **Som**: `aud()` monta compressor, reverberação e barramentos (`AUD.mus`, `AUD.fx`); `MOODS` define a trilha; `musMood()` escolhe pelo que está na tela. `SET.mus`, `SET.musv`, `SET.calm`.
