import React from 'react';
import { useCarrinho } from '@/context/CartContext';

interface CartCompleteStepProps {
  metodoPagamento: 'card' | 'cash';
  onClose: () => void;
}

export default function CartCompleteStep({ metodoPagamento, onClose }: CartCompleteStepProps) {
  const { limparCarrinho } = useCarrinho();

  const voltarParaMenu = () => {
    limparCarrinho();
    onClose();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <div className="w-24 h-24 rounded-full bg-[#2A9D8F]/20 flex items-center justify-center mb-6">
        <svg
          className="w-14 h-14 text-[#2A9D8F]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h3 className="text-[#F8F9FA] text-2xl font-bold mb-2">Pedido realizado!</h3>
      <p className="text-[#F8F9FA]/70 mb-6">Seu pedido foi registrado com sucesso.</p>

      <div className="bg-[#495057]/10 w-full rounded-lg p-4 mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-[#F8F9FA]/80">Número do pedido</span>
          <span className="text-[#F8F9FA] font-medium">#12345</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-[#F8F9FA]/80">Previsão de entrega</span>
          <span className="text-[#F8F9FA] font-medium">15–20 minutos</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#F8F9FA]/80">Pagamento</span>
          <span className="text-[#F8F9FA] font-medium">
            {metodoPagamento === 'card' ? 'Cartão de crédito' : 'Dinheiro'}
          </span>
        </div>
      </div>

      <button className="text-[#2A9D8F] font-medium underline" onClick={voltarParaMenu}>
        Voltar ao menu
      </button>
    </div>
  );
}