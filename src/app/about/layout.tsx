import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sunil Chauhan & Aria International | Legacy of Craft",
  description: "Learn about the founder Sunil Chauhan and the history of Aria International. Discover our commitment to handcrafting luxury leather furniture and export-quality brass decorative items in Faridabad.",
  keywords: ["Sunil Chauhan", "Aria International history", "Faridabad furniture factory", "Artisan crafts India"],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
