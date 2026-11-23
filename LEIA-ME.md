# Retorno pela Morte — pacote para celular (PWA)

Esta pasta é o jogo pronto para ser hospedado e instalado na tela inicial do Android, com jogo offline.

## 1) Hospedar (escolha UMA opção)

### Opção A — Netlify (mais fácil, sem conta de programador)
1. Entre em https://app.netlify.com/drop (crie uma conta grátis).
2. Arraste esta pasta inteira (ou o .zip descompactado) para a página.
3. Você recebe um link `https://nome-aleatorio.netlify.app`. Em "Site configuration" você pode trocar o nome.
4. Para atualizar depois: abra o site no Netlify, aba "Deploys", e arraste a pasta nova. O link continua o mesmo.

### Opção B — GitHub Pages (atualização automática com o Claude)
1. Crie um repositório público no GitHub (por exemplo `retorno-pela-morte`) e envie o conteúdo desta pasta para ele.
2. Em Settings > Pages, escolha "Deploy from a branch", branch `main`, pasta `/ (root)`.
3. O link será `https://SEU-USUARIO.github.io/retorno-pela-morte/`.
4. Para o Claude atualizar sozinho a cada versão, conecte o GitHub em claude.ai > Configurações > Conectores e dê acesso a esse repositório.

## 2) Instalar na tela inicial (Android)
1. Abra o link no **Chrome** do celular.
2. Toque nos três pontinhos > **Instalar app** (ou **Adicionar à tela inicial**).
3. Abra o jogo uma vez com internet para ele se salvar. Depois funciona sem internet.

## 3) Como as atualizações chegam
- Com internet, ao abrir o jogo ele busca a versão mais nova sozinho.
- Sem internet (ou com conexão muito lenta), ele abre a última versão salva.
- Seus saves ficam no celular e não se perdem nas atualizações, **desde que o link (endereço) seja sempre o mesmo**. Trocar de hospedagem ou de link cria um jogo "novo", sem os saves antigos.

## 4) APK (opcional)
Com o jogo hospedado, vá em https://www.pwabuilder.com, cole o link e escolha Android. Ele gera um APK que abre o mesmo link (portanto também atualiza sozinho). Para instalar um APK fora da Play Store, ative "instalar apps desconhecidos" no Android.

## Observações
- É um jogo de fãs, gratuito e sem venda. Não use anúncios nem cobrança.
- As fontes bonitas (Karla e Marcellus) vêm do Google Fonts; sem internet na primeira abertura o jogo usa fontes do sistema.
