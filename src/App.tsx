import React, { useState, useEffect } from 'react';
import { CarrinhoProvider } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Categories from '@/components/Categories';
import MenuSection from '@/components/Menu/MenuSection';
import CartModal from '@/components/modals/CartModal';
import AboutModal from '@/components/modals/AboutModal';
import ComandaModal from '@/components/modals/ComandaModal';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('popular');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isComandaOpen, setIsComandaOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('bg-background');
  }, []);

  return (
    <CarrinhoProvider>
      <div className="min-h-screen text-text pt-14 pb-28">
        <Header
          openCart={() => setIsCartOpen(true)}
          openAboutModal={() => setIsAboutOpen(true)}
          openComandaModal={() => setIsComandaOpen(true)} // ← ESSA LINHA FALTAVA
        />

        <Categories
          categoriaSelecionada={selectedCategory}
          definirCategoriaSelecionada={setSelectedCategory}
        />

        <MenuSection categoriaId={selectedCategory} />

        {/* Modais */}
        <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
        <ComandaModal isOpen={isComandaOpen} onClose={() => setIsComandaOpen(false)} />
      </div>
    </CarrinhoProvider>
  );
}