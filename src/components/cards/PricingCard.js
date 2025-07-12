import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Button } from "../base";

export const PricingCard = ({
  tenure = "monthly",
  name,
  description,
  value,
  originalValue,
  unit,
  features,
  button,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-start items-start p-6 rounded-xl bg-white dark:bg-base-950",
        className
      )}
    >
      <h5 className="text-title font-medium text-xl">{name}</h5>
      <p>{description}</p>
      <div className="w-full border-b border-base my-6"></div>
      <div className="inline-flex gap-2 items-baseline">
        <span className="text-2xl text-muted">Rs</span>

        {originalValue?.[tenure] && (
  <div className="flex items-baseline gap-2">
    {/* <span className="text-2xl text-muted">Rs</span> */}
    <span className="text-xl text-muted line-through">
      {originalValue[tenure]}
    </span>

    <h2 className="text-5xl font-semibold leading-none text-title">
      {value[tenure]}
    </h2>

    {/* ✅ Discount Percentage */}
    <span className="text-sm text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">
      {Math.round(
        ((originalValue[tenure] - value[tenure]) / originalValue[tenure]) * 100
      )}
      % OFF
    </span>
  </div>
)}


        <h2 className="text-5xl font-semibold leading-none text-title">
          {/* {value[tenure]} */}
        </h2>

        {unit && <span className="text-sm text-muted">{unit}</span>}
      </div>

      <ul className="flex flex-col gap-2 my-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Icon icon="tabler:check" className="size-5 text-primary-500 " />{" "}
            <span className="text-sm text-body">{feature}</span>
          </li>
        ))}
      </ul>
      <Button block {...button} />
    </div>
  );
};
