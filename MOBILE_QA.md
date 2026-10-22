# Revisão móvel
## Escopo
Revisão do código na branch main e ajustes preventivos de navegação e carregamento.
Não foi possível executar o navegador, acessar o domínio ou gerar relatório PageSpeed neste ambiente. Não há nota Lighthouse ou medição de Core Web Vitals nesta revisão.
## Corrigido
- Campos de formulário com fonte de 16 px em telas pequenas.
- Cabeçalho com espaçamento menor em telas estreitas e botão de menu com área mínima de 44 px.
- Menu aberto com altura limitada à tela e rolagem interna.
- Fechamento do menu ao tocar fora ou passar para a visualização de computador.
- Rótulo acessível do menu acompanha aberto/fechado; Escape devolve foco ao botão quando necessário.
- Melhor quebra de textos e botões em telas muito estreitas.
- Prints do portfólio são solicitados apenas quando o cartão se aproxima da tela. Como os arquivos ainda não foram enviados, controles de imagem permanecem ocultos quando há falha.
- Animações pausam fora da área visível ou quando a página fica em segundo plano, preservando a pausa manual e a preferência por movimento reduzido.
- Links de navegação das páginas de serviços com área mínima para toque.
## Verificado localmente
Sintaxe dos scripts inline e externos, IDs únicos e configuração do carregamento adiado. Em teste isolado, nenhuma imagem foi solicitada antes da aproximação da tela, o carregamento bem-sucedido revelou o botão e uma falha manteve o botão oculto.
Essas verificações não substituem o teste em navegador.
## Pendente na versão publicada
1. Reimplantar na Hostinger.
2. Testar larguras de 320, 360, 390, 430 e 768 px; verificar rolagem lateral, menu, formulário, botões e galerias.
3. Testar Safari no iPhone e Chrome no Android.
4. Executar PageSpeed Insights com o domínio publicado, em celular e computador.
5. Medir LCP, INP e CLS quando houver dados disponíveis.
6. Otimizar o arquivo logo-zeroum.png: tamanho no repositório de 1.197.589 bytes. Os bytes da imagem não puderam ser obtidos nesta sessão, então não foi criada uma versão comprimida.
7. Enviar os cinco prints conforme public/assets/sites/README.md e confirmar a ampliação.
