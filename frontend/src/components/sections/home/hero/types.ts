export type SlideMedia = {
  type: "image" | "video";
  src: string;
  poster?: string;
};

export type HeroOffer = {
  label: string;
  endsAt: string;
};

export type HeroSlide = {
  id: string;
  media: SlideMedia;

  eyebrow: string;
  title: string;
  description: string;

  ctaLabel: string;
  ctaHref: string;

  offer?: HeroOffer;
};

export type CafeContact = {
  phone: string;
  address: string;
};
export type BusinessHours = {
  [day: number]: {
    open: string;
    close: string;
  };
};
