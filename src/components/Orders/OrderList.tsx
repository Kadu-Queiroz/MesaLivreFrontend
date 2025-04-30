import React from 'react';
import { Pedido } from '@/types';
import PedidoCard from './OrderCard';

interface Props {
  pedidos: Pedido[];
}

export default function PedidoLista({ pedidos }: Props) {
  if (pedidos.length === 0) {
    return <p className="text-center text-[#F8F9FA]/70">Nenhum pedido encontrado.</p>;
  }

  return (
    <div className="p-4">
      {pedidos.map((p) => (
        <PedidoCard key={p.id} pedido={p} />
      ))}
    </div>
  );
}