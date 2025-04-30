import React, { useState } from 'react';
import { Plus, Check, Flame } from 'lucide-react';
import { ItemMenu } from '@/types';
import { useCarrinho } from '@/context/CartContext';

interface Props {
  item: ItemMenu;
}

export default function MenuItem({ item }: Props) {
  const { adicionarItem } = useCarrinho();
  const [adicionado, setAdicionado] = useState(false);

  const formatarPreco = (valor: number) => `R$ ${valor.toFixed(2).replace('.', ',')}`;

  const handleAdicionar = () => {
    adicionarItem(item);
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 1000);
  };

  return (
    <div className="bg-background rounded-lg overflow-hidden shadow-md relative mb-3 w-full max-w-md mx-auto">
      {/* Imagem do item */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={item.imagem}
          alt={item.nome}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Conteúdo do card */}
      <div className="p-3 pt-2">
        <div className="flex justify-between items-start relative">
          <div className="pr-2">
            <h3 className="text-text font-bold text-lg">{item.nome}</h3>
            <p className="text-text/70 text-sm mb-1">{item.descricao}</p>
          </div>

          {/* Botão de adicionar */}
          <button
            className={`rounded-full w-10 h-10 flex items-center justify-center shadow-lg transform transition duration-200 
              ${adicionado ? 'bg-secondary/80' : 'bg-primary'} 
              hover:scale-105 active:scale-95`}
            onClick={handleAdicionar}
            aria-label={`Adicionar ${item.nome} à comanda`}
          >
            {adicionado ? <Check size={20} /> : <Plus size={20} />}
          </button>

          {/* Badge temporário */}
          {adicionado && (
            <span className="absolute -top-5 right-0 text-[10px] bg-secondary text-white px-2 py-0.5 rounded-full shadow-sm animate-fadeOut">
              Adicionado!
            </span>
          )}
        </div>

        <div className="flex justify-between items-center mt-1">
          <span className="text-text font-bold text-lg">{formatarPreco(item.preco)}</span>

          {/* Indicador de popularidade */}
          {item.popularidade > 90 && (
            <span className="flex items-center gap-1 text-secondary text-xs font-medium bg-secondary/10 px-2 py-1 rounded-full">
              <Flame size={14} />
              Mais pedido
            </span>
          )}
        </div>
      </div>
    </div>
  );
}