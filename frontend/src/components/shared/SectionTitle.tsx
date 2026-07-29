import type { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  description?: ReactNode;
}

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">

      <p
        className="
        mb-4
        text-xs
        font-light
        tracking-[0.35em]
        text-[#355e3b]
        "
      >
        MATCHA COLLECTION
      </p>


      <h2
        className="
        text-3xl
        font-light
        text-[#0d1a12]
        sm:text-4xl
        "
      >
        {title}
      </h2>


      {description && (
        <p
          className="
          mx-auto
          mt-4
          max-w-xl
          text-sm
          font-light
          leading-8
          text-[#0d1a12]/60
          "
        >
          {description}
        </p>
      )}

    </div>
  );
}
