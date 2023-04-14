import Head from "next/head";
import {
  HeroSection,
  LatestServices,
  CallToAction,
  TeamMembersSection,
} from "@/components/Home";
import ServicesSection from "@/components/Home/ServicesSection";
import ClientTestimonial from "@/components/Home/ClientTestimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ads Fission - Digital Marketing Agency</title>
        <meta
          name="description"
          content="We meet all of your marketing needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* hero section */}
      <HeroSection />
      {/* services section */}
      <ServicesSection />
      {/* call to action */}
      <CallToAction />
      {/* latest services */}
      <LatestServices />
      {/* client testimonial */}
      {/* <ClientTestimonial /> */}
      {/* our team members*/}
      <TeamMembersSection />
    </>
  );
}
