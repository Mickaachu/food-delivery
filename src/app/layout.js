import './globals.css'
import {Footer, Navbar} from '../../components/index'
export const metadata = {
  title: 'Food App',
  description: 'Food app website, download now!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
