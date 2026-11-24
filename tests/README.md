# Testes automáticos

Rodam o jogo de verdade no Chrome sem janela (Playwright), com um gancho `window.__T(código)` que executa código dentro do escopo do jogo.

```bash
node tests/harness.js tests/flow.js                  # Modo Livre: viagens, exploração, moradias, sono, masmorra, menus
node tests/harness.js tests/rg.js                    # Modo Retornos: batalhas canônicas, aprendizado por morte
node tests/harness.js tests/sim.js                   # simulação de balanceamento por perfil (inicial/meio/fim)
MODE=rg SMART=1 N=1500 node tests/harness.js tests/monkey.js    # jogo aleatório com lutas "inteligentes"
MODE=free SMART=1 N=3000 node tests/harness.js tests/monkey.js
node tests/harness.js tests/v10.js   # família, sinergias, bestiário, missões
node tests/harness.js tests/v11.js   # torneio, móveis, forja lendária
node tests/harness.js tests/v12.js   # cônjuge em casa
node tests/harness.js tests/v13.js   # relógio, viagens em horas, comércio
```

Saída esperada no fim: `no page errors`. Linhas `FAIL` indicam passo de teste quebrado.
Variáveis: `PW` (caminho do playwright), `CHROME` (executável do Chrome). Capturas de tela vão para `/tmp`.
