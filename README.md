# Ação Fábio — linha histórica dos fatos

Memorial visual estático e probatório para auxiliar a leitura da petição inicial de Fábio Regis de Carvalho x Premium.

## Princípios

- fatos separados de inferências e pontos ainda sujeitos à instrução;
- nenhuma imputação criminal;
- documentos-fonte permanecem fora do repositório público;
- somente recortes estritamente necessários e sem dados pessoais sensíveis;
- `noindex`, `nofollow` e cabeçalhos de privacidade;
- sem analytics, cookies ou coleta de dados;
- HTML sem dependências externas, com fallback sem JavaScript e `prefers-reduced-motion`.

## Estrutura

- `index.html`: narrativa e visual law;
- `styles.css`: sistema editorial responsivo e impressão;
- `motion.js`: progressive enhancement, scroll progress, chapter rail, filtros e lightbox;
- `assets/`: recortes documentais sanitizados;
- `vercel.json`: headers de segurança e privacidade.

## QA local

```bash
python3 -m http.server 4173
```

Abrir `http://localhost:4173` e validar desktop, mobile, reduced motion, impressão e navegação por teclado.
