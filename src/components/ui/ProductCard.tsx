// src/components/ui/ProductCard.tsx
import { Link } from "react-router-dom";
import { Product } from "@/services/productService";
import { getImageUrl } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  loading?: boolean;
}

const ProductCard = ({ product, loading = false }: ProductCardProps) => {
  const imageUrl = getImageUrl(product.featured_image?.image);

  if (loading) {
    return (
      <div className="group product-card block bg-card overflow-hidden transition-all duration-300 h-full border rounded-lg animate-pulse">
        <div className="aspect-square relative w-full overflow-hidden bg-muted" />
        <div className="p-4">
          <div className="h-5 bg-muted rounded mb-3 w-3/4" />
          <div className="h-6 bg-muted rounded w-1/2" />
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group product-card block bg-secondary overflow-hidden transition-all duration-300 h-full border border-border rounded-lg hover:shadow-lg hover:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label={`View details for ${product.name}`}
    >
      <div className="aspect-square relative w-full overflow-hidden bg-muted/50">
        <img
          src={imageUrl}
          alt={product.featured_image?.alt_text ?? product.name}
          className="product-card-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
            e.currentTarget.alt = "Product image unavailable";
          }}
          loading="lazy"
        />

        {/* Hover overlay effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      </div>

      <div className="p-4">
        <h3
          className="text-base font-semibold text-foreground mb-2 line-clamp-2 min-h-[3rem] group-hover:text-primary transition-colors duration-200"
          title={product.name}
        >
          {product.name}
        </h3>

        <div className="flex items-baseline justify-between">
          <p className="text-lg font-bold text-primary">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(product.base_price)}
          </p>

          <span className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
