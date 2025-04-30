import React from 'react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center">
      <div className="bg-background text-text w-[90%] max-w-md rounded-lg shadow-lg relative p-6 animate-slideDown">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-muted hover:text-white transition"
          aria-label="Fechar"
        >
          ✕
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold mb-4">Sobre o MesaLivre</h2>

        {/* Texto descritivo */}
        <p className="text-sm text-muted mb-3 leading-relaxed">
          O MesaLivre é um app-web para pedidos em restaurantes via Wi-Fi local —
          sem filas, sem espera. Você acessa, escolhe, paga e recebe — tudo pelo celular.
        </p>

        {/* Rodapé */}
        <p className="text-xs text-muted">
          Versão 1.0 • Desenvolvido por Carlos Eduardo Queiroz – OzTech
        </p>
      </div>
    </div>
  );
};

export default AboutModal;