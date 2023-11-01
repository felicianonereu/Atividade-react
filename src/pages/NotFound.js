import React, { useState, useEffect } from 'react';
import Header from './Header.js';

const NotFound = () => {

  return (
    <>
        <Header />
        <main className="mx-auto w-full max-w-4xl">
            <div className="relative z-0 w-full mb-6 group">
                <img 
                    className='mx-auto mt-16 h-64' 
                    src="https://preview.redd.it/dovahkiin-dragonborn-from-skyrim-v0-fc3lal9ybuqa1.png?width=640&crop=smart&auto=webp&s=269f004d89c9957145614031f5b68ca8d1bf521a" 
                    alt="Dovahkiin" 
                />
                <h1 className="text-4xl font-black text-white text-center mt-8">Página não encontrada</h1>
            </div>
        </main>
    </>
  );
}

export default NotFound;