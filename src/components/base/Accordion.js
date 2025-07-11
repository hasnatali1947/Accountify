import React from "react";
import * as RAccordion from "@radix-ui/react-accordion";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export function Accordion({ items = [] }) {
  return (
    <RAccordion.Root
      className="w-full rounded-md divide-y divide-base-200 dark:divide-base-800"
      type="single"
      collapsible
    >
      {items?.length > 0 &&
        items.map((item, index) => (
          <RAccordion.Item
            className={cn(
              "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10"
            )}
            key={index}
            value={index + 1}
          >
            <RAccordion.Header className="flex">
              <RAccordion.Trigger
                className={cn(
                  "group flex w-full items-start justify-between gap-4 text-left py-5 outline-none",
                  "text-base xs:text-lg sm:text-xl md:text-2xl text-title h-20 hover:text-muted font-normal font-display"
                )}
              >
             <span className="flex-1">{item.title}</span>
                <Icon
                  icon="tabler:chevron-down"
                  className={cn(
                    "shrink-0 mt-1 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180",
                    "size-5"
                  )}
                  aria-hidden
                />
              </RAccordion.Trigger>
            </RAccordion.Header>
            <RAccordion.Content
              className={cn(
                "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden"
              )}
            >
              <div className="py-5 text-sm sm:text-base text-muted-foreground">{item.body}</div>
            </RAccordion.Content>
          </RAccordion.Item>
        ))}
    </RAccordion.Root>
  );
}
