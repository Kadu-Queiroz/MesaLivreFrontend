import React, { useRef } from 'react';
import { categorias, obterIcone } from '@/data/mock-data';

interface CategoriasProps {
  categoriaSelecionada: string;
  definirCategoriaSelecionada: (id: string) => void;
}

export default function Categories({
  categoriaSelecionada,
  definirCategoriaSelecionada,
}: CategoriasProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const aoClicarCategoria = (id: string) => {
    definirCategoriaSelecionada(id);

    const el = document.getElementById(`cat-${id}`);
    if (el && scrollRef.current) {
      const larguraContainer = scrollRef.current.clientWidth;
      const posicao = el.offsetLeft;
      const larguraItem = el.clientWidth;

      scrollRef.current.scrollTo({
        left: posicao - larguraContainer / 2 + larguraItem / 2,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto py-3 mt-16 sticky top-16 bg-[#1A1A1A] z-40 shadow-md"
    >
      <div className="flex space-x-4 px-4 min-w-max">
        {categorias.map(categoria => {
          const Icone = obterIcone(categoria.icone);
          const selecionada = categoria.id === categoriaSelecionada;

          return (
            <div
              key={categoria.id}
              id={`cat-${categoria.id}`}
              onClick={() => aoClicarCategoria(categoria.id)}
              className={`
                flex flex-col items-center justify-center
                min-w-20 py-2 px-3 rounded-lg cursor-pointer
                transition-all duration-200 transform
                ${selecionada
                  ? 'bg-[#E63946] text-white scale-105'
                  : 'bg-[#495057]/20 text-white/80 hover:bg-[#495057]/30'}
              `}
            >
              <Icone size={24} className={`mb-1 ${selecionada ? 'text-white' : 'text-white/80'}`} />
              <span className="text-xs font-medium whitespace-nowrap">
                {categoria.nome}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}