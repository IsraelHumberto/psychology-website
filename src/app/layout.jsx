import '@/styles/globals.scss'

import { Josefin_Sans, Sacramento } from 'next/font/google'

const josefins = Josefin_Sans({ 
  weigth: '100, 800',
  subsets: ['latin']
 })
 const sacramento = Sacramento({ weight: '400', subsets: ['latin'], variable: '--sacramento-font' })

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${josefins.className} ${sacramento.variable}`}>{children}</body>
    </html>
  )
}
