import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Aria International | Direct Business Inquiries",
  description: "Get in touch with Aria International. Direct contact information for bespoke leather furniture, custom tables, brass statues, and corporate sourcing inquiries.",
  keywords: ["contact Aria International", "Aria International email", "furniture factory phone number", "order custom leather furniture"],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
