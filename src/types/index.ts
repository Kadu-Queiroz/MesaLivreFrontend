// Tipos de categoria e item do menu
export interface Categoria {
  id: string;
  nome: string;
  icone: string;
}

export interface ItemMenu {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoriaId: string;
  popularidade: number;
  opcoes?: OpcaoItemMenu[];
}

// Opções extras do item (ex: tamanho, adicionais)
export interface OpcaoItemMenu {
  id: string;
  nome: string;
  escolhas: {
    id: string;
    nome: string;
    preco: number;
  }[];
}

// Item no carrinho de compras
export interface ItemCarrinho {
  item: ItemMenu;
  quantidade: number;
  nota?: string;
  opcoes?: {
    idOpcao: string;
    idEscolha: string;
  }[];
}

export interface Pedido {
  id: string;
  data: string;
  itens: ItemCarrinho[];
  total: number;
  metodoPagamento: 'cartao' | 'dinheiro';
}

// Opções de ordenação do menu
export type OpcaoOrdenacao =
  | 'popularidade'
  | 'preco-crescente'
  | 'preco-decrescente'
  | 'alfabetica';
