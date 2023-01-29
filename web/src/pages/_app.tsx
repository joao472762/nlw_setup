import '../styles/global.css';
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'

export default function App({ Component, pageProps }: AppProps) {


  return( 
    <div className={
      
      `
        w-screen  
        min-h-screen 
        flex items-center 
        justify-center

      `
      }
    >
       <Component {...pageProps} />
    </div>
  )
}
