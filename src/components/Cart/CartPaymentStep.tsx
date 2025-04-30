import React from 'react';
import { DollarSign, CreditCard } from 'lucide-react';
import { useCarrinho } from '@/context/CartContext';

interface CartPaymentStepProps {
  metodoPagamento: 'card' | 'cash';
  definirMetodoPagamento: (metodo: 'card' | 'cash') => void;
  dividirConta: boolean;
  definirDividirConta: (valor: boolean) => void;
  quantidadePessoas: number;
  definirQuantidadePessoas: (num: number) => void;
}

export default function CartPaymentStep({
  metodoPagamento,
  definirMetodoPagamento,
  dividirConta,
  definirDividirConta,
  quantidadePessoas,
  definirQuantidadePessoas,
}: CartPaymentStepProps) {
  const { itens, totalPreco } = useCarrinho();
  const valorPorPessoa = dividirConta ? totalPreco / quantidadePessoas : totalPreco;

  return (
    <div>
      <div className="bg-[#495057]/10 rounded-lg p-4 mb-6">
        <h3 className="text-[#F8F9FA] font-medium mb-3">Resumo do pedido</h3>

        <div className="space-y-2 mb-3">
          {itens.map(item => (
            <div key={item.item.id} className="flex justify-between text-sm">
              <span className="text-[#F8F9FA]/80">
                {item.quantidade} × {item.item.nome}
              </span>
              <span className="text-[#F8F9FA]">
                R$ {(item.item.preco * item.quantidade).toFixed(2).replace('.', ',')}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-[#495057]/30 pt-3 mt-3">
          <div className="flex justify-between font-bold">
            <span className="text-[#F8F9FA]">Total</span>
            <span className="text-[#F8F9FA]">
              R$ {totalPreco.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-[#F8F9FA] font-medium mb-3">Forma de pagamento</h3>

        <div className="grid grid-cols-2 gap-3">
          <button
            className={`
              p-4 rounded-lg flex items-center justify-center border
              ${metodoPagamento === 'card'
                ? 'border-[#2A9D8F] bg-[#2A9D8F]/10 text-[#2A9D8F]'
                : 'border-[#495057]/30 text-[#F8F9FA]/80'}
            `}
            onClick={() => definirMetodoPagamento('card')}
          >
            <CreditCard className="mr-2" size={20} />
            <span>Cartão</span>
          </button>

          <button
            className={`
              p-4 rounded-lg flex items-center justify-center border
              ${metodoPagamento === 'cash'
                ? 'border-[#2A9D8F] bg-[#2A9D8F]/10 text-[#2A9D8F]'
                : 'border-[#495057]/30 text-[#F8F9FA]/80'}
            `}
            onClick={() => definirMetodoPagamento('cash')}
          >
            <DollarSign className="mr-2" size={20} />
            <span>Dinheiro</span>
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[#F8F9FA] font-medium">Dividir conta</h3>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={dividirConta}
              onChange={() => definirDividirConta(!dividirConta)}
            />
            <div className="w-11 h-6 bg-[#495057]/30 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2A9D8F]"></div>
          </label>
        </div>

        {dividirConta && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#F8F9FA]/80 text-sm">Número de pessoas</span>
              <div className="flex items-center">
                <button
                  className="w-8 h-8 bg-[#495057]/20 rounded-full flex items-center justify-center text-[#F8F9FA]"
                  onClick={() => definirQuantidadePessoas(Math.max(2, quantidadePessoas - 1))}
                  disabled={quantidadePessoas <= 2}
                >
                  -
                </button>
                <span className="mx-3 text-[#F8F9FA]">{quantidadePessoas}</span>
                <button
                  className="w-8 h-8 bg-[#495057]/20 rounded-full flex items-center justify-center text-[#F8F9FA]"
                  onClick={() => definirQuantidadePessoas(Math.min(10, quantidadePessoas + 1))}
                  disabled={quantidadePessoas >= 10}
                >
                  +
                </button>
              </div>
            </div>

            <div className="bg-[#2A9D8F]/10 p-3 rounded-lg text-center">
              <p className="text-[#F8F9FA]/80 text-sm mb-1">Valor por pessoa</p>
              <p className="text-[#2A9D8F] font-bold text-xl">
                R$ {valorPorPessoa.toFixed(2).replace('.', ',')}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}