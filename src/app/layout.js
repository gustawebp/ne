import { Poppins } from "next/font/google";
import "./globals.css";
import "./css/aside.css";
import "./css/cards.css";

import { Aside } from "./layout/Aside";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Gustavo Code Connect",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <div className="cont">
          <div className="row">
            <div className="col-xl-2 pe-0 min">
              <Aside />
            </div>

            <div className="col-xl-10 min ps-1">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
