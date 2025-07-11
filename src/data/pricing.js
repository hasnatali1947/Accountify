const whatsappButton = () => {
  const phoneNumber = "+923369005380"; // ⬅️ Replace with your full WhatsApp number (with country code)
  const message = "Hello! I'm interested in your TikTok UK account service.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};


export const pricing = [
  // {
  //   name: "Free",
  //   description: "For small teams",
  //   value: {
  //     monthly: 0,
  //     yearly: 0,
  //   },
  //   unit: "per user/month",
  //   currency: "$",
  //   features: [
  //     "Unlimited users",
  //     "Unlimited projects",
  //     "Unlimited storage",
  //     "Unlimited support",
  //   ],
  //   button: {
  //     label: "Get started",
  //     href: "#",
  //     color: "light",
  //     icon: "tabler:arrow-right",
  //   },
  // },
  {
    name: "Without Gmail",
    // description: "For growing teams",
    value: {
      // monthly: 15,
      yearly: 500,
    },
    // unit: "per user/month",
    currency: "Rs",
    features: [
      "Real Tiktok UK accout",
      "Login detail & recovery",
      "100% working guarantee",
      "Delivered within 30 minutes",
    ],
    button: {
      label: "WhatsApp",
      href: "#",
      // icon: "tabler:rocket",
      onClick: whatsappButton,
    },
  },
  {
    name: "With Gmail",
    // description: "For large teams",
    value: {
      yearly: 600,
    },
    currency: "Rs",
    features: [
      "Real Tiktok UK accout",
      "Login detail & recovery",
      "100% working guarantee",
      "Delivered within 30-45 minutes",
      "We can also create Gmail for you (on request)",
    ],
    button: {
      label: "WhatsApp",
      href: "#",
      color: "dark",
      // icon: "tabler:mail",
      onClick: whatsappButton,
    },
  },
];
