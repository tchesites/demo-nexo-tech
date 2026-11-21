// Prefixa caminhos internos com a base do site (`import.meta.env.BASE_URL`).
//
// O demo fica em `https://tchesites.github.io/demo-nexo-tech/`, então todo
// link interno precisa do prefixo `/demo-nexo-tech`. Use sempre
// `url('/caminho/')` em `href` e `src`.

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '/') => `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
