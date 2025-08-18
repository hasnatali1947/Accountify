/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { SectionHeading } from "#/SectionHeading";
import { Tabs } from "#/base";
import { PricingCard } from "#/cards";
import ProofModal from "../ProofModel";
// import { ProofModel } from "#/ProofModal"

export function PricingSection({
  title,
  description,
  badge,
  pricing,
  ...rest
}) {
  const [tenure, setTenure] = React.useState("yearly");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  // Combine all images from both plans
  const allProofImages = pricing.flatMap((plan) => plan.proofImages || []);

  const handleOpenModal = () => {
    setSelectedImages(allProofImages);
    setModalOpen(true);
  };
  return (
    <section className="bg-base-100 dark:bg-base-900 py-24" {...rest}>
      <div className="container px-4 mx-auto">
        <SectionHeading
          align="center"
          title={title}
          description={description}
          badge={badge}
        />
        <div className="text-center mb-10">
          <Tabs
            value={tenure}
            onChange={setTenure}
          // options={["monthly", "yearly"]}
          />
          <div className="text-sm mt-4">No hidden fees. Choose the plan that fits your needs and upgrade anytime.</div>
        </div>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pricing.map((price, index) => (
              <PricingCard key={index} {...price} tenure={tenure} />
            ))}
          </div>
        </div>

        {/* Single Proof Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleOpenModal}
            className="underline text-sm text-blue-600 hover:text-blue-800"
          >
            🔍 See Proof
          </button>
        </div>

        <ProofModal
          open={isModalOpen}
          onClose={() => setModalOpen(false)}
          images={selectedImages}
        />
      </div>
    </section>
  );
}