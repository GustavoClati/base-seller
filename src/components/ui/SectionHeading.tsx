import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading section-heading--${align} ${className}`}
    >
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
