import localFont from "next/font/local";
import "../styles/global.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex justify-evenly bg-emerald-800 py-[10px]">
          <Link className="navFont" href={"/"}>
            Home
          </Link>
          <Link className="navFont" href={"/champions"}>
            Champions
          </Link>
          <Link className="navFont" href={"/rotation"}>
            Rotation
          </Link>
          <Link className="navFont" href={"/items"}>
            Items
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
