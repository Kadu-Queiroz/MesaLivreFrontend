import React, { useState } from 'react';
import { X, CreditCard, QrCode, Smartphone } from 'lucide-react';

interface PagamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PagamentoModal({ isOpen, onClose }: PagamentoModalProps) {
  const [metodoSelecionado, setMetodoSelecionado] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleVoltar = () => setMetodoSelecionado(null);

  return (
    <div className="fixed inset-0 z-[1000] bg-black/60 flex items-center justify-center">
      <div className="bg-background w-[90%] max-w-md rounded-lg shadow-xl p-6 relative">
        <button
          className="absolute top-3 right-3 text-muted hover:text-white"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <X size={20} />
        </button>

        {!metodoSelecionado && (
          <>
            <h2 className="text-xl text-white font-bold mb-4">Escolha o método de pagamento</h2>
            <div className="space-y-3">
              <button
                onClick={() => setMetodoSelecionado('cartao')}
                className="w-full flex items-center gap-3 bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition"
              >
                <CreditCard size={20} />
                Cartão (Chamar garçom)
              </button>

              <button
                onClick={() => setMetodoSelecionado('pix')}
                className="w-full flex items-center gap-3 bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition"
              >
                <QrCode size={20} />
                Pix
              </button>

              <button
                onClick={() => setMetodoSelecionado('gateway')}
                className="w-full flex items-center gap-3 bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition"
              >
                <Smartphone size={20} />
                Pagamento Digital (Google Pay, PagSeguro...)
              </button>
            </div>
          </>
        )}

        {metodoSelecionado === 'cartao' && (
          <div className="text-center text-white">
            <h3 className="text-lg font-bold mb-2">Chamar garçom</h3>
            <p className="text-sm text-muted mb-4">
              Um de nossos garçons será avisado para trazer a maquininha até sua mesa.
            </p>
            <button
              onClick={onClose}
              className="mt-3 bg-secondary hover:bg-secondary/80 text-white font-bold py-2 px-4 rounded"
            >
              Entendido
            </button>
          </div>
        )}

        {metodoSelecionado === 'pix' && (
          <div className="text-center text-white">
            <h3 className="text-lg font-bold mb-2">Pagamento via Pix</h3>
            <p className="text-sm text-muted mb-2">Escaneie o QR Code abaixo ou copie a chave.</p>
            <div className="bg-white rounded p-4 my-4">
              <img
                src="/qrcode-pix-exemplo.png"
                alt="QR Code Pix"
                className="mx-auto w-40 h-40 object-contain"
              />
            </div>
            <p className="text-xs text-muted break-all mb-4">
              chavepix@estabelecimento.com.br
            </p>
            <button
              onClick={onClose}
              className="mt-3 bg-secondary hover:bg-secondary/80 text-white font-bold py-2 px-4 rounded"
            >
              Já paguei
            </button>
          </div>
        )}

        {metodoSelecionado === 'gateway' && (
          <div className="text-center text-white">
            <h3 className="text-lg font-bold mb-2">Pagamento digital</h3>
            <p className="text-sm text-muted mb-4">
              Em breve você poderá pagar usando Google Pay, PagSeguro, PicPay e outros.
            </p>
            <button
              onClick={onClose}
              className="mt-3 bg-secondary hover:bg-secondary/80 text-white font-bold py-2 px-4 rounded"
            >
              Voltar
            </button>
          </div>
        )}

        {metodoSelecionado && (
          <button
            onClick={handleVoltar}
            className="mt-6 text-sm text-muted underline hover:text-white block mx-auto"
          >
            Escolher outro método
          </button>
        )}
      </div>
    </div>
  );
}