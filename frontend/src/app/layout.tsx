import Footer from "@/components/shared/Footer";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { AuthProvider } from "@/features/auth/context/AuthContext";
import { CartProvider } from "@/features/cart/context/CartContext";
import {
  ProductsProvider
} from "@/features/products/context/ProductsContext";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
});


export const metadata: Metadata = {
  title: {
    default: "MATCH--CAFE | تجربه اصیل ماچا و قهوه",
    template: "%s | MATCH--CAFE",
  },
  description:
    "کافه و فروشگاه تخصصی ماچا، چای، قهوه و ابزارهای دم‌آوری پریمیوم",
  keywords: [
    "Matcha",
    "Coffee",
    "Tea",
    "Cafe",
    "ماچا",
    "قهوه",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} antialiased`}
    >
<body className="min-h-full flex flex-col bg-white text-slate-900">

<AuthProvider>

  <CartProvider>

    <ProductsProvider>

      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />

    </ProductsProvider>

  </CartProvider>

</AuthProvider>

</body>
    </html>
  );
}
