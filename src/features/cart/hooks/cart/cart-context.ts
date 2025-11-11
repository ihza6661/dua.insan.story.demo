import { createContext } from 'react';
import { Cart } from '@/features/cart/services/cartService';
import type { AddToCartPayload } from '@/features/cart/services/cartService';

export interface CartContextType {
  cart: Cart | undefined;
  isLoading: boolean;
  addToCart: (payload: AddToCartPayload, callbacks?: { onSuccess?: () => void }) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  removeItem: (itemId: number) => void;
  clearCart: () => void;
  isMutating: boolean;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
