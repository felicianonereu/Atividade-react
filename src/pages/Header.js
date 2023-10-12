import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <Link to="/" className="text-gray-800 mr-4">
            <div className="flex items-center">
                <img src="https://img.icons8.com/color/48/sega-mega-cd-system.png" alt="Logo" className="h-8 w-8 mr-2"
                />
                <h1 className="text-2xl font-semibold text-black">MEUS JOGOS</h1>
            </div>
            </Link>
        <div className="flex space-x-4">
            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <img src="https://img.icons8.com/ios-filled/24/home.png" alt="Home" className="inline-block" />
                <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
            </Link>
            <Link to="/cadastro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <img src="https://img.icons8.com/ios-filled/24/ps-controller.png" alt="Novo Jogo" className="inline-block" />
                <span className="flex-1 ml-3 whitespace-nowrap">Novo Jogo</span>
            </Link>
            <Link to="/lista" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <img src="https://img.icons8.com/ios-filled/24/list.png" alt="Lista de Jogos" className="inline-block" />
                <span className="flex-1 ml-3 whitespace-nowrap">Lista de Jogos</span>
            </Link>
        </div>
    </header>
  );
};

export default Header;
