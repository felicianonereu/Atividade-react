import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Index from './pages/Index.js';
import CadastroJogo from './pages/CadastroJogo.js';
import EditarJogo from './pages/EditarJogo.js';
import ListaJogo from './pages/ListaJogo.js';
import NotFound from './pages/NotFound.js';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/cadastro" element={<CadastroJogo />} />
      <Route path="/editar/:id" element={<EditarJogo />} />
      <Route path="/lista" element={<ListaJogo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);