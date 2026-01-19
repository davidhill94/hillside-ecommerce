export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import CartProvider from "@/providers/CartProvider";
import { Toaster } from "react-hot-toast";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "Hillside Crafts",
  description: "Ecommerce application",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const { getCurrentUser } = await import("@/actions/getCurrentUser");
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={`${lato.className}`}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
              color: "#f5f5f5",
            },
          }}
        />
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar currentUser={currentUser} />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
