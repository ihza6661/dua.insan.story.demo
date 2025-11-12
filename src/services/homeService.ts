
// src/services/homeService.ts

// Mendefinisikan tipe data untuk respons API hero
export interface HeroData {
  title: string;
  subtitle: string;
  background_image_url: string;
  sample_image_url: string;
  whatsapp_number: string;
}

/**
 * Mengambil data untuk halaman hero dari API.
 */
export const fetchHeroData = async (): Promise<HeroData> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        title: 'Solusi Undangan Digital & Cetak',
        subtitle: 'Buat momen spesial Anda tak terlupakan dengan undangan eksklusif dari Dua Insan. Personalisasi mudah, cepat, dan sesuai gaya Anda.',
        background_image_url: '/hero/5.png',
        sample_image_url: '/hero/5.png',
        whatsapp_number: '6281234567890'
      });
    }, 500);
  });
};
