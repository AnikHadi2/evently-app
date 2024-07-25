import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </section>
  );
}
