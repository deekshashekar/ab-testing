import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/examples-ui/layout'
import { getLayout } from '@vercel/examples-ui'
import '@vercel/examples-ui/globals.css'
import { GoogleTagManager } from '@next/third-parties/google'



export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)
  console.log('GTM ID in console from env:', process.env.NEXT_PUBLIC_GTM_ID); // Temporary debug log
  return (
    <Layout
      title="AB Testing with buckets"
      path="edge-middleware/ab-testing-simple"
    >
      <Component {...pageProps} />
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
    </Layout>
  )
}
