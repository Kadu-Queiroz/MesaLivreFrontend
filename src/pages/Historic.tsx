import React, { useEffect, useState } from 'react';
import { Pedido } from '@/types';
import PedidoLista from '@/components/Orders/OrderList';

export default function Historico() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('pedidos');
    if (data) {
      setPedidos(JSON.parse(data));
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#F8F9FA] pb-24">
      <h1 className="text-2xl font-bold p-4">Histórico de Pedidos</h1>
      <PedidoLista pedidos={pedidos} />
    </div>
  );
}