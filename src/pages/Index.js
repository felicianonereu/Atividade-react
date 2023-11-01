import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';

const Index = () => {
  return (
    <>
        <Header />
        <div className="mx-auto w-full max-w-4xl p-4 bg-slate-900 text-white">
            <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Bem-vindo ao "MEUS JOGOS"</h1>
            <p className="text-lg mb-4">
                Aqui você pode cadastrar e organizar sua coleção de jogos.
            </p>
            <div className="flex justify-center">
                <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/6fILxnBH1Tg?si=psqEp1tRM0UVdJPY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
            </div>
            </div>
        </div>
    </>
  );
};

export default Index;
