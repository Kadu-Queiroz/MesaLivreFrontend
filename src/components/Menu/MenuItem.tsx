import React from 'react';
import { Plus } from 'lucide-react';
import { ItemMenu } from '@/types';
import { useCarrinho } from '@/context/CartContext';

interface Props {
  item: ItemMenu;
}

export default function MenuItem({ item }: Props) {
  const { adicionarItem } = useCarrinho();

  const formatarPreco = (valor: number) => {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
  };

  return (
    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-md relative mb-3 w-full max-w-md mx-auto">
      <div className="relative h-40 overflow-hidden">
        <img
          src={item.imagem}
          alt={item.nome}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
      </div>

      <div className="p-3 pt-2">
        <div className="flex justify-between items-start">
          <div className="pr-2">
            <h3 className="text-white font-bold text-lg">{item.nome}</h3>
            <p className="text-white/70 text-sm mb-1">{item.descricao}</p>
          </div>

          <button
            className="bg-[#E63946] text-white rounded-full w-10 h-10 flex items-center justify-center
                       shadow-lg transform transition duration-200 hover:scale-105 active:scale-95"
            onClick={() => adicionarItem(item)}
            aria-label={`Adicionar ${item.nome} ao carrinho`}
          >
            <Plus size={20} />
          </button>
        </div>

        <div className="flex justify-between items-center mt-1">
          <span className="text-white font-bold text-lg">{formatarPreco(item.preco)}</span>
          <div className="flex space-x-1" title={`Popularidade: ${item.popularidade}%`}>
            {Array.from({ length: Math.min(5, Math.floor(item.popularidade / 20)) }).map((_, i) => (
              <span key={i} className="text-[#E63946] text-xs" aria-hidden="true">★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}