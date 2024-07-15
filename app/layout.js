import { App }from './App'

import './globals.css'

export const metadata = {
  title: 'Pindie',
  description: 'Портал инди-игр',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
      <App>
        {children}
      </App>
      </body>
    </html>
  )
}
