const whatsappButton = () => {
  const phoneNumber = "+923369005380"; // ⬅️ Replace with your full WhatsApp number (with country code)
  const message = "Hello! I'm interested in your TikTok UK account service.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};


export const pricing = [
  {
    name: "Without Gmail",
    originalValue: {
      yearly: 1000,
    },
    value: {
      yearly: 550,
    },
    currency: "Rs",
    features: [
      "Real TikTok UK account",
      "Login detail & recovery",
      "100% working guarantee",
      "Delivered within 30 minutes",
      "Payment accepted via Easypaisa & JazzCash",
    ],
    button: {
      label: "WhatsApp",
      href: "#",
      onClick: whatsappButton,
    },
  },
  {
    name: "With Gmail",
    originalValue: {
      yearly: 1500,
    },
    value: {
      yearly: 830,
    },
    currency: "Rs",
    features: [
      "Real TikTok UK account",
      "Login detail & recovery",
      "100% working guarantee",
      "Delivered within 30-45 minutes",
      "We can also create Gmail for you (on request)",
      "Payment accepted via Easypaisa & JazzCash",
    ],
    button: {
      label: "WhatsApp",
      href: "#",
      color: "dark",
      onClick: whatsappButton,
    },
  },
];
