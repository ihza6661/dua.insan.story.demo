
import {
  FaWhatsapp,
  FaPaintBrush,
  FaPrint,
  FaCheckDouble,
  FaShippingFast,
  FaFileAlt,
  FaMoneyBillWave,
  FaPencilRuler,
  FaClipboardCheck,
} from "react-icons/fa";

const ProcessSteps = () => {
  const processSteps = [
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "1. Chat Admin Via WhatsApp",
      description: "Pastikan kamu konsultasi terlebih dahulu kepada tim Dua Insan Story untuk memastikan slot produksi masih tersedia. Pastikan tidak tergesa-gesa untuk hasil yang maksimal.",
    },
    {
      icon: <FaPaintBrush className="text-2xl" />,
      title: "2. Konsultasi Desain & Kebutuhan",
      description: "Jika slot masih tersedia, kamu bisa konsultasikan desain yang diinginkan mulai dari tone warna dan bahan yang dipilih. Kami juga akan meminta data detail acara Kamu.",
    },
    {
      icon: <FaFileAlt className="text-2xl" />,
      title: "3. Mengisi Form Pesanan",
      description: "Isi data pemesan seperti nama, alamat, jenis kertas, dan jumlah undangan untuk kebutuhan invoice.",
    },
    {
      icon: <FaMoneyBillWave className="text-2xl" />,
      title: "4. Pembayaran 1 : Down Payment",
      description: "Lakukan pembayaran minimal 50% dari total order.",
    },
    {
      icon: <FaPencilRuler className="text-2xl" />,
      title: "5. Proses Desain",
      description: "Jangka waktu proses desain undangan berbeda-beda tergantung kerumitan, estimasinya 3-5 hari kerja.",
    },
    {
      icon: <FaCheckDouble className="text-2xl" />,
      title: "6. Revisi & Persetujuan Desain",
      description: "Kami akan memberikan hasil desain berupa foto sehingga kamu bisa melakukan request revisi jika ada yg ingin direvisi.",
    },
    {
      icon: <FaClipboardCheck className="text-2xl" />,
      title: "7. Pembayaran 2 : Pelunasan",
      description: "Sebelum lanjut proses cetak mohon untuk melakukan pelunasan terlebih dahulu.",
    },
    {
      icon: <FaPrint className="text-2xl" />,
      title: "8. Proses Cetak",
      description: "Sebelum masuk proses cetak mohon untuk cek kembali desain yang sudah approve. Proses cetak biasanya sekitar 3 hari kerja tergantung jumlah undangannya.",
    },
    {
      icon: <FaShippingFast className="text-2xl" />,
      title: "9. Pengiriman",
      description: "Kami akan mengirimkan undangan cetakmu dari Pontianak ke alamat tujuan seluruh indonesia.",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Cara Pesan Undangan Cetak
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {processSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-muted-foreground text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
