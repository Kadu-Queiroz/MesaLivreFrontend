import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

interface MesaLivreHeaderProps {
  openCart?: () => void;
  totalItems?: number;
}

const MesaLivreHeader: React.FC<MesaLivreHeaderProps> = ({
  openCart = () => {},
  totalItems = 0,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1A1A1A] shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-screen-sm mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 rounded-md hover:bg-gray-800 focus:outline-none"
            aria-label="Abrir menu"
          >
            <Menu className="text-white" size={24} />
          </button>
          <h1 className="text-white text-xl font-bold tracking-wide">MesaLivre</h1>
        </div>

        <button
          className="relative p-3 text-white"
          onClick={openCart}
          aria-label="Abrir carrinho"
        >
          <ShoppingBag size={24} />
          {totalItems > 0 && (
            <span
              className={`absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full 
              w-5 h-5 flex items-center justify-center ${
                totalItems > 99 ? 'text-[10px]' : ''
              } animate-pulse`}
            >
              {totalItems > 99 ? '99+' : totalItems}
            </span>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1A1A1A] shadow-md p-4 animate-slideDown">
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="block p-2 text-white hover:bg-gray-800 rounded">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 text-white hover:bg-gray-800 rounded">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 text-white hover:bg-gray-800 rounded">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 text-white hover:bg-gray-800 rounded">
                  Meus Pedidos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default MesaLivreHeader;