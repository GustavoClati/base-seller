import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

type BrandWordmarkProps = {
  href?: string;
  className?: string;
};

export function BrandWordmark({
  href = "/",
  className = "",
}: BrandWordmarkProps) {
  return (
    <Link
      aria-label={`${siteConfig.brandName}, página inicial`}
      className={`brand-wordmark ${className}`}
      href={href}
    >
      <span aria-hidden="true" className="brand-wordmark__mark" />
      <span>{siteConfig.brandName}</span>
    </Link>
  );
}
