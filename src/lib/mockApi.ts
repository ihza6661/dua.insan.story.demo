
import { provinces, cities, costs } from '../data/shipping';

export const mockApi = {
  getProvinces: async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ data: provinces });
      }, 500);
    });
  },
  getCities: async (provinceId) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ data: cities[provinceId] || [] });
      }, 500);
    });
  },
  getCost: async (origin, destination, weight, courier) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ data: costs });
      }, 500);
    });
  },
};
