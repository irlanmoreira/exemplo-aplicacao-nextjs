import './globals.scss'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import { UserProvider } from '@/context/UserContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <UserProvider>
          <Header />
          <div className='container'>
            {children}
          </div>
        </UserProvider>
      </body>
    </html>
  )
}
