import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logoTitle.jpg" />
        <meta name="description" content="Swati Enterprises: Premier construction experts with over 12 years of experience, specializing in Steel Structure Erection, Bridge Construction, PEB, Fabrication, Engineering Consultancy, Detailing, Labor Supply, and Logistics. Delivering high-quality work that meets or exceeds clients' expectations." />
        <meta name="keywords" content="Swati Enterprises, Steel Structure Erection, Bridge Construction, Pre-Engineered Building, PEB, Steel Fabrication, Engineering Consultancy, Shop Drawings, Construction Labor Supply, Logistics Services, Export Packing, Construction Experts, Metal Treatment, Infrastructure Solutions" />
        <title>Swati Enterprises - Expert Steel Structure & Bridge Construction</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Swati Enterprises",
                "url": "https://www.swatientrprises.com",
                "logo": "https://www.swatientrprises.com/logo.png",
                "description": "Premier construction experts specializing in Steel Structure Erection, Bridge Construction, PEB, Fabrication, Engineering Consultancy, Detailing, Labor Supply, and Logistics.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Flat No 301, W-H, CL-1, Kanchanganga Apt., Hingna Nagpur",
                  "addressLocality": "Nagpur",
                  "addressRegion": "Maharashtra",
                  "postalCode": "441110",
                  "addressCountry": "India"
                },
                "telephone": "+91 9971185889",
                "email": "info@swatienterprises.com",
                "sameAs": [
                  "https://www.facebook.com/swatientrprises",
                  "https://twitter.com/swatientrprises",
                  "https://www.linkedin.com/company/swatientrprises"
                ]
              }
            `
          }}
        />
      </Head>
      <Layout>
        <NextNProgress color={'#ffffff99'} height={6} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}