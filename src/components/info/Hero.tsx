const Hero = () => {
  return (
    <div className="bg-secondary py-8 sm:py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="sm:text-left md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight tracking-wide">
              Cetak Undangan Custom Tanpa Ribet
            </h1>
            <p className="text-base sm:text-lg text-secondary-foreground/80 leading-relaxed">
              Pesan jenis undangan cetak custom, dapat didesain sesuai keinginan. Desainkan sekarang di <strong>Dua Insan Story</strong>.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img
              src="/Pemesanan_Undangan_Cetak/undangan-cetak.webp"
              alt="Undangan Cetak"
              className="w-full rounded-lg shadow-lg mx-auto max-w-md md:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;