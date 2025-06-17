// app/layout.js
import './globals.css';
import Navbar from './components/Navbar';


export const metadata = {
  title: 'ZODISH | Food Delivery',
  description: 'Delicious food delivered fast!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
