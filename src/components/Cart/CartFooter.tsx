import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useCarrinho } from '@/context/CartContext';

interface CartFooterProps {
  carregando: boolean;
  realizarCheckout: () => void;
  etapa: number;
}

export default function CartFooter({
  carregando,
  realizarCheckout,
  etapa,
}: CartFooterProps) {
  const { itens, totalPreco } = useCarrinho();

  if (etapa === 0 && itens.length > 0) {
    return (
      <div className="p-4 border-t border-[#495057]/30">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[#F8F9FA]/80">Total</span>
          <span className="text-[#F8F9FA] text-xl font-bold">
            R$ {totalPreco.toFixed(2).replace('.', ',')}
          </span>
        </div>

        <button
          className={`w-full py-3 rounded-lg font-bold text-white flex items-center justify-center
            ${carregando ? 'bg-primary/70' : 'bg-primary'}
            transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0`}
          onClick={realizarCheckout}
          disabled={carregando}
        >
          {carregando ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Enviando...
            </>
          ) : (
            <>
              Enviar pedido
              <ArrowRight className="ml-2" size={20} />
            </>
          )}
        </button>
      </div>
    );
  }

  return null;
}