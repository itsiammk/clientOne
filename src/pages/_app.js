import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="Welcome to the world of metal magic, where we've honed our skills
            for over 12 years. We're not your ordinary metal treatment company;
            we're small but mighty, specializing in erecting sturdy steel
            structures, crafting all sorts of steel wonders, and creating
            advanced Pre-Engineered Buildings (PEB). But that's not all! We're
            also your go-to experts for engineering advice, detailed shop
            drawings, and providing skilled workers for various construction
            tasks. Oh, and we even help with logistics and export packing – talk
            about versatile! <br /> But what truly sets us apart is our expertise in
            BRIDGES and FOB. We are the architects of connections that transcend
            time, where each bridge is not just a physical structure but a
            testament to our engineering prowess. Our secret ingredients? A
            highly skilled team, state-of-the-art facilities, and an unwavering
            commitment to making your metal dreams come true. So, whether you're
            building dreams or bridges, we're here to turn your vision into
            reality." />
        <title>Swati Enterprises</title>
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
