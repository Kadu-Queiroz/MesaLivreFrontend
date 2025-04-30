import { Categoria, ItemMenu } from '@/types';
import { ShoppingBag, Coffee, Pizza, Salad, IceCream, Beef } from 'lucide-react';

export const categorias: Categoria[] = [
  { id: 'popular', nome: 'Populares', icone: 'ShoppingBag' },
  { id: 'entradas', nome: 'Entradas', icone: 'Salad' },
  { id: 'principais', nome: 'Pratos Principais', icone: 'Beef' },
  { id: 'pizza', nome: 'Pizzas', icone: 'Pizza' },
  { id: 'sobremesas', nome: 'Sobremesas', icone: 'IceCream' },
  { id: 'bebidas', nome: 'Bebidas', icone: 'Coffee' }
];

export const itensMenu: ItemMenu[] = [
  {
    id: '1',
    nome: 'Pizza Margherita',
    descricao: 'Pizza clássica com molho de tomate, mussarela e manjericão',
    preco: 12.99,
    imagem: 'https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg',
    categoriaId: 'pizza',
    popularidade: 95
  },
  {
    id: '2',
    nome: 'Salada Caesar',
    descricao: 'Alface romana, croutons, parmesão e molho Caesar',
    preco: 8.99,
    imagem: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg',
    categoriaId: 'entradas',
    popularidade: 80
  },
  {
    id: '3',
    nome: 'Hambúrguer de Carne',
    descricao: 'Hambúrguer de carne com alface, tomate, queijo e molho especial',
    preco: 14.99,
    imagem: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
    categoriaId: 'principais',
    popularidade: 90
  },
  {
    id: '4',
    nome: 'Bolo de Chocolate',
    descricao: 'Bolo rico em chocolate com cobertura de ganache',
    preco: 6.99,
    imagem: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg',
    categoriaId: 'sobremesas',
    popularidade: 85
  },
  {
    id: '5',
    nome: 'Café Gelado',
    descricao: 'Café coado frio servido com gelo',
    preco: 4.99,
    imagem: 'https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg',
    categoriaId: 'bebidas',
    popularidade: 75
  },
  {
    id: '6',
    nome: 'Pizza Pepperoni',
    descricao: 'Pizza com molho de tomate, mussarela e pepperoni',
    preco: 13.99,
    imagem: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg',
    categoriaId: 'pizza',
    popularidade: 98
  },
  {
    id: '7',
    nome: 'Asas de Frango',
    descricao: 'Asinhas crocantes com molho buffalo',
    preco: 9.99,
    imagem: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
    categoriaId: 'entradas',
    popularidade: 88
  },
  {
    id: '8',
    nome: 'Pasta Carbonara',
    descricao: 'Espaguete com molho cremoso, bacon e parmesão',
    preco: 15.99,
    imagem: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg',
    categoriaId: 'principais',
    popularidade: 87
  },
  {
    id: '9',
    nome: 'Cheesecake',
    descricao: 'Cheesecake estilo Nova York cremoso',
    preco: 7.99,
    imagem: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
    categoriaId: 'sobremesas',
    popularidade: 82
  },
  {
    id: '10',
    nome: 'Limonada',
    descricao: 'Limonada fresca espremida na hora',
    preco: 3.99,
    imagem: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    categoriaId: 'bebidas',
    popularidade: 72
  }
];

export const obterItensPopulares = (): ItemMenu[] => {
  return [...itensMenu].sort((a, b) => b.popularidade - a.popularidade).slice(0, 5);
};

export const obterItensPorCategoria = (categoriaId: string): ItemMenu[] => {
  if (categoriaId === 'popular') return obterItensPopulares();
  return itensMenu.filter(item => item.categoriaId === categoriaId);
};

export const obterIcone = (nome: string) => {
  switch (nome) {
    case 'ShoppingBag': return ShoppingBag;
    case 'Salad': return Salad;
    case 'Beef': return Beef;
    case 'Pizza': return Pizza;
    case 'IceCream': return IceCream;
    case 'Coffee': return Coffee;
    default: return ShoppingBag;
  }
};