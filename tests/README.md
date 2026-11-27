# Testes automáticos

Rodam o jogo de verdade no Chrome sem janela (Playwright), com um gancho `window.__T(código)` que executa código dentro do escopo do jogo.

```bash
node tests/harness.js tests/flow.js                  # Modo Livre: viagens, exploração, moradias, sono, masmorra, menus
node tests/harness.js tests/rg.js                    # Modo Retornos: batalhas canônicas, aprendizado por morte
node tests/harness.js tests/sim.js                   # simulação de balanceamento por perfil (inicial/meio/fim)
node tests/harness.js tests/story_sim.js             # chefes da história x perfis (só Retornos / normal / investido)
N=3000 node tests/harness.js tests/rg_flow.js        # ritmo do Retornos: cartas por arco e causas de morte
MODE=rg SMART=1 N=1500 node tests/harness.js tests/monkey.js    # jogo aleatório com lutas "inteligentes"
MODE=free SMART=1 N=3000 node tests/harness.js tests/monkey.js
node tests/harness.js tests/v10.js   # família, sinergias, bestiário, missões
node tests/harness.js tests/v11.js   # torneio, móveis, forja lendária
node tests/harness.js tests/v12.js   # cônjuge em casa
node tests/harness.js tests/v13.js   # relógio, viagens em horas, comércio
node tests/harness.js tests/v20_pesca.js   # pesca: lançamento, fisgada, minijogo, diário
node tests/fish_sim.js '{"s0":0.8,"s1":1.8,"dart":1.25,"up":0.37,"upd":0.1,"dn":0.23,"dnd":0.15}'   # taxa de captura por dificuldade e vara
node tests/harness.js tests/v17.js   # grupo de batalha, caçada lendária, aliados canônicos
node tests/harness.js tests/v23_premium.js   # correio, aniversários, perfeição, linha do tempo, spoilers, música
node tests/harness.js tests/v38_encerramentos.js   # encerramentos originais, créditos, tocador em Ajustes
node tests/harness.js tests/v38_radio.js   # rádio aleatório do Modo Livre
node tests/harness.js tests/v38_comercio.js   # revender na mesma cidade não dá lucro
```

Saída esperada no fim: `no page errors`. Linhas `FAIL` indicam passo de teste quebrado.
Variáveis: `PW` (caminho do playwright), `CHROME` (executável do Chrome). Capturas de tela vão para `/tmp`.
