import { Inter } from "next/font/google";
import "./globals.css";

// import localFont from "next/font/local"
// const restora = localFont({ src:"public/fonts/RestoraExtraLight.otf"})


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MPLoc, location de matériel de BTP",
  description: "test website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
