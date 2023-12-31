import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        <div>
          <Header />
          <main className="pt-nav-height bg-page-gradient">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
