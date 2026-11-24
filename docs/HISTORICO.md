# Histórico de versões

## 2026-11-24 — Atualização 16: ninguém aparece antes da hora
- `CHAR_ARC` / `CHAR_RE`: cada personagem só aparece a partir do arco em que entra na história (Retornos e Modo Livre): pessoas no mapa, aliados nas lutas, cartas comuns e globais do Retornos, atividades, eventos e eventos de vida.
- Modo Livre segue a história: `arcReach` não tem mais mínimo de Arco 2. No Arco 1 o cenário é a Capital (Mansão, Irlam, floresta e caverna passam para o Arco 2); Subaru dorme num canto do depósito de Rom; Emilia e Felt aparecem na Capital; atividades neutras da casa acontecem na Capital.
- Rem, Ram e Beatrice passam a ser do Arco 2; torneio só a partir do Arco 3.

## 2026-11-24 — Atualização 15: marcos canônicos, reinício completo e Retornos mais longo
- Romance depende de momentos canônicos vividos no Retornos (`CREQ`, `PF.canon`): Emilia (promessa no Arco 3 + beijo no Santuário no Arco 4), Rem (recomeçar do zero no Arco 3; adormecida do fim do Arco 3 até despertar no Arco 7), Ram (dizer que ela pode escolher a própria vida, Arco 4), Beatrice (contrato, Arco 4), Crusch (aliança na caçada, Arco 3), Anastasia (Arco 5), Priscilla (Arco 7).
- Cartas novas: `a4_ram`, `a4_kiss`, `a7_rem`. Saves antigos que já passaram desses arcos recebem os marcos implícitos.
- "Recomeçar tudo" apaga Retornos, Modo Livre e perfil (mantém conquistas e galeria).
- Retornos: 3 a 5 cartas comuns entre momentos da história, medidores começam entre 42 e 58, efeito elástico perto dos extremos, 24 situações novas do dia a dia e cartas que corrigem medidores perigosos.

## 2026-11-24 — Atualização 14: Modo Livre ligado à história
- Inimigos usam um **poder de referência por nível** (`refPow`), não copiam mais o baralho do jogador: evoluir no Modo Livre torna os chefes da história mais fáceis.
- Chefes da história com nível fixo por arco (2 + 3×arco + 2); o Retornos não ajusta mais o nível ao jogador.
- Limites pelo arco alcançado no Retornos: nível (8/12/16/20/25/30/35/40), atributos (3 + 3×arco), laços (Amigos no Arco 1 … Inseparáveis no Arco 5), namoro no Arco 3, noivado no 5, casamento no 6, filhos no 7. Progresso antigo acima do limite é mantido.
- Bônus de mortes com teto (+3), antes ilimitado.
- Painel "Próxima batalha da história" com poder do jogador × recomendado; o mesmo aviso aparece nas lutas contra chefes.
- Imperio (Arco 7) virou super chefe; ajustes de traços de Baleia, Regulus, Garfiel, Reid e Sphinx.

## 2026-11-24 — Relógio de horas e comércio (Atualização 13)
- Relógio sem limite com cansaço, madrugada, dormir tarde e desmaio às 07:00.
- Viagens em horas, viagem noturna com emboscadas.
- Comércio entre 12 cidades com 10 mercadorias.

## 2026-11-24 — Cônjuge em casa
- Morando juntos, o par fica na casa do casal à tarde/noite e muitas manhãs.

## 2026-11-24 — Atualização 11
- Torneio semanal na Capital, decoração das moradias (10 móveis), cartas lendárias com essências de super chefes. Julius e Wilhelm viram super chefes.

## 2026-11-24 — Atualização 10
- Animações de batalha, bestiário, 13 missões secundárias, sinergias com relacionamentos, 7 ações a dois, filhos.

## 2026-11-23 — Viagens por regiões
- Custo de viagem por regiões (substituído pelas horas na Atualização 13).

## 2026-11-23 — Atualização 8
- Rebalanceamento total das batalhas (vida e golpes adaptados ao baralho do jogador), super chefes canônicos com traços e fase 2, aprendizado por morte.
- Masmorras de 8 a 16 andares com mobs por ambiente e variações aleatórias.
- Bug corrigido: dormir sempre acordava na Mansão. Moradias em várias cidades.
- Vilas novas (Pedraferro, Liphas, Ribeirinha, Guaral), mapa maior em escala, Salão dos Ecos.
- Tela inicial só com Modo Retornos e Modo Livre.
- Correções: barra de vida invisível na batalha, toast deformado, texto de derrota.

## 2026-11-23 — Publicação
- GitHub Pages ativado (branch `main`, raiz). Pacote PWA (manifest, service worker, ícones).
