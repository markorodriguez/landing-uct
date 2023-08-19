import './globals.css'

export const metadata = {
  title: 'UCT - Posgrado',
  description: 'Conoce nuestros programas de posgrado',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body >{children}</body>
    </html>
  )
}
