# SEO da ZeroUm Digital
## Implementado
- Página inicial com título e descrição locais, identificação da agência e oito links de serviços.
- Oito páginas HTML independentes em /servicos/<servico>/, com título, descrição, canonical, conteúdo e perguntas próprias.
- Dados estruturados Organization, Person, WebSite/WebPage, Service e BreadcrumbList conforme a página.
- robots.txt e sitemap.xml publicados pelo diretório public do Vite.
- Build multipágina configurado em vite.config.js; não depende de renderização por JavaScript para ler o conteúdo.
- Evento local whatsapp_click em window.dataLayer e zeroum:whatsapp-click no document.
O evento registra apenas página e identificação do botão. Não é um orçamento recebido nem uma venda.
Nenhuma ferramenta externa de analytics foi instalada; os eventos sozinhos não geram um painel ou histórico persistente.
## Depois da implantação
1. Confirmar HTTPS e HTTP 200 em /, /robots.txt, /sitemap.xml e nas oito páginas.
2. Conferir que cada URL termina na sua página correta e não retorna a inicial como fallback.
3. Verificar a propriedade de domínio no Google Search Console usando o registro DNS fornecido pela conta.
4. Enviar sitemap.xml e inspecionar as URLs. Indexação não é garantida.
5. Validar JSON-LD no Schema Markup Validator e recursos elegíveis no Rich Results Test. Organization/Service não garantem resultados especiais. FAQ não foi marcado como resultado enriquecido.
6. Medir páginas no PageSpeed Insights em celular e computador; corrigir problemas observados, sem presumir uma nota.
7. Confirmar dados do Perfil da Empresa no Google, especialmente endereço, horários e categorias. Endereço confirmado pelo proprietário: Rua Valdomiro Lopes, 750, Conquista, CEP 69918-764, Rio Branco–AC. Horários ainda não informados.
8. Conectar analytics ou gerenciador de tags, após definir conta e requisitos de privacidade, para coletar whatsapp_click. Distinguir cliques de contatos efetivos e vendas.
## Próximos conteúdos
Preparar estudos de caso com autorização dos clientes. Descrever problema, escopo, processo, entregas e resultados verificáveis. Não inventar números ou depoimentos.
Publicar exemplos próprios e úteis antes de ampliar o número de páginas. Não criar páginas quase iguais por cidade ou variação de palavra-chave.
## Limites
Nenhum acesso ao Search Console, DNS, Perfil da Empresa ou painel de analytics foi configurado nesta alteração.
Não há garantia de posições ou citações em respostas de IA.

## Verificação desta alteração
Validados localmente: 9 páginas, H1, títulos, descriptions, canonical, JSON-LD, links e âncoras internos, referências de assets, sitemap e sintaxe de JavaScript/configuração.
Build Vite não executado: dependência indisponível no cache e rede local sem resolução de nomes. Conferência visual também indisponível por falha ao iniciar o navegador. Confirmar build e aparência na implantação.

## Rodapé e identificação local
Rodapé compartilhado nas nove páginas, com endereço confirmado, WhatsApp, telefone, consulta de localização no Google Maps, serviços, navegação institucional e redes oficiais. Endereço PostalAddress também incluído na organização em JSON-LD. O link abre uma pesquisa do endereço no Maps; não representa um Perfil da Empresa verificado. E-mail, CNPJ, razão social e horários não foram inventados.
