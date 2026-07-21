import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Collection Portfolio Gallery | Aria International",
  description: "Explore high-resolution showcase images of our custom-made leather furniture, brass decor, handcrafted chest of drawers, and leather bound books series.",
  keywords: ["furniture gallery", "leather chest of drawers", "brass decor photos", "leather journal pictures"],
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
