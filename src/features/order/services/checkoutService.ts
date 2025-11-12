import { mockApi } from '@/lib/mockApi';

export const fetchProvinces = async () => {
    const response: any = await mockApi.getProvinces();
    return response.data;
};

export const fetchCities = async (provinceId: string) => {
    const response: any = await mockApi.getCities(provinceId);
    return response.data.rajaongkir.results;
};
/**
 * Mengirimkan data checkout ke server untuk pengguna yang terautentikasi.
 * @param checkoutData Data dari form checkout, harus dalam bentuk FormData.
 * @returns Respon dari server.
 */
export const createOrder = async (checkoutData: FormData) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                message: 'Order created successfully',
                data: {
                    order_id: 'mock-order-id',
                    payment_token: 'mock-payment-token'
                }
            });
        }, 500);
    });
};

/**
 * Mengirimkan data checkout ke server untuk tamu.
 * @param checkoutData Data dari form checkout, harus dalam bentuk FormData.
 * @returns Respon dari server.
 */
export const createGuestOrder = async (checkoutData: FormData) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                message: 'Guest order created successfully',
                data: {
                    order_id: 'mock-guest-order-id',
                    payment_token: 'mock-guest-payment-token'
                }
            });
        }, 500);
    });
};

export const getShippingCost = async (origin: string, destination: string, weight: number, courier: string) => {
    const response: any = await mockApi.getCost(origin, destination, weight, courier);
    return response.data;
};