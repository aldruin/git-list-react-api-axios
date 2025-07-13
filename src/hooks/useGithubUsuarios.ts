import { useState, useEffect } from 'react';
import axios from 'axios';
import { buscarUsuarios } from '../services/githubServices';
import type { Usuario } from '../types/usuario';

export function useGithubUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    async function carregar() {
      try {
        const data: Usuario[] = await buscarUsuarios(pagina);
        setUsuarios(data.sort((a, b) => a.login.localeCompare(b.login)));
      } catch (e: any) {
        setErro(e.message);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, [pagina]);

  return { usuarios, loading, erro, pagina, setPagina };
}