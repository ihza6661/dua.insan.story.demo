import { ProductVariant } from '@/features/product/services/productService';

export interface OrderItem {
  id: number;
  product_id: number;
  product_variant_id: number;
  quantity: number;
  unit_price: number;
  sub_total: number;
  product: {
    id: number;
    name: string;
    featured_image?: {
      image: string;
    };
  };
  variant: ProductVariant;
  // Add other fields as needed from your backend OrderItem structure
}

export interface CustomData {
  bride_full_name: string;
  groom_full_name: string;
  bride_nickname: string;
  groom_nickname: string;
  bride_parents: string;
  groom_parents: string;
  akad_date: string;
  akad_time: string;
  akad_location: string;
  reception_date: string;
  reception_time: string;
  reception_location: string;
  gmaps_link?: string;
  prewedding_photo?: string;
}

export interface Order {
  id: number;
  order_number: string;
  total_amount: number;
  shipping_address: string;
  order_status: 'pending' | 'partially_paid' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  payment_status: 'pending' | 'partially_paid' | 'paid' | 'expired' | 'failed';
  payment_option?: 'dp' | 'full' | 'final' | null;
  amount_paid: number;
  remaining_balance: number;
  created_at: string;
  items: OrderItem[];
  // Add other fields as needed from your backend Order structure
  custom_data?: CustomData; // Add custom_data as it's used in OrderStatusPage
}

interface OrderResponse {
  data: Order;
}

interface OrdersResponse {
  data: Order[]; // Assuming the API returns an array of orders under 'data'
}

export const getOrderById = async (orderId: string): Promise<Order> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 1,
                order_number: 'MOCK-123',
                total_amount: 200000,
                shipping_address: 'Jl. Mockingbird No. 123',
                order_status: 'paid',
                payment_status: 'paid',
                amount_paid: 200000,
                remaining_balance: 0,
                created_at: new Date().toISOString(),
                items: [],
                custom_data: {
                    bride_full_name: 'Jane Doe',
                    groom_full_name: 'John Doe',
                    bride_nickname: 'Jane',
                    groom_nickname: 'John',
                    bride_parents: 'Mr. & Mrs. Doe',
                    groom_parents: 'Mr. & Mrs. Smith',
                    akad_date: '2025-12-12',
                    akad_time: '10:00',
                    akad_location: 'Mockingbird Hall',
                    reception_date: '2025-12-12',
                    reception_time: '19:00',
                    reception_location: 'Mockingbird Ballroom',
                }
            });
        }, 500);
    });
};

// ADD THIS NEW FUNCTION
export const fetchOrders = async (): Promise<Order[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    order_number: 'MOCK-001',
                    total_amount: 250000,
                    shipping_address: 'Jl. Contoh No. 1, Jakarta',
                    order_status: 'paid',
                    payment_status: 'paid',
                    amount_paid: 250000,
                    remaining_balance: 0,
                    created_at: '2023-10-26T10:00:00Z',
                    items: [
                        {
                            id: 1,
                            product_id: 1,
                            product_variant_id: 1,
                            quantity: 1,
                            unit_price: 150000,
                            sub_total: 150000,
                            product: {
                                id: 1,
                                name: 'Tema Alice in Wonderland',
                                featured_image: { image: '/products/alice-wonderland-theme/1.jpg' }
                            },
                            variant: { id: 1, price: 150000, stock: 10, options: [], images: [] }
                        },
                        {
                            id: 2,
                            product_id: 2,
                            product_variant_id: 2,
                            quantity: 1,
                            unit_price: 100000,
                            sub_total: 100000,
                            product: {
                                id: 2,
                                name: 'Buku Tamu Digital',
                                featured_image: { image: '/products/guestbook\'s/guestbook.jpg' }
                            },
                            variant: { id: 2, price: 100000, stock: 10, options: [], images: [] }
                        }
                    ],
                    custom_data: {
                        bride_full_name: 'Jane Doe',
                        groom_full_name: 'John Doe',
                        bride_nickname: 'Jane',
                        groom_nickname: 'John',
                        bride_parents: 'Mr. & Mrs. Doe',
                        groom_parents: 'Mr. & Mrs. Smith',
                        akad_date: '2025-12-12',
                        akad_time: '10:00',
                        akad_location: 'Mockingbird Hall',
                        reception_date: '2025-12-12',
                        reception_time: '19:00',
                        reception_location: 'Mockingbird Ballroom',
                    }
                },
                {
                    id: 2,
                    order_number: 'MOCK-002',
                    total_amount: 120000,
                    shipping_address: 'Jl. Raya No. 45, Bandung',
                    order_status: 'pending',
                    payment_status: 'pending',
                    amount_paid: 0,
                    remaining_balance: 120000,
                    created_at: '2023-10-25T14:30:00Z',
                    items: [
                        {
                            id: 3,
                            product_id: 3,
                            product_variant_id: 3,
                            quantity: 1,
                            unit_price: 120000,
                            sub_total: 120000,
                            product: {
                                id: 3,
                                name: 'Tema Blue on Blue',
                                featured_image: { image: '/products/blue-on-blue/1.jpg' }
                            },
                            variant: { id: 3, price: 120000, stock: 10, options: [], images: [] }
                        }
                    ]
                }
            ]);
        }, 500);
    });
};

export const getFinalPaymentSnapToken = async (
  orderId: string
): Promise<{ snap_token: string; message?: string }> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ snap_token: 'mock-snap-token' });
        }, 500);
    });
};

export const retryPayment = async (orderId: string): Promise<{ snap_token: string; message: string }> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ snap_token: 'mock-retry-snap-token', message: 'Payment retried' });
        }, 500);
    });
};