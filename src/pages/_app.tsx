import '@assets/chrome-bug.css'
import '@assets/main.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

// for more details about react-query see this link:
// https://github.com/tannerlinsley/react-query/tree/master/examples/nextjs

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
