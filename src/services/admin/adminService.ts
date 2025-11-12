
import { ProductImage } from './adminService';
// src/services/adminService.ts

export interface ProductImage {
    id: number;
    image: string;
    alt_text: string | null;
    is_featured: boolean;
}

interface UploadImagePayload {
    image: File;
    is_featured: boolean;
}

/**
 * Mengunggah gambar baru untuk sebuah varian produk.
 */
export const uploadProductImage = async (variantId: number, payload: UploadImagePayload): Promise<ProductImage> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 1,
                image: 'https://via.placeholder.com/150',
                alt_text: 'mock image',
                is_featured: payload.is_featured
            });
        }, 500);
    });
};
