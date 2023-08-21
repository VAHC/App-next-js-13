  import '../styles/globals.css'
  import { Navigation } from '../components/Navigation'
  import {font} from './font.js'
  
  export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <head>
          <title>🙀</title>
        </head>
        <body className={font.variable}>
          <Navigation />
          {children}
        </body>
      </html>
    )
  }
