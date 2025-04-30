import React from 'react';
import { useCarrinho } from '@/context/CartContext';

interface CartCompleteStepProps {
  onClose: () => void;
}

export default function CartCompleteStep({ onClose }: CartCompleteStepProps) {
  const voltarParaMenu = () => {
    onClose();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
        <svg
          className="w-14 h-14 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h3 className="text-text text-2xl font-bold mb-2">Pedido enviado!</h3>
      <p className="text-text/70 mb-6">
        Seu pedido foi enviado para a equipe responsável e será preparado em breve.
      </p>

      <div className="bg-muted/10 w-full rounded-lg p-4 mb-6">
        <div className="flex justify-between">
          <span className="text-text/80">Status da comanda</span>
          <span className="text-text font-medium">Aberta</span>
        </div>
      </div>

      <button
        className="mt-2 bg-secondary text-white font-semibold px-4 py-2 rounded shadow hover:bg-secondary/90 transition"
        onClick={voltarParaMenu}
      >
        Voltar ao menu
      </button>
    </div>
  );
}