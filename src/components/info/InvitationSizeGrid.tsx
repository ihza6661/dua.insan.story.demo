
import { invitationSizes } from "@/lib/data";

const InvitationSizeGrid = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Undangan Cetak Custom Mulai dari Rp 800,-
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        Tersedia dalam berbagai pilihan ukuran undangan cetak custom dan tanpa minimum order.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {invitationSizes.map((item, index) => (
          <div key={index} className="text-center">
            <div className="mb-4 bg-card p-4 rounded-lg h-64 flex items-center justify-center overflow-hidden">
              <img
                src={item.image}
                alt={`${item.label} - ${item.name}`}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">
              {item.label}
            </div>
            <p className="font-semibold text-foreground mb-3">{item.name}</p>
            <div className="text-sm">
              <p className="text-muted-foreground mb-1">
                <span className="font-semibold">Photo Paper</span>
              </p>
              <p className="text-primary font-semibold mb-3">{item.photoPaper}</p>
              <p className="text-muted-foreground mb-1">
                <span className="font-semibold">Brief Card</span>
              </p>
              <p className="text-primary font-semibold">{item.briefCard}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvitationSizeGrid;
