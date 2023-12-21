import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courierprime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "ToDo",
  description: "The coolest todo app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={courierprime.className}>{children}</body>
    </html>
  );
}
