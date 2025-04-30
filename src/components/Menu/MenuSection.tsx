import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import MenuItem from './MenuItem';
import { ItemMenu, OpcaoOrdenacao } from '@/types';
import { obterItensPorCategoria } from '@/data/mock-data';

interface Props {
  categoriaId: string;
}

export default function MenuSection({ categoriaId }: Props) {
  const [ordenacao, setOrdenacao] = useState<OpcaoOrdenacao>('popularidade');
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);

  const itens = obterItensPorCategoria(categoriaId);

  const itensOrdenados = [...itens].sort((a, b) => {
    switch (ordenacao) {
      case 'popularidade':
        return b.popularidade - a.popularidade;
      case 'preco-crescente':
        return a.preco - b.preco;
      case 'preco-decrescente':
        return b.preco - a.preco;
      case 'alfabetica':
        return a.nome.localeCompare(b.nome);
      default:
        return 0;
    }
  });

  const alterarOrdenacao = (opcao: OpcaoOrdenacao) => {
    setOrdenacao(opcao);
    setMostrarOpcoes(false);
  };

  return (
    <div className="px-4 pb-28">
      <div className="flex justify-between items-center mt-4 mb-3">
        <h2 className="text-white text-xl font-bold">
          {categoriaId === 'popular'
            ? 'Mais Populares'
            : itens.length > 0
              ? itens[0].categoriaId.charAt(0).toUpperCase() + itens[0].categoriaId.slice(1)
              : 'Itens do Menu'}
        </h2>

        <div className="relative">
          <button
            className="flex items-center text-white text-sm bg-[#495057]/30 px-3 py-1 rounded-full"
            onClick={() => setMostrarOpcoes(!mostrarOpcoes)}
          >
            <span className="mr-1">Ordenar</span>
            <ArrowUpDown size={14} />
          </button>

          {mostrarOpcoes && (
            <div className="absolute right-0 mt-1 bg-[#1A1A1A] border border-[#495057]/50 rounded-lg shadow-lg z-10 w-44">
              <div className="p-1">
                <button
                  className={`block w-full text-left px-3 py-2 text-sm rounded ${ordenacao === 'popularidade' ? 'bg-[#E63946] text-white' : 'text-white/80 hover:bg-[#495057]/30'}`}
                  onClick={() => alterarOrdenacao('popularidade')}
                >
                  Mais populares
                </button>
                <button
                  className={`block w-full text-left px-3 py-2 text-sm rounded ${ordenacao === 'preco-crescente' ? 'bg-[#E63946] text-white' : 'text-white/80 hover:bg-[#495057]/30'}`}
                  onClick={() => alterarOrdenacao('preco-crescente')}
                >
                  Preço: menor → maior
                </button>
                <button
                  className={`block w-full text-left px-3 py-2 text-sm rounded ${ordenacao === 'preco-decrescente' ? 'bg-[#E63946] text-white' : 'text-white/80 hover:bg-[#495057]/30'}`}
                  onClick={() => alterarOrdenacao('preco-decrescente')}
                >
                  Preço: maior → menor
                </button>
                <button
                  className={`block w-full text-left px-3 py-2 text-sm rounded ${ordenacao === 'alfabetica' ? 'bg-[#E63946] text-white' : 'text-white/80 hover:bg-[#495057]/30'}`}
                  onClick={() => alterarOrdenacao('alfabetica')}
                >
                  A-Z
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {itensOrdenados.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}

        {itensOrdenados.length === 0 && (
          <div className="text-center py-8 text-white/60">
            Nenhum item encontrado nesta categoria.
          </div>
        )}
      </div>
    </div>
  );
}