const whatsappButton = () => {
  const phoneNumber = "+923369005380"; // ⬅️ Replace with your full WhatsApp number (with country code)
  const message = "Hello! I'm interested in your TikTok UK account service.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};


export const pricing = [
  {
    name: "With Gmail",
    originalValue: {
      yearly: 1100,
    },
    value: {
      yearly: 550,
    },
    proofImages: ["/proof1.jpg", "/proof2.jpg", "/proof3.jpg", "/proof4.jpg"],
    currency: "Rs",
    features: [
      "Real TikTok UK & UK account",
      "Login detail & recovery",
      "100% working guarantee",
      "Delivered within 30 minutes, after payment confirmation",
      "Payment accepted via Easypaisa & JazzCash",
    ],
    button: {
      label: "Order Now",
      href: "#",
      onClick: whatsappButton,
    },
  },
  {
    name: "Social Media Package",
    originalValue: {
      yearly: 25,
    },
    value: {
      yearly: 10,
    },
    currency: "Rs",
    features: [
      "Post likes to Tiktok, Twitter, Facebook, Instagram",
      "Followers to TikTok, Twitter, Facebook, Instagram",
      "Views and Engagements to TikTok, Twitter, Facebook, Instagram",
      "Delivered within hours, after payment confirmation",
      "Contact for exact requirements",
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
