import Head from "next/head";
import { FeatureSection } from "@/components/sections/FeatureSection";
import {
  Header,
  HeroSection,
  TestimonialSection,
  FaqSection,
  Footer,
  PricingSection,
  LargeFeatureSection,
} from "../components/sections";

import {
  header,
  faqs,
  testimonials,
  features,
  pricing,
  footer,
} from "@/data";

export default function Home() {

  const whatsappButton = () => {
    const phoneNumber = "+923369005380"; // ⬅️ Replace with your full WhatsApp number (with country code)
    const message = "Hello! I'm interested in your TikTok UK account service.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Head>
        <title>Accountify</title>
      </Head>
      <Header
        logo={header.logo}
        links={header.links}
        buttons={header.buttons}
      />
      <HeroSection
        id="home"
        badge={{
          href: "#",
          icon: "tabler:arrow-right",
          label: "😻 Learn What's New",
        }}
        title="Get a Verified TikTok UK Account – Fast, Safe, and Ready to Grow!"
        description="Get a Verified TikTok UK Account – Fast, Safe, and Ready to Grow!"
        buttons={[
          {
            href: "#",
            label: "Connect On WhatsApp",
            color: "dark",
            onClick: whatsappButton,
          },

        ]}
        image={{
          src: "./tablet-mockup.png",
          alt: "Product Screenshot on Tablet",
          className: "w-full h-auto",
        }}
        clientsLabel="Proven Track Record with 10,000+ Happy Customers"
      // clients={clients}
      />
      <FeatureSection
        id="features"
        title="Discover Our Amazing Features"
        description="From verified UK TikTok accounts to lightning-fast delivery and full support — here’s why customers trust us to kickstart their TikTok journey. 🚀"
        features={features.slice(9, 19)}
      />
      <LargeFeatureSection
        title="🏆 Creator Award Program"
        description="Join our Creator Award Program and get recognized for your growth and creativity!"
        list={features.slice(4, 9)}
        image={{
          src: "./mob1.png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />
      <LargeFeatureSection
        reverse={true}
        title="🚀 Boost Your TikTok Game Instantly"
        description="Get your hands on authentic UK TikTok accounts ready to use for business, influencers, or brand growth."
        list={features.slice(0, 4)}
        image={{
          src: "./mob2.png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain -rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />
      <PricingSection
        id="pricing"
        title="Pricing for Everyone"
        description="Simple, transparent pricing built for everyone."
        badge={{
          leading: true,
          icon: "tabler:credit-card",
          label: "Plans",
        }}
        pricing={pricing}
      />
      <TestimonialSection
        id="testimonials"
        title="Love from our customers"
        description="We’re proud to have helped creators, marketers, and business owners grow with real UK TikTok accounts. Here’s what some of our happy customers have to say. 💬"
        badge={{
          leading: true,
          icon: "tabler:heart",
          label: "TESTIMONIALS",
        }}
        testimonials={testimonials}
        button={{
          icon: "tabler:brand-x",
          label: "Share Your Feedback on",
          href: "#",
          color: "white",
        }}
      />
      <FaqSection
        id="faqs"
        title="Frequently Asked Questions"
        description="We’ve answered some common questions below to help you understand the service better. If you still have any doubts, feel free to contact us on WhatsApp anytime. We’re here to help! 💬"
        buttons={[
          {
            label: "Contact Support",
            href: "#",
            color: "primary",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        faqs={faqs}
      />
      {/* <CtaSection
        title="Ready to get started?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
        buttons={[{ label: "Start for Free", href: "#", color: "dark" }]}
      /> */}
      <Footer
        id="footer"
        copyright={footer.copyright}
        logo={footer.logo}
        social={footer.social}
        links={footer.links}
      />
    </>
  );
}
