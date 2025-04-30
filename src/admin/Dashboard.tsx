import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white p-6">
      <h2 className="text-xl font-bold mb-4">Painel Administrativo</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-[#1A1A1A] p-4 rounded shadow">
          <h3 className="font-semibold text-lg mb-2">Mesas Ativas</h3>
          <p className="text-sm text-muted">Nenhuma mesa com pedido em aberto no momento.</p>
        </div>

        <div className="bg-[#1A1A1A] p-4 rounded shadow">
          <h3 className="font-semibold text-lg mb-2">Sinais de Ajuda</h3>
          <p className="text-sm text-muted">Sem chamados recentes.</p>
        </div>

        <div className="bg-[#1A1A1A] p-4 rounded shadow md:col-span-2">
          <h3 className="font-semibold text-lg mb-2">Histórico de Pagamentos</h3>
          <p className="text-sm text-muted">Nenhuma comanda paga registrada hoje.</p>
        </div>
      </div>
    </div>
  );
}