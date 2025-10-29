import { Inter } from 'next/font/google'
import 'semantic-ui-css/semantic.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/scss/global.scss";
import { AuthProvider,CartProvider  } from '@/context';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Gaming - Tus juegos favoritos", description: "Tus juegos favoritos para PlayStation, Xbos, PC al mejor precio"
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
