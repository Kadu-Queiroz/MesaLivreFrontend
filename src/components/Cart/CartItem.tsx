import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { ItemCarrinho } from '@/types';
import { useCarrinho } from '@/context/CartContext';

interface PropsItemCarrinho {
  item: ItemCarrinho;
}

export default function CartItem({ item }: PropsItemCarrinho) {
  const { atualizarQuantidade, removerItem, adicionarNota } = useCarrinho();
  const [mostrarNotas, definirMostrarNotas] = useState(false);
  const [nota, definirNota] = useState(item.nota || '');

  const { item: produto, quantidade } = item;
  const precoTotal = quantidade * produto.preco;

  const incrementar = () => atualizarQuantidade(produto.id, quantidade + 1);
  const decrementar = () =>
    quantidade > 1
      ? atualizarQuantidade(produto.id, quantidade - 1)
      : removerItem(produto.id);

  const alterarNota = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    definirNota(e.target.value);
    adicionarNota(produto.id, e.target.value);
  };

  return (
    <div className="bg-[#1A1A1A] p-3 rounded-lg mb-3 border border-[#495057]/30">
      <div className="flex space-x-3">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-20 h-20 rounded object-cover"
        />

        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="text-[#F8F9FA] font-medium">{produto.nome}</h3>
            <button
              className="text-[#495057] hover:text-[#E63946]"
              onClick={() => removerItem(produto.id)}
              aria-label="Remover item"
            >
              <Trash2 size={16} />
            </button>
          </div>

          <p className="text-[#F8F9FA]/60 text-sm line-clamp-1">{produto.descricao}</p>

          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center bg-[#495057]/20 rounded-full">
              <button
                className="w-8 h-8 flex items-center justify-center text-[#F8F9FA] rounded-full hover:bg-[#495057]/40"
                onClick={decrementar}
                aria-label="Diminuir quantidade"
              >
                <Minus size={16} />
              </button>
              <span className="mx-2 text-[#F8F9FA] min-w-6 text-center">{quantidade}</span>
              <button
                className="w-8 h-8 flex items-center justify-center text-[#F8F9FA] rounded-full hover:bg-[#495057]/40"
                onClick={incrementar}
                aria-label="Aumentar quantidade"
              >
                <Plus size={16} />
              </button>
            </div>

            <div className="text-[#F8F9FA] font-bold">
              R$ {precoTotal.toFixed(2).replace('.', ',')}
            </div>
          </div>

          <button
            className="text-[#495057] text-xs underline mt-1"
            onClick={() => definirMostrarNotas(!mostrarNotas)}
          >
            {mostrarNotas
              ? 'Ocultar observação'
              : item.nota
              ? 'Editar observação'
              : 'Adicionar observação'}
          </button>
        </div>
      </div>

      {mostrarNotas && (
        <div className="mt-2">
          <textarea
            value={nota}
            onChange={alterarNota}
            placeholder="Escreva algo para personalizar o pedido..."
            className="w-full p-2 bg-[#495057]/20 text-[#F8F9FA] border border-[#495057]/30 rounded resize-none text-sm"
            rows={2}
          />
        </div>
      )}
    </div>
  );
}