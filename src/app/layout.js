import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const metadata = {
  title: "Jason Chalangary",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen bg-red-500">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
