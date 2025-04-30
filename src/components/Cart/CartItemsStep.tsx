import React from 'react';
import { useCarrinho } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import CartItem from './CartItem';

export default function CartItemsStep() {
  const { itens } = useCarrinho();
  const navigate = useNavigate();

  if (itens.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="bg-[#495057]/20 p-6 rounded-full mb-4">
          <ShoppingCart className="w-16 h-16 text-[#495057]" />
        </div>
        <p className="text-[#F8F9FA] text-lg font-medium mb-2">
          Seu carrinho está vazio
        </p>
        <p className="text-[#495057] mb-6">
          Adicione algum item gostoso para começar
        </p>
        <button
          type="button"
          aria-label="Voltar para o menu"
          className="text-[#E63946] font-medium"
          onClick={() => navigate('/')}
        >
          Voltar ao menu
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {itens.map(item => (
        <CartItem key={item.item.id} item={item} />
      ))}
    </div>
  );
}