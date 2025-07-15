import "@/styles/globals.css";
import { Inter, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Head from "next/head";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Head>
        {/* Facebook Pixel Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1806881206568901');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* Facebook Pixel NoScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1806881206568901&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </Head>
      <main
        className={`${display.variable} ${body.variable} flex min-h-screen flex-col font-body text-base-600 dark:text-base-500 bg-base-50 dark:bg-base-950`}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
