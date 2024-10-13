import localFont from "next/font/local";
import "./globals.css";
import Header from "./header";
import { Footer } from "./footer";


export const metadata = {
  title: "TetroFlow - A blazing fast and open-source in-memory storage",
  description: "A blazing fast and open-source in-memory storage with nanosecond response for your project",
  image: "/favicon.ico",
  url: "https://tetroflow.dikov.at",
  type: "website",
  keywords: "in-memory, storage, database, open-source, fast, nanosecond, response, tetroflow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        <div className="bg-gray-50">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
