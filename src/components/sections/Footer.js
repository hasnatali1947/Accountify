/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SocialLinks } from "../SocialLinks";
import { cn } from "@/lib/utils";

export function Footer({ copyright, logo, links, social, ...rest }) {
  return (
    <footer className="bg-base-100 dark:bg-base-900 pt-6" {...rest}>
      <div className="container px-4 mx-auto">
        <div
          className={cn(
            "flex flex-col md:flex-row justify-between items-center gap-4 py-4 xs:py-6"
          )}
        >
          <img
            src="./logoblack.png"
            alt="logo"
            className="h-10 w-auto opacity-70 hover:opacity-100 dark:invert"
          />
          <div className="flex flex-row gap-4 text-sm">
            {links.map((link, index) => (
              <Link href={link.href} key={index}>
                {link.label}
              </Link>
            ))}
          </div>
          <SocialLinks links={social} />
        </div>

        <div className="border-t border-base py-2 xs:py-4 text-center flex flex-col xs:flex-row items-center justify-between gap-1 text-[11px] xs:text-sm">
          <p className="text-xs xs:text-sm">&copy; {copyright}</p>
          <span className="text-xs xs:text-sm text-muted italic">
            Easy Paise : 0315-2323402
          </span>
          <p className="text-xs xs:text-sm">
            Developed by Accountify{" "}
            
          </p>
        </div>
      </div>
    </footer>
  );
}
