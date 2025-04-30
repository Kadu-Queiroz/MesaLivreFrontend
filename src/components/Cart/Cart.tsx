import React, { useState } from 'react';
import CartHeader from './CartHeader';
import CartItemsStep from './CartItemsStep';
import CartCompleteStep from './CartCompleteStep';
import CartFooter from './CartFooter';

export interface CartProps {
  onClose: () => void;
}

export default function Cart({ onClose }: CartProps) {
  const [etapa, setEtapa] = useState(0);
  const [carregando, setCarregando] = useState(false);

  const enviarPedido = () => {
    if (etapa === 0) {
      setCarregando(true);
      setTimeout(() => {
        setCarregando(false);
        setEtapa(1);
      }, 1500);
    }
  };

  return (
    <div className="bg-background h-full w-full flex flex-col animate-slideLeft">
      <CartHeader etapa={etapa} onClose={onClose} />

      <div className="flex-1 overflow-y-auto p-4">
        {etapa === 0 && <CartItemsStep />}
        {etapa === 1 && <CartCompleteStep onClose={onClose} />}
      </div>

      <CartFooter
        etapa={etapa}
        carregando={carregando}
        realizarCheckout={enviarPedido}
      />
    </div>
  );
}