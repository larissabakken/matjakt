import type { Metadata } from 'next';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MatJakt',
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <Header />
        {props.children}
        <Footer />
      </body>
    </html>
  );
}
