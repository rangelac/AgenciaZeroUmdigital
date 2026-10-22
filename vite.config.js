import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({
 build: {
  rollupOptions: {
   input: {
  "home": resolve(process.cwd(), 'index.html'),
  "gestao-de-redes-sociais-rio-branco": resolve(process.cwd(), 'servicos/gestao-de-redes-sociais-rio-branco/index.html'),
  "trafego-pago-rio-branco": resolve(process.cwd(), 'servicos/trafego-pago-rio-branco/index.html'),
  "criacao-de-sites-rio-branco": resolve(process.cwd(), 'servicos/criacao-de-sites-rio-branco/index.html'),
  "producao-audiovisual-rio-branco": resolve(process.cwd(), 'servicos/producao-audiovisual-rio-branco/index.html'),
  "filmagem-drone-rio-branco": resolve(process.cwd(), 'servicos/filmagem-drone-rio-branco/index.html'),
  "cobertura-eventos-rio-branco": resolve(process.cwd(), 'servicos/cobertura-eventos-rio-branco/index.html'),
  "cortes-de-podcast": resolve(process.cwd(), 'servicos/cortes-de-podcast/index.html'),
  "sistemas-automacoes-acre": resolve(process.cwd(), 'servicos/sistemas-automacoes-acre/index.html')
}
  }
 }
});
