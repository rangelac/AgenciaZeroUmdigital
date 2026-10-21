# Publicar na Hostinger

O projeto possui package.json na raiz e usa Vite para gerar o site estático em dist. Essa configuração permite importar o repositório pela opção Web App / GitHub da Hostinger.

- Branch: main
- Diretório raiz: raiz do repositório (./)
- Framework: Vite
- Node.js: 24.x
- Gerenciador: npm
- Instalação: npm install
- Build: npm run build
- Diretório de saída: dist
- Variáveis de ambiente: nenhuma necessária

Não é preciso configurar servidor Express ou comando de início de backend: a saída é estática.

Depois de atualizar a tela da Hostinger, selecione novamente o repositório e confira os parâmetros acima. O deploy só estará confirmado quando a Hostinger indicar conclusão e a URL abrir corretamente.

## Verificação local

npm install
npm run build
npm run preview

A instalação e o build com dependências ainda precisam ser executados em ambiente com acesso à rede. O ambiente de criação teve restrições de rede. O HTML também continua podendo ser publicado diretamente em uma hospedagem HTML tradicional.
