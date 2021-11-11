import type { AppProps } from 'next/app'
import '../styles/globals.css';
import {QueryClient, QueryClientProvider} from "react-query";
import NextNProgress from 'nextjs-progressbar';

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <QueryClientProvider client={queryClient}>
        <NextNProgress
            color={'#bbff5bff'}
        />
        <Component {...pageProps} />
      </QueryClientProvider>
  )
}
export default MyApp
