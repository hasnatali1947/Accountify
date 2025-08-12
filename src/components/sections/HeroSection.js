"use client";
import { useState } from "react";
import { Badge, Button } from "#/base";
import { Brands } from "#/Brands";
import { cn } from "@/lib/utils";

export function HeroSection({
  badge,
  title,
  description,
  buttons,
  image,
  clientsLabel,
  clients,
  ...rest
}) {
  const [showModal, setShowModal] = useState(false);

  const handleBadgeClick = (e) => {
    e.preventDefault(); // prevent default link behavior
    setShowModal(true);
  };

  return (
    <section {...rest}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="flex flex-col justify-center items-center gap-4 text-center max-w-3xl mx-auto mt-32 pb-12">
            <div onClick={handleBadgeClick} className="cursor-pointer">
              <Badge {...badge} />
            </div>
            <h1 className="text-6xl font-display font-semibold title-gradient">
              {title}
            </h1>
            <p className="text-xl">{description}</p>
            {buttons.length > 0 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button} />
                ))}
              </div>
            )}
          </div>

          <div>
            <img
              src={image.src}
              alt={image.alt}
              className={cn("w-full h-auto", image.className)}
            />
          </div>

          <div className="text-sm mb-8 font-bold">{clientsLabel}</div>
          <Brands clients={clients} />

          {/* ✅ Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
              <div className="bg-white dark:bg-base-900 rounded-lg shadow-lg max-w-sm w-full p-6 relative text-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-2 text-xl text-gray-400 hover:text-gray-600"
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold mb-2">🎁 August Offer!</h2>
                <p className="text-sm text-muted">
                  Buy <b>2 TikTok UK Accounts</b> and get <b>1 FREE</b> 🎉
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
