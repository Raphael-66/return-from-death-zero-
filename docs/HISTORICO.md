# Histórico de versões

## 2026-11-25 — Atualização 21: negócios e backup
- Negócios: foco de produção (`FOCO`: equilibrado, volume, qualidade), equipe (`STAFF`: vendedor que vende sozinho com 15% de comissão, supervisor +20%, guarda contra roubo), gerentes canônicos (`MGR`: Felt, Petra, Ram, Otto, Anastasia, Frederica, respeitando o arco), eventos diários (`BEV`), relatório da manhã (`PF.bizRep`), histórico de 7 dias com gráfico e lucro total (`PF.bizTot`).
- 4 comércios novos que produzem mercadorias de rota num armazém (Peixaria, Serraria, Veio arrendado, Vinícola), carregáveis na carroça para o comércio entre cidades.
- Backup em Ajustes: baixar arquivo, copiar código, restaurar de arquivo ou código (todas as chaves `rpm_*`).
- Mobbin (conector) exige plano pago: não foi usado.

## 2026-11-24 — Atualização 20: pesca nova
- 13 pontos de pesca, um por lugar do mapa (`FSPOT`/`SPOTS` com `place`), 88 espécies (7 a 10 por lugar), com comportamento (`b`: mixed, smooth, dart, sinker, floater), horário (`tm`), estação (`se`) e chuva (`rain`).
- Minijogo inspirado em Stardew Valley: barra de força no lançamento (lançamentos fortes atraem raros), fisgada, barra vertical com física (segurar sobe, soltar cai), medidor de captura, baú de tesouro e captura perfeita (bônus em moedas).
- Modo Livre: pesca no lugar onde você está (ação "Pescar" no mapa, categoria Pesca), 30 min por lançamento, sem limite de tentativas. Retornos: escolhe o ponto pelos arcos alcançados, com tentativas limitadas.
- Diário de pesca agrupado por lugar, com raridade, comportamento e condições. Conquistas novas.
- Calibração em `tests/fish_sim.js` (jogador simulado com reação humana).

## 2026-11-24 — Troca rápida de modo
- Botão "⇄" no lugar do título, no hub do Modo Livre e no topo do Retornos (`modeBtn`), trocando direto de modo (salva antes). Corrige o título "Modo Livre" cortado no topo.

## 2026-11-24 — Atualização 18: interface em gavetas
- Hub do Modo Livre reorganizado em gavetas (`hubDrawers`, estado em `PF.ui.open`), sem remover nada: cartão do dia com botão Dormir e ajuda recolhida; ações do lugar agrupadas (Explorar e lutar, Onde dormir e morar, Comércio e serviços, Missões, Festival); Pessoas aqui; Atividades com subgavetas (Vínculos, Treino, Mente, Vida, Da IA, Preparar o próximo Retorno, Especiais); Vida, casa e relacionamentos; Serviços da cidade; Perfil, história e poder (com indicador de poder no título).
- Menu com 4 categorias (Subaru, Pessoas, Mundo, Jogo) e abas dentro de cada uma (`MGROUP`).
- Correção: botão do Torneio era substituído por um Comércio duplicado (variável capturada errada na Atualização 16).

## 2026-11-24 — Atualização 17: grupo de batalha, caçadas lendárias e aliados canônicos
- Baralhos de parceiro para Felt, Reinhard, Crusch, Wilhelm, Ferris, Julius, Priscilla, Anastasia, Otto, Garfiel, Frederica, Al, Vincent e Roswaal.
- Modo Retornos: aliados fiéis ao cânone em cada batalha (Elsa: Emilia e Felt; lobos: Rem e Ram; Baleia: Rem, Crusch, Wilhelm, Ferris; Petelgeuse: Julius, Wilhelm, Ferris; Garfiel: Otto e Ram; Regulus: Emilia e Reinhard; Reid: Julius e Emilia; Império: Rem, Al, Vincent; Sphinx: Emilia, Beatrice, Ram). Provas e emboscadas usam o grupo do arco (`ARCALLY`).
- Modo Livre: "Grupo de batalha" (até 3 parceiros, ou automático) vale em caçadas, masmorras, ecos, torneio e covis (`PF.party`).
- Caçadas lendárias (`LH`): 7 feras (Garmr, Fênix Cinzenta, Grande Coelho, Hidra, Escorpião Imperador, Dragão de Geada, Serpente Negra); aceitar na Guilda, rastrear explorando 2×, covil com 2 guardiões + lendário; ameaça cresce a cada abate; volta em 7 dias.
- Ajustes: Baleia sem regeneração na fase 1, Regulus com proteção 3, Sphinx regeneração 4, chefes dos Arcos 6–8 mais duros (`mul`).

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

## Atualização 22 — refinamentos
- Dicas de primeira vez (Modo Livre, Retornos, batalha, noite, pesca, negócios, comércio, masmorra, grupo). Botões "Entendi" e "Desligar dicas"; em Ajustes dá para religar e rever.
- Backup automático: ao dormir no Modo Livre e ao fim de cada arco, até 3 cópias em `rpm_bak` (a mais recente é substituída se tiver menos de 10 min). Restaurar em Ajustes.
- Aviso de versão nova: quando o service worker troca, aparece a barra "Nova versão do jogo instalada · tocar para atualizar". O registro checa atualização a cada 30 min.
- Perfil em gavetas: Atributos (com resumo) e "Como evoluir"; título com pontos livres da árvore.
- Teste: `tests/v22_refino.js`.

## Atualização 23 — acabamento premium
- **Guarda de spoilers**: nomes de personagens de arcos futuros viram "???" nos menus (Romance, Loja, Relíquias, Missões, Conquistas...). Barras de Vínculos de quem ainda não apareceu somem, itens do Mercado com esses nomes não são vendidos e a Galeria só lista quem já entrou. Corrigido: Vínculos do Modo Livre mostrava Rem, Ram e Beatrice no Arco 1.
- **Medidor de perfeição**: porcentagem geral (história, conquistas, códice, bestiário, pesca, missões, vínculos, lendárias, negócios, cartas lidas), no topo de Conquistas e na tela inicial. Conquistas de 25%, 50% e 100%.
- **Linha do tempo dos retornos**: cada morte nos Retornos ganha um apelido ("Subaru, o Exausto") e quantas cartas durou. Aparece na tela de morte e no Códice, com o retorno mais longo em destaque.
- **Correio da manhã** (Modo Livre): cartas de amigos (por arco e relação), cônjuge, filhos, resumo semanal dos negócios, aviso de festival e aniversários. Algumas trazem moedas, chá, XP ou relação.
- **Aniversários** no calendário do jogo: presente no dia vale o triplo (uma vez por ano). Aparecem no mapa e na aba Mundo › Calendário.
- **Som**: trilha ambiente gerada no aparelho (Web Audio, sem arquivos), com humor para título, dia, noite, pesca, Retornos e batalha; efeitos sonoros refeitos. Ajustes: música, volume e "menos movimento".
- **Visual**: tela inicial nova (cartões de modo, partículas, selo de perfeição), transições entre telas e abas, menu com cabeçalho fixo e botão Fechar sempre visível, emblema animado do inimigo e histórico curto na batalha, avisos com vidro fosco, nota da carta legível em qualquer fundo, "−0" dos negócios corrigido.
- **Offline**: o service worker guarda as fontes na primeira visita.
- Teste: `tests/v23_premium.js`.
