import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { ItemCarrinho, ItemMenu } from '@/types';

interface ContextoCarrinho {
  itens: ItemCarrinho[];
  adicionarItem: (item: ItemMenu) => void;
  removerItem: (id: string) => void;
  atualizarQuantidade: (id: string, quantidade: number) => void;
  limparCarrinho: () => void;
  totalItens: number;
  totalPreco: number;
  adicionarNota: (id: string, nota: string) => void;
}

const CarrinhoContext = createContext<ContextoCarrinho | undefined>(undefined);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);
  const [totalItens, setTotalItens] = useState(0);
  const [totalPreco, setTotalPreco] = useState(0);

  useEffect(() => {
    const total = itens.reduce((soma, i) => soma + i.quantidade, 0);
    const preco = itens.reduce(
      (soma, i) => soma + i.item.preco * i.quantidade,
      0
    );
    setTotalItens(total);
    setTotalPreco(preco);
  }, [itens]);

  const adicionarItem = (item: ItemMenu) => {
    setItens(prev => {
      const existente = prev.find(i => i.item.id === item.id);
      if (existente) {
        return prev.map(i =>
          i.item.id === item.id
            ? { ...i, quantidade: i.quantidade + 1 }
            : i
        );
      }
      return [...prev, { item, quantidade: 1 }];
    });

    navigator.vibrate?.(50);
  };

  const removerItem = (id: string) => {
    setItens(prev => prev.filter(i => i.item.id !== id));
  };

  const atualizarQuantidade = (id: string, quantidade: number) => {
    if (quantidade <= 0) {
      removerItem(id);
      return;
    }

    setItens(prev =>
      prev.map(i =>
        i.item.id === id ? { ...i, quantidade } : i
      )
    );
  };

  const limparCarrinho = () => setItens([]);

  const adicionarNota = (id: string, nota: string) => {
    setItens(prev =>
      prev.map(i =>
        i.item.id === id ? { ...i, nota } : i
      )
    );
  };

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarItem,
        removerItem,
        atualizarQuantidade,
        limparCarrinho,
        totalItens,
        totalPreco,
        adicionarNota,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const contexto = useContext(CarrinhoContext);
  if (!contexto) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider');
  }
  return contexto;
}