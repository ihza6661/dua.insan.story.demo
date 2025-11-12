
// src/services/optionService.ts

// Definisikan tipe data untuk Jenis Kertas
export interface PaperType {
  id: number;
  name: string; // Contoh: "Kertas Jasmine"
  value: string; // Contoh: "jasmine"
}

/**
 * Mengambil daftar semua jenis kertas yang tersedia dari API.
 */
export const fetchPaperTypes = async (): Promise<PaperType[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Kertas Art Carton', value: 'art_carton' },
        { id: 2, name: 'Kertas Ivory', value: 'ivory' },
        { id: 3, name: 'Kertas Matte Paper', value: 'matte_paper' },
      ]);
    }, 500);
  });
};
