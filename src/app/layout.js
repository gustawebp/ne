import { Poppins } from "next/font/google";
import "./globals.css";
import { Aside } from "./layout/Aside";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Gustavo Code Connect",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Aside />
        <div>{children}</div>
      </body>
    </html>
  );
}
