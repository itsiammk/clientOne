import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="Swati Enterprises: Premier construction experts with 12+ years experience. Specializing in Steel Structure Erection, Bridge Construction, PEB, Fabrication, Engineering Consultancy, Detailing, Labor Supply, and Logistics. Top-rated construction services for all your metal and building needs. Visit our website for expert solutions in steel structures, bridges, and more." />
        <meta name="keywords" content="Swati Enterprises, Steel Structure Erection, Bridge Construction, Pre-Engineered Building, PEB, Steel Fabrication, Engineering Consultancy, Shop Drawings, Construction Labor Supply, Logistics Services, Export Packing, Best Construction Website, Metal Structures, Construction Experts" />
        <title>Swati Enterprises - Expert Steel Structure & Bridge Construction</title>
      </Head>
      <Layout>
        <NextNProgress color={'#ffffff99'} height={6} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}