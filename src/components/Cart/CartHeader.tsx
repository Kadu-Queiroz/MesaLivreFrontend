import React from 'react';
import { X } from 'lucide-react';

interface PropsHeaderCarrinho {
  etapa: number;
  onClose: () => void;
}

export default function CartHeader({ etapa, onClose }: PropsHeaderCarrinho) {
  const tituloEtapa = () => {
    switch (etapa) {
      case 0:
        return 'Seu carrinho';
      case 1:
        return 'Pagamento';
      case 2:
        return 'Pedido finalizado';
      default:
        return '';
    }
  };

  return (
    <>
      {/* Barra de progresso */}
      <div className="h-1 w-full bg-[#495057]/30">
        <div
          className="h-full bg-[#2A9D8F] transition-all duration-500"
          style={{ width: `${((etapa + 1) / 3) * 100}%` }}
        ></div>
      </div>

      {/* Cabeçalho */}
      <div className="flex justify-between items-center p-4 border-b border-[#495057]/30">
        <h2 className="text-[#F8F9FA] text-xl font-bold">
          {tituloEtapa()}
        </h2>
        <button
          className="text-[#F8F9FA] p-2"
          onClick={onClose}
          aria-label="Fechar carrinho"
        >
          <X size={24} />
        </button>
      </div>
    </>
  );
}