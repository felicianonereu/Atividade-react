import React, { useState } from 'react';
import Header from './Header.js';

const CadastroJogo = () => {
  const [name, setName] = useState('');
  const [platform, setPlatform] = useState('');
  const [genre, setGenre] = useState('');
  const [release_year, setReleaseYear] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();

    if (name && platform && genre && release_year) {
      const jogo = {
        name,
        platform,
        genre,
        release_year,
      };

      fetch('http://localhost:3002/game', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jogo),
      })
        .then((response) => {
          if (response.status === 200) {
            setName('');
            setPlatform('');
            setGenre('');
            setReleaseYear('');
            alert('Jogo cadastrado com sucesso.');
          } else {
            alert('Erro ao cadastrar o jogo.');
          }
        })
        .catch((error) => {
          alert('Erro ao cadastrar o jogo.');
        });
    } else {
      alert('Por favor, preencha todos os campos antes de cadastrar o jogo.');
    }
  };

  return (
    <>
      <Header />
      <div className="mx-auto w-full max-w-4xl p-4 bg-slate-900 text-white">
        <h1 className="text-2xl font-semibold mb-4">Novo Jogo</h1>
        <form onSubmit={handleCadastro}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Nome do Jogo</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Plataforma</label>
            <select
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-black"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            >
              <option value="">Selecione a Plataforma</option>
              <option value="PS1">PS1</option>
              <option value="PS2">PS2</option>
              <option value="PS3">PS3</option>
              <option value="PS4">PS4</option>
              <option value="PS5">PS5</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Gênero</label>
            <select
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-black"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="">Selecione o Gênero</option>
              <option value="Ação">Ação</option>
              <option value="Aventura">Aventura</option>
              <option value="Esportes">Esportes</option>
              <option value="RPG">RPG</option>
              <option value="Estratégia">Estratégia</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Ano de Lançamento</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-black"
              value={release_year}
              onChange={(e) => setReleaseYear(e.target.value)}
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-green-400 to-green-700 px-16 py-2"
              onClick={() => {
                window.history.back();
              }}
            >
              Voltar
            </button>
            <button
              type="submit"
              className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 px-16 py-2"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CadastroJogo;
