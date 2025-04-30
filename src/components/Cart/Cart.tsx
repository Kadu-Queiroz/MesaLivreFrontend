import React, { useState } from 'react';
import CartHeader from './CartHeader';
import CartItemsStep from './CartItemsStep';
import CartPaymentStep from './CartPaymentStep';
import CartCompleteStep from './CartCompleteStep';
import CartFooter from './CartFooter';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const [etapaCheckout, definirEtapaCheckout] = useState(0);
  const [carregando, definirCarregando] = useState(false);
  const [metodoPagamento, definirMetodoPagamento] = useState<'card' | 'cash'>('card');
  const [dividirConta, definirDividirConta] = useState(false);
  const [quantidadePessoas, definirQuantidadePessoas] = useState(2);

  const realizarCheckout = () => {
    if (etapaCheckout === 0) {
      definirEtapaCheckout(1);
    } else if (etapaCheckout === 1) {
      definirCarregando(true);
      setTimeout(() => {
        definirCarregando(false);
        definirEtapaCheckout(2);
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex flex-col">
      <div className="bg-[#1A1A1A] h-full w-full md:max-w-md md:ml-auto flex flex-col animate-slideLeft">
        <CartHeader etapa={etapaCheckout} onClose={onClose} />

        <div className="flex-1 overflow-y-auto p-4">
          {etapaCheckout === 0 && <CartItemsStep />}

          {etapaCheckout === 1 && (
            <CartPaymentStep
              metodoPagamento={metodoPagamento}
              definirMetodoPagamento={definirMetodoPagamento}
              dividirConta={dividirConta}
              definirDividirConta={definirDividirConta}
              quantidadePessoas={quantidadePessoas}
              definirQuantidadePessoas={definirQuantidadePessoas}
            />
          )}

          {etapaCheckout === 2 && (
            <CartCompleteStep
              metodoPagamento={metodoPagamento}
              onClose={onClose}
            />
          )}
        </div>

        <CartFooter
          etapa={etapaCheckout}
          carregando={carregando}
          realizarCheckout={realizarCheckout}
        />
      </div>
    </div>
  );
};

export default Cart;