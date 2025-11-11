import { getImageUrl } from "@/lib/utils";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/utils/card";
import { Badge } from "@/components/ui/utils/badge";
import { Button } from "@/components/ui/buttons/button";
import { formatRupiah } from "@/lib/utils";
import { Separator } from "@/components/ui/layout-ui/separator";
import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getOrderById, fetchOrders, getFinalPaymentSnapToken } from "@/features/order/services/orderService";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface Snap {
  pay: (
    token: string,
    options: {
      onSuccess: () => void;
      onPending: () => void;
      onError: () => void;
      onClose: () => void;
    }
  ) => void;
}

declare global {
  interface Window {
    snap: Snap;
  }
}


const statusMap: {
  [key: string]: {
    text: string;
    variant: "default" | "secondary" | "destructive";
    textColor?: string;
  };
} = {
  pending: { text: "Menunggu Pembayaran", variant: "secondary" },
  partially_paid: { text: "Dibayar Sebagian", variant: "secondary" },
  paid: { text: "Lunas", variant: "default" },
  processing: { text: "Sedang Diproses", variant: "default" },
  shipped: { text: "Telah Dikirim", variant: "default" },
  delivered: { text: "Telah Diterima", variant: "default" },
  cancelled: { text: "Dibatalkan", variant: "destructive" },
};

const paymentStatusMap: {
  [key: string]: {
    text: string;
    variant: "default" | "secondary" | "destructive";
  };
} = {
  pending: { text: "Menunggu Pembayaran", variant: "secondary" },
  partially_paid: { text: "Dibayar Sebagian", variant: "secondary" },
  paid: { text: "Lunas", variant: "default" },
  expired: { text: "Kedaluwarsa", variant: "destructive" },
  failed: { text: "Gagal", variant: "destructive" },
  cancelled: { text: "Dibatalkan", variant: "destructive" },
};

const OrderStatusPage = () => {
  const { orderId } = useParams<{ orderId?: string }>();
  const queryClient = useQueryClient();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute(
      "data-client-key",
      import.meta.env.VITE_MIDTRANS_CLIENT_KEY
    );
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const payFinalMutation = useMutation({
    mutationFn: getFinalPaymentSnapToken,
    onSuccess: (data) => {
      if (window.snap && data.token) {
        window.snap.pay(data.token, {
          onSuccess: () => {
            toast.success("Pembayaran sisa tagihan berhasil!");
            queryClient.invalidateQueries({ queryKey: ["order", orderId] });
            queryClient.invalidateQueries({ queryKey: ["orders"] });
          },
          onPending: () => {
            toast.info("Menunggu pembayaran Anda...");
          },
          onError: () => {
            toast.error("Pembayaran gagal. Silakan coba lagi.");
          },
          onClose: () => {
            toast.info("Anda menutup pop-up pembayaran.");
          },
        });
      } else {
        toast.error("Gagal memproses pembayaran. Snap.js tidak ditemukan.");
      }
    },
    onError: (error) => {
      toast.error(`Gagal mendapatkan token pembayaran: ${error.message}`);
    },
  });


  // Fetch single order if orderId is present
  const {
    data: orderData,
    isLoading: isOrderLoading,
    isError: isOrderError,
  } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrderById(orderId!),
    enabled: !!orderId,
  });

  // Fetch list of orders if no orderId is present
  const {
    data: ordersData,
    isLoading: isOrdersLoading,
    isError: isOrdersError,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    enabled: !orderId,
  });

  // --- Loading State ---
  if (isOrderLoading || isOrdersLoading) {
    return (
      <div className="container mt-20 mx-auto text-center py-20">
        <Loader2 className="h-12 w-12 animate-spin mx-auto text-muted-foreground" />
        <p className="mt-4 text-lg text-muted-foreground">
          Memuat Data Pesanan...
        </p>
      </div>
    );
  }

  // --- Error State ---
  if (isOrderError || isOrdersError) {
    return (
      <div className="container mt-20 mx-auto text-center py-20">
        <h1 className="text-2xl font-bold text-destructive">
          Gagal Memuat Pesanan
        </h1>
        <p className="text-muted-foreground">
          Terjadi kesalahan saat mengambil data pesanan Anda. Silakan coba lagi
          nanti.
        </p>
      </div>
    );
  }

  // --- Render Single Order Detail ---
  if (orderId) {
    const order = orderData;
    if (!order) {
      return (
        <div className="container mt-20 mx-auto text-center py-20">
          <h1 className="text-2xl font-bold text-foreground">
            Pesanan Tidak Ditemukan
          </h1>
          <p className="text-muted-foreground">
            Pesanan dengan ID {orderId} tidak ditemukan.
          </p>
        </div>
      );
    }

    const statusInfo = statusMap[order.order_status] || {
      text: "Status Tidak Diketahui",
      variant: "secondary",
    };

    const paymentStatusInfo = paymentStatusMap[order.payment_status] || {
      text: "Status Tidak Diketahui",
      variant: "secondary",
    };

    const handlePayFinal = () => {
      payFinalMutation.mutate(order.id.toString());
    };


    return (
      <div className="container mt-20 mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="bg-muted/50 rounded-t-lg">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">
                    Detail Pesanan
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Pesanan #{order.order_number}
                  </p>
                </div>
                <Badge variant={statusInfo.variant} className="text-base">
                  {statusInfo.text}
                </Badge>
                <Badge variant={paymentStatusInfo.variant} className="text-base">
                  {paymentStatusInfo.text}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Ringkasan Pesanan */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Tanggal Pesanan</p>
                  <p className="font-medium">
                    {new Date(order.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Total Pesanan</p>
                  <p className="font-medium text-lg text-primary">
                    {formatRupiah(order.total_amount)}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Jumlah Dibayar</p>
                  <p className="font-medium text-lg text-primary">
                    {formatRupiah(order.amount_paid)}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Sisa Tagihan</p>
                  <p className="font-medium text-lg text-primary">
                    {formatRupiah(order.remaining_balance)}
                  </p>
                </div>
              </div>

              <Separator />

              {/* Item yang Dipesan */}
              <div>
                <h4 className="font-semibold mb-4 text-foreground">
                  Item yang Dipesan
                </h4>
                <div className="space-y-4">
                  {(order.items || []).map((item) => {
                    // Build image src using the utility function
                    const imageUrl = getImageUrl(
                      item.product.featured_image?.image
                    );

                    return (
                      <div key={item.id} className="flex items-start space-x-4">
                        <img
                          src={imageUrl}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded-md border"
                        />
                        <div className="flex-grow">
                          <p className="font-semibold text-foreground">
                            {item.product.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Jumlah: {item.quantity}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Varian:{" "}
                            {item.variant?.options
                              ?.map((o) => o.value)
                              .join(", ") || "-"}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-foreground">
                          {formatRupiah(item.sub_total)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Separator />

              {/* Detail Pernikahan & Pengiriman */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4 text-foreground">
                    Informasi Pernikahan
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-muted-foreground">Mempelai:</span>{" "}
                      {order.custom_data?.bride_full_name} &{" "}
                      {order.custom_data?.groom_full_name}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Akad:</span>{" "}
                      {order.custom_data?.akad_date &&
                        new Date(
                          order.custom_data.akad_date
                        ).toLocaleDateString("id-ID")}{" "}
                      di {order.custom_data?.akad_location}
                    </p>
                    <p>
                      <span className="text-muted-foreground">Resepsi:</span>{" "}
                      {order.custom_data?.reception_date &&
                        new Date(
                          order.custom_data.reception_date
                        ).toLocaleDateString("id-ID")}{" "}
                      di {order.custom_data?.reception_location}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-foreground">
                    Alamat Pengiriman
                  </h4>
                  <p className="text-sm whitespace-pre-line text-muted-foreground">
                    {order.shipping_address}
                  </p>
                </div>
              </div>
              {order.payment_status === "partially_paid" && (
                <div className="mt-6 text-center">
                  <Button
                    onClick={handlePayFinal}
                    disabled={payFinalMutation.isPending || order.remaining_balance <= 0}
                  >
                    {payFinalMutation.isPending
                      ? "Membuka Pembayaran..."
                      : "Lakukan Pelunasan"}
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Selesaikan pembayaran untuk melanjutkan pesanan Anda.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // --- Render List of Orders ---
  const orders = ordersData;
  if (!orders || orders.length === 0) {
    return (
      <div className="container mt-20 mx-auto text-center py-20">
        <h1 className="text-2xl font-bold text-foreground">
          Belum Ada Pesanan
        </h1>
        <p className="text-muted-foreground">
          Anda belum memiliki pesanan apapun. Silakan jelajahi produk kami!
        </p>
        <Link
          to="/products"
          className="mt-4 inline-block bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80"
        >
          Jelajahi Produk
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-20 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">
        Daftar Pesanan Anda
      </h1>
      <div className="space-y-4">
        {orders.map((order) => {
          const statusInfo = statusMap[order.order_status] || {
            text: "Status Tidak Diketahui",
            variant: "secondary",
          };
          const paymentStatusInfo = statusMap[order.payment_status] || {
            text: "Status Tidak Diketahui",
            variant: "secondary",
          };
          return (
            <Card key={order.id}>
              <CardContent className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-grow mb-2 md:mb-0">
                  <Link
                    to={`/status-pesanan/${order.id}`}
                    className="text-lg font-semibold hover:underline text-foreground"
                  >
                    Pesanan #{order.order_number}
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Tanggal:{" "}
                    {new Date(order.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <p className="text-md font-bold text-foreground">
                    Total: {formatRupiah(order.total_amount)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sisa Tagihan: {formatRupiah(order.remaining_balance)}
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <Badge variant={statusInfo.variant} className="text-base">
                    {statusInfo.text}
                  </Badge>
                  <Badge
                    variant={paymentStatusInfo.variant}
                    className="text-base"
                  >
                    {paymentStatusInfo.text}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default OrderStatusPage;
