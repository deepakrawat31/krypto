import "./globals.css";

export const metadata = {
   title: "Krypto",
   description: "Manage  your Cryptocurrency",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="bg-black/95 text-slate-100 font-bricolage">
            {children}
         </body>
      </html>
   );
}
