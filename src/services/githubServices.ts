import axios from 'axios';

export async function buscarUsuarios(pagina?: number) {
  try {
    const url = pagina ? `https://api.github.com/search/users?q=dev&per_page=10&page=${pagina}`
      : 'https://api.github.com/users';
    const res = await axios.get(url);
    const data = pagina ? res.data.items : res.data;
    return data;
  } catch (e) {
    console.error('Erro ao buscar usuários:', e);
    throw e;
  }
}