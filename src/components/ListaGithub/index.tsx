import { useEffect, useState } from 'react';
import './ListaGithub.css';
import { useGithubUsuarios } from '../../hooks/useGithubUsuarios';


export default function ListaGithub() {
  const { usuarios, loading, erro, pagina, setPagina } = useGithubUsuarios();

  if (loading) return <p>Carregando...</p>;
  if (erro) return <p style={{ color: 'red' }}>{erro}</p>;

  return (
    <div>
      <h2> Usuários Github</h2>
      <ul>
        {usuarios.map((user) => (
          <li key={user.id} style={{ display: 'flex', alignItems: 'center' }}>
            <img src={user.avatar_url} width={50} style={{ borderRadius: '50%' }} alt='Foto de perfil do usuário' />
            {user.login}
          </li>
        ))}
      </ul>

      <button disabled={pagina === 1} onClick={() => setPagina((prev) => Math.max(prev - 1, 1))} style={{ opacity: pagina === 1 ? 0.5 : 1 }}>Anterior</button>
      <span style={{ margin: '0 1rem' }}>Página {pagina}</span>
      <button onClick={() => setPagina((prev) => prev + 1)}>Próxima</button>
    </div>
  )
}