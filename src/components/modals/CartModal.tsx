import React from 'react';
import Cart from '../Cart';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center">
      <div className="w-full max-w-md bg-background rounded-lg shadow-xl overflow-hidden max-h-[90vh] animate-slideDown">
        <Cart onClose={onClose} />
      </div>
    </div>
  );
}