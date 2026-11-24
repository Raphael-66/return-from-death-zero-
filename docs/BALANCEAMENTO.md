# Balanceamento (números atuais e como foram calibrados)

## Inimigos (`TIERP` em `tuneFoe`)
| Nível | T (rodadas de dano total do jogador) | a (fração da vida máx. por golpe médio) | b (fração da defesa média por rodada) |
|---|---|---|---|
| mob | 2.7 | 0.13 | 0.40 |
| elite | 3.7 | 0.16 | 0.50 |
| boss | 4.6 | 0.15 | 0.55 |
| super | 5.4 | 0.15 | 0.50 |

- `vida = DPT × T × alívio × mul`; `golpe médio = (vidaMáx × a + defesaPorRodada × b) × alívio × mul`, mantendo o formato do arquétipo (`ARCH[*].pat`).
- **Alívio por nível** (`relief`): comuns/elite `1 − 0,05×(refLv − lv)` entre 0,55 e 1,35; chefes entre 0,85 e 1,3.
- `mul`: +1,5% por arco; −10% nos arcos 1–2 (exceto super); masmorras +2% por andar.
- Fase 2: golpes ×1,2 (chefe) ou ×1,3 (super).
- Traços de armadura/regeneração/proteção escalam com `DPT/20` (0,85 a 2,5; proteção no máx. 1,4).
- Dificuldade "Difícil": golpes ×1,3.

## Metas usadas na calibração (simulação `tests/sim.js`, jogador automático simples)
- Comuns: ~100% de vitória, perdendo ~25–30% da vida.
- Elite: ~80–95%. "Mortal": 30–60%.
- Chefe: 60–100% (varia com o baralho).
- Super chefe na 1ª tentativa: ~10–60% no meio do jogo e ~30–90% no fim. O bônus de Retorno pela Morte compensa.
- Robô com política simples chega ao Arco 8 do Retornos (`tests/monkey.js` com `SMART=1`).

## Economia de tempo (Modo Livre)
- Ações: 2h. Viagens: 30 min / 1h / 3h / 6h / 14h / 24–30h.
- Cansaço: 0,5 sanidade a cada meia hora entre 22h e 24h; 1,25 de madrugada.

## Super chefes canônicos (`CANON`)
Elsa, Baleia Branca, Petelgeuse, Garfiel, Regulus, Reid, Sphinx, Roswaal, Sirius, Julius, Wilhelm — cada um com `tr`, `tr2` e texto de fase 2 (`p2`).
