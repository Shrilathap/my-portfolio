import Layout from "@/components/layout/layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (   
  <Layout>
    <Component {...pageProps} />
  </Layout>
  );
}
