import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Products Catalog | Aria International",
  description: "Browse our luxury collection of top-grain leather furniture, bespoke custom dining tables, leather boxes, brass statues, and antique leather bound books.",
  keywords: ["leather chairs", "dining tables", "leather boxes", "brass statues", "leather journals"],
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
