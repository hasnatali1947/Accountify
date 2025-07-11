
  const whatsappButton = () => {
    const phoneNumber = "+923369005380"; // ⬅️ Replace with your full WhatsApp number (with country code)
    const message = "Hello! I'm interested in your TikTok UK account service.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };
export const header = {

  logo: {
    src: "./logoblack.png",
    alt: "logo",
    href: "/",
  },
  links: [
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "Pricing",
      href: "#pricing",
    },
    {
      label: "Testimonials",
      href: "#testimonials",
    },
    {
      label: "FAQs",
      href: "#faqs",
    },
  ],
  buttons: [
    {
      label: "WhatsApp: +92 3369005380",
      href: "#",
      color: "transparent",
      size: "small",
      onClick: whatsappButton,
    },
    // {
    //   label: "Sign Up",
    //   href: "#",
    //   color: "dark",
    //   size: "small",
    // },
  ],
};
