/**
 * Mendefinisikan struktur data untuk Kategori Produk.
*/
export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
}

/**
 * Mendefinisikan struktur data untuk Gambar Produk.
 * ✅ BENAR: Properti sekarang adalah `image`.
 */
export interface ProductImage {
  id: number;
  image: string; // Sebelumnya `url` atau `image_url`
  alt_text: string | null;
  is_featured: boolean;
}

/**
 * [BARU] Mendefinisikan nilai atribut tunggal.
 * Contoh: "Merah", atau "Ukuran M".
 */
export interface AttributeValue {
  attribute_name: unknown;
  id: number;
  value: string;
}

/**
 * Mendefinisikan Varian Produk yang spesifik.
 * Sebuah varian adalah kombinasi dari beberapa pilihan (AttributeValue)
 * dan memiliki harga serta stok sendiri.
 */
export interface ProductVariant {
  id: number;
  price: number;
  stock: number;
  options: AttributeValue[];
  images: ProductImage[];
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  base_price: number;
  featured_image: ProductImage | null;
}

export interface PaginatedProducts {
  data: Product[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

export interface ProductDetail extends Product {
  grouped_options: Record<string, AttributeValue[]>;
  add_ons?: AddOn[]; // Add this
  description: string;
  min_order_quantity: number;
  category: ProductCategory;
  images: ProductImage[];
  variants: ProductVariant[];
}

export interface AddOn {
  id: number;
  name: string;
  price: number;
}
export interface ProductDetailResponse {
  data: ProductDetail
}

interface FetchProductsParams {
  category?: string;
  search?: string;
  sort?: string;
  min_price?: string;
  max_price?: string;
}

/**
 * Mengambil daftar semua kategori produk dari API.
 */
export const fetchCategories = async (): Promise<ProductCategory[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Undangan Cetak', slug: 'undangan-digital', description: 'Undangan digital modern dan interaktif.', image: '/category/wedding.jpg' },
        { id: 2, name: 'Buku Tamu', slug: 'buku-tamu-digital', description: 'Buku tamu digital dengan QR code.', image: '/category/guestbook.jpg' },
      ]);
    }, 500);
  });
};

/**
 * Mengambil daftar produk dari API, mendukung filter dan paginasi.
 */
export const fetchProducts = async (params: FetchProductsParams): Promise<PaginatedProducts> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: [
          { id: 1, name: 'Tema Alice in Wonderland', slug: 'tema-alice-in-wonderland', base_price: 150000, featured_image: { id: 1, image: '/products/alice-wonderland-theme/1.jpg', alt_text: 'Alice in Wonderland', is_featured: true } },
          { id: 2, name: 'Tema Blue on Blue', slug: 'tema-blue-on-blue', base_price: 120000, featured_image: { id: 2, image: '/products/blue-on-blue/1.jpg', alt_text: 'Blue on Blue', is_featured: true } },
        ],
        links: { first: '', last: '', prev: null, next: null },
        meta: { current_page: 1, from: 1, last_page: 1, path: '', per_page: 10, to: 2, total: 2 }
      });
    }, 500);
  });
};

/**
 * Mengambil data detail lengkap untuk satu produk berdasarkan ID-nya.
 */
export const fetchProductById = async (productId: string): Promise<ProductDetail> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Tema Alice in Wonderland',
        slug: 'tema-alice-in-wonderland',
        base_price: 150000,
        featured_image: { id: 1, image: '/products/alice-wonderland-theme/1.jpg', alt_text: 'Alice in Wonderland', is_featured: true },
        description: 'Undangan dengan tema Alice in Wonderland yang unik dan menarik.',
        min_order_quantity: 50,
        category: { id: 1, name: 'Undangan Digital', slug: 'undangan-digital', description: 'Undangan digital modern dan interaktif.', image: '/category/wedding.jpg' },
        images: [
          { id: 1, image: '/products/alice-wonderland-theme/1.jpg', alt_text: 'Alice in Wonderland 1', is_featured: true },
          { id: 2, image: '/products/alice-wonderland-theme/2.jpg', alt_text: 'Alice in Wonderland 2', is_featured: false },
        ],
        variants: [
          {
            id: 1,
            price: 150000,
            stock: 10,
            options: [
              {
                id: 1,
                value: 'Blue',
                attribute_name: 'Warna'
              }
            ],
            images: []
          }
        ],
        grouped_options: {
          'Warna': [
            {
              id: 1,
              value: 'Blue',
              attribute_name: 'Warna'
            }
          ]
        },
        add_ons: [
          { id: 1, name: 'Buku Tamu Digital', price: 50000 },
          { id: 2, name: 'Filter Instagram', price: 100000 },
        ]
      });
    }, 500);
  });
};
