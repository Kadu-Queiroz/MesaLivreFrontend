import React from 'react';
import { Pedido } from '@/types';

interface Props {
  pedido: Pedido;
}

export default function PedidoCard({ pedido }: Props) {
  return (
    <div className="bg-[#1A1A1A] border border-[#495057]/30 p-4 rounded-lg mb-3">
      <div className="flex justify-between mb-2">
        <h3 className="text-[#F8F9FA] font-bold">Pedido #{pedido.id}</h3>
        <span className="text-sm text-[#F8F9FA]/70">{new Date(pedido.data).toLocaleString()}</span>
      </div>
      <ul className="text-[#F8F9FA]/80 text-sm mb-2">
        {pedido.itens.map((i, idx) => (
          <li key={idx}>
            {i.quantidade}x {i.item.nome}
          </li>
        ))}
      </ul>
      <div className="flex justify-between text-sm text-[#F8F9FA]">
        <span>Método: {pedido.metodoPagamento === 'cartao' ? 'Cartão' : 'Dinheiro'}</span>
        <span className="font-bold">Total: R$ {pedido.total.toFixed(2).replace('.', ',')}</span>
      </div>
    </div>
  );
}