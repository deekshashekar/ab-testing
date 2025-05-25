import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/examples-ui/layout'
import { getLayout } from '@vercel/examples-ui'
import '@vercel/examples-ui/globals.css'
import { GoogleTagManager } from '@next/third-parties/google'


export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)
  return (
    <Layout
      title="AB Testing with buckets"
      path="edge-middleware/ab-testing-simple"
    >
      <Component {...pageProps} />
      // TODO: add utm parameters
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
    </Layout>
  )
}
