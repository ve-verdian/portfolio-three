import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className="text-slate-700 flex flex-col gap-6">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Layout>
  );
}

export default MyApp;
