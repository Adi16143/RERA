import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Sidebar from './Components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        < Main />
        <Header />
        <div class = "main">
      <div class = "side">
      <Sidebar /></div>
      <div class = "form">
      {children}
      </div>
    </div>
        
        </body>
    </html>
  )
}
