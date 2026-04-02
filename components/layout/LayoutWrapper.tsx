"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsappButton from "@/components/common/WhatsappButton";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // ✅ Hide on login & register pages
  const hideLayout =
    pathname === "/login" || pathname === "/register";

  return (
    <>
      {/* Navbar */}
      {!hideLayout && <Navbar />}

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      {!hideLayout && <Footer />}

      {/* WhatsApp */}
      {!hideLayout && <WhatsappButton />}
    </>
  );
}