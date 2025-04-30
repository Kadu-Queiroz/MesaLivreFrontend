import React, { useState, useEffect } from 'react';
import { CarrinhoProvider } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Categories from '@/components/Categories';
import MenuSection from '@/components/Menu/MenuSection';
import Cart from '@/components/Cart';

export default function App() {
  const [categoriaSelecionada, definirCategoriaSelecionada] = useState('popular');
  const [carrinhoAberto, definirCarrinhoAberto] = useState(false);

  useEffect(() => {
    document.body.classList.add('bg-background');
  }, []);

  return (
    <CarrinhoProvider>
      <div className="min-h-screen text-text pb-28">
        <Header openCart={() => definirCarrinhoAberto(true)} />
        <Categories
          categoriaSelecionada={categoriaSelecionada}
          definirCategoriaSelecionada={definirCategoriaSelecionada}
        />
        <MenuSection categoriaId={categoriaSelecionada} />
        <Cart isOpen={carrinhoAberto} onClose={() => definirCarrinhoAberto(false)} />
      </div>
    </CarrinhoProvider>
  );
}