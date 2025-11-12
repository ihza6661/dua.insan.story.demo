
import { mockApi } from '@/lib/mockApi';

export interface Province {
  province_id: string;
  province: string;
}

export interface City {
  city_id: string;
  province_id: string;
  province: string;
  type: string;
  city_name: string;
  postal_code: string;
}

interface ApiResponse<T> {
  message: string;
  data: T;
}

export const getProvinces = async (): Promise<Province[]> => {
  const response: any = await mockApi.getProvinces();
  return response.data.rajaongkir.results;
};

export const getCities = async (provinceId: string): Promise<City[]> => {
  const response: any = await mockApi.getCities(provinceId);
  return response.data.rajaongkir.results;
};
