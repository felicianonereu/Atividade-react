import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const ListaJogos = () => {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    const jogosSalvos = JSON.parse(localStorage.getItem('jogos')) || [];
    setJogos(jogosSalvos);
  }, []);

  const handleExcluir = (id) => {
    const novosJogos = jogos.filter((jogo) => jogo.id !== id);
    setJogos(novosJogos);
    localStorage.setItem('jogos', JSON.stringify(novosJogos));
  };

  return (
    <>
      <Header />
      <div className="mx-auto w-full max-w-4xl p-4 bg-slate-900 text-white">
        <h1 className="text-2xl font-semibold mb-4">Lista de Jogos</h1>
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs uppercase bg-white">
              <tr>
                  <th scope="col" className="px-6 py-3">
                    Nome do Jogo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Plataforma
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gênero
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ano de Lançamento
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Editar
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Excluir
                  </th>
              </tr>
          </thead>
          <tbody>
          {jogos.map((jogo) => (
            <tr className="bg-white hover:bg-gray-50" >
              <th scope="col" className="px-6 py-3">
                {jogo.nome}
              </th>
              <th scope="col" className="px-6 py-3">
                {jogo.plataforma}
              </th>
              <th scope="col" className="px-6 py-3">
                {jogo.genero}
              </th>
              <th scope="col" className="px-6 py-3">
                {jogo.anoLancamento}
              </th>
              <th scope="col" className="px-6 py-3">
                <Link 
                  to={`/editar/${jogo.id}`} 
                  className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 px-16 py-2"
                >
                  Editar
                </Link>
              </th>
              <th scope="col" className="px-6 py-3">
                <button 
                  onClick={() => handleExcluir(jogo.id)} 
                  className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-red-500 to-orange-500 px-16 py-2"
                >
                  Excluir
                </button>
              </th>
            </tr>
          ))}
          </tbody>
        </table>
        <button
          type="submit"
          className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-green-400 to-green-700 mt-4 px-16 py-2"
          onClick={() => {
            window.history.back();
          }}
        >
          Voltar
        </button>
      </div>
    </>
  );
};

export default ListaJogos;
