// src/services/cartService.ts (Corrected for API v1.1.0)

import type { Product, ProductVariant } from "../product/services/productService"; // Import ProductVariant

// =================================================================================
// --- TYPE DEFINITIONS (SYNCHRONIZED WITH API v1.1.0) ---
// =================================================================================

/**
 * Defines the structure for an item within the cart.
 * CORRECTED: Added the `variant` property.
 */
export interface CartItem {
  id: number;
  quantity: number;
  unit_price: number;
  sub_total: number;
  customizations: { options: { value: string }[] } | null;
  product: Product;
  variant: ProductVariant; // This now holds the specific variant details
}

/**
 * Defines the structure for the entire shopping cart object.
 * (No changes needed here, but its items are now richer)
 */
export interface Cart {
  id: number;
  session_id: string | null;
  total_items: number;
  subtotal: number;
  items: CartItem[];
}

// Helper type for API responses
interface CartResponse {
  data: Cart;
}

/**
 * Defines the payload for adding an item to the cart.
 * CORRECTED: This now requires a `variantId`.
 */
export interface AddToCartPayload {
  variantId: number; // Changed from productId and options
  quantity: number;
  addOns?: number[];
}

// =================================================================================
// --- API FUNCTIONS ---
// =================================================================================

let mockCart: Cart = {
    id: 1,
    session_id: 'mock-session-id',
    total_items: 0,
    subtotal: 0,
    items: []
};

/**
 * Fetches the current user's or guest's cart from the server.
 */
export const fetchCart = async (): Promise<Cart> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mockCart);
        }, 500);
    });
};

/**
 * Adds an item to the cart.
 * CORRECTED: Sends `variant_id` instead of `product_id`.
 */
export const addToCart = async (payload: AddToCartPayload): Promise<Cart> => {
    return new Promise(resolve => {
        setTimeout(() => {
            const product = { id: 1, name: 'Tema Alice in Wonderland', slug: 'tema-alice-in-wonderland', base_price: 150000, featured_image: { id: 1, image: '/public/products/alice-wonderland-theme/1.jpg', alt_text: 'Alice in Wonderland', is_featured: true } };
            const variant = { id: payload.variantId, price: 150000, stock: 10, options: [], images: [] };
            const newItem: CartItem = {
                id: mockCart.items.length + 1,
                quantity: payload.quantity,
                unit_price: variant.price,
                sub_total: payload.quantity * variant.price,
                customizations: null,
                product: product,
                variant: variant
            };
            mockCart.items.push(newItem);
            mockCart.total_items = mockCart.items.length;
            mockCart.subtotal = mockCart.items.reduce((acc, item) => acc + item.sub_total, 0);
            resolve(mockCart);
        }, 500);
    });
};

/**
 * Updates the quantity of a specific item in the cart.
 */
export const updateCartItem = async ({ itemId, quantity }: { itemId: number; quantity: number }) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const item = mockCart.items.find(i => i.id === itemId);
            if (item) {
                item.quantity = quantity;
                item.sub_total = item.unit_price * quantity;
                mockCart.subtotal = mockCart.items.reduce((acc, item) => acc + item.sub_total, 0);
            }
            resolve(mockCart);
        }, 500);
    });
};

/**
 * Removes a specific item from the cart.
 */
export const removeCartItem = async (itemId: number): Promise<Cart> => {
    return new Promise(resolve => {
        setTimeout(() => {
            mockCart.items = mockCart.items.filter(i => i.id !== itemId);
            mockCart.total_items = mockCart.items.length;
            mockCart.subtotal = mockCart.items.reduce((acc, item) => acc + item.sub_total, 0);
            resolve(mockCart);
        }, 500);
    });
};

/**
 * Removes all items from the cart.
 */
export const clearCart = async (): Promise<Cart> => {
    return new Promise(resolve => {
        setTimeout(() => {
            mockCart = {
                id: 1,
                session_id: 'mock-session-id',
                total_items: 0,
                subtotal: 0,
                items: []
            };
            resolve(mockCart);
        }, 500);
    });
};