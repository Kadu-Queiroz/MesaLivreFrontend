import React, { useState, useEffect } from 'react';
import { Menu, Receipt, UtensilsCrossed, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MesaLivreHeaderProps {
  openCart?: () => void;
  openComandaModal?: () => void;
  openAboutModal?: () => void;
  totalItems?: number;
}

const MesaLivreHeader: React.FC<MesaLivreHeaderProps> = ({
  openCart = () => {},
  openComandaModal = () => {},
  openAboutModal = () => {},
  totalItems = 0,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-sm mx-auto px-4 py-3 flex justify-between items-center">
        {/* Menu e Logo */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-gray-800"
            aria-label="Abrir menu"
          >
            <Menu className="text-white" size={22} />
          </button>
          <h1 className="text-white text-lg font-bold tracking-wide">MesaLivre</h1>
        </div>

        {/* Ações principais */}
        <div className="flex items-center gap-2">
          {/* Botão Comanda */}
          <button
            onClick={() => {
              setMenuOpen(false);
              openComandaModal();
            }}
            className="flex items-center gap-1 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded"
            aria-label="Ver comanda"
          >
            <Receipt size={16} />
            <span className="text-xs font-medium">Comanda</span>
          </button>

          {/* Botão Pedidos */}
          <button
            onClick={openCart}
            className="relative flex items-center gap-1 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded"
            aria-label="Ver pedidos"
          >
            <UtensilsCrossed size={16} />
            <span className="text-xs font-medium">Pedidos</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown lateral */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1A1A1A] z-[60] shadow-md p-4 animate-slideDown">
          <nav>
            <ul className="space-y-2">
              <li>
                <button
                  className="flex items-center gap-2 p-2 text-white hover:bg-gray-800 rounded w-full"
                  onClick={() => {
                    setMenuOpen(false);
                    openAboutModal();
                  }}
                >
                  <Info size={18} />
                  Sobre o App
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default MesaLivreHeader;