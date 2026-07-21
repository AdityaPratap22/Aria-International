import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Aria International | Global Quality Standards",
  description: "Discover our quality pillars, certified export packaging controls, ethical sourcing practices, and corporate milestones showing 20+ years of trust.",
  keywords: ["export quality furniture", "ethical sourcing India", "furniture packing standards", "artisan support"],
};

export default function WhyUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
