import React, { useState } from 'react';
import { useCarrinho } from '@/context/CartContext';
import { X } from 'lucide-react';
import PagamentoModal from './PagamentoModal';

interface ComandaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComandaModal({ isOpen, onClose }: ComandaModalProps) {
  const { itens, totalPreco } = useCarrinho();
  const [showPagamento, setShowPagamento] = useState(false);

  if (!isOpen) return null;

  const fecharAoClicarFora = () => {
    if (!showPagamento) onClose(); // impede fechamento se modal de pagamento estiver aberto
  };

  return (
    <>
      <div
        className="fixed inset-0 z-[999] bg-black/50 flex items-end md:items-center justify-center"
        onClick={fecharAoClicarFora}
      >
        <div
          className="w-full md:max-w-md bg-background rounded-t-lg md:rounded-lg shadow-lg overflow-hidden max-h-[95vh] p-4 relative"
          onClick={e => e.stopPropagation()}
        >
          {/* Cabeçalho */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-white">Sua Comanda</h2>
            <button
              onClick={onClose}
              className="text-muted hover:text-white transition"
              aria-label="Fechar comanda"
            >
              <X size={20} />
            </button>
          </div>

          {/* Lista de Itens */}
          <div className="space-y-3 overflow-y-auto max-h-[60vh] pr-1">
            {itens.length > 0 ? (
              itens.map(item => (
                <div
                  key={item.item.id}
                  className="flex justify-between text-sm text-white border-b border-muted/30 pb-1"
                >
                  <span>{item.quantidade}× {item.item.nome}</span>
                  <span>R$ {(item.item.preco * item.quantidade).toFixed(2).replace('.', ',')}</span>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">Nenhum item adicionado ainda.</p>
            )}
          </div>

          {/* Total */}
          <div className="mt-4 text-right text-white font-bold text-base border-t border-muted/30 pt-2">
            Total: R$ {totalPreco.toFixed(2).replace('.', ',')}
          </div>

          {/* Botão Pagar Comanda */}
          {itens.length > 0 && (
            <div className="mt-6">
              <button
                onClick={() => setShowPagamento(true)}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold text-sm transition"
              >
                Pagar Comanda
              </button>
            </div>
          )}
        </div>
      </div>

      <PagamentoModal isOpen={showPagamento} onClose={() => setShowPagamento(false)} />
    </>
  );
}