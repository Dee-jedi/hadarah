import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ShopState = {
  wishlistIds: string[];
  cartIds: string[];
  toggleWishlist: (productId: string) => void;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
};

export const useShopStore = create<ShopState>()(
  persist(
    (set, get) => ({
      wishlistIds: [],
      cartIds: [],
      
      toggleWishlist: (productId) => {
        set((state) => {
          const isWishlisted = state.wishlistIds.includes(productId);
          return {
            wishlistIds: isWishlisted 
              ? state.wishlistIds.filter(id => id !== productId)
              : [...state.wishlistIds, productId]
          };
        });
      },

      addToCart: (productId) => {
        set((state) => {
          if (!state.cartIds.includes(productId)) {
            return { cartIds: [...state.cartIds, productId] };
          }
          return state;
        });
      },

      removeFromCart: (productId) => {
        set((state) => ({
          cartIds: state.cartIds.filter(id => id !== productId)
        }));
      },

      isInWishlist: (productId) => {
        return get().wishlistIds.includes(productId);
      }
    }),
    {
      name: 'hadarah-shop-storage', // name of the item in the storage (must be unique)
    }
  )
);
