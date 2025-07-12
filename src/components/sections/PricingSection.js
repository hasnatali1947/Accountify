/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SectionHeading } from "#/SectionHeading";
import { Tabs } from "#/base";
import { PricingCard } from "#/cards";

export function PricingSection({
  title,
  description,
  badge,
  pricing,
  ...rest
}) {
  const [tenure, setTenure] = React.useState("yearly");
  return (
    <section className="bg-base-100 dark:bg-base-900 py-24" {...rest}>
      <div className="container px-4 mx-auto min-h-screen">
        <SectionHeading
          align="center"
          title={title}
          description={description}
          badge={badge}
        />
        <div className="text-center my-10">
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
      </div>
    </section>
  );
}
