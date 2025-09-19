// components/ui/StickyScrollGallery.tsx
'use client';

import React, { forwardRef, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// OPTIONAL: if you truly need Lenis here, keep the import:
import { ReactLenis } from 'lenis/react';

type ImageItem = { src: string; alt?: string };

type StickyScrollGalleryProps = {
  left?: ImageItem[];
  middle?: ImageItem[]; // 3 works best
  right?: ImageItem[];
  title?: React.ReactNode;
  /** enable local Lenis here only if you DO NOT have a global Lenis already */
  enableLocalLenis?: boolean; // default false
};

// your imports (unchanged)
import a1 from '@/assets/aboutimage/img1.webp';
import a2 from '@/assets/aboutimage/img2.webp';
import a3 from '@/assets/aboutimage/img3.webp';
import a4 from '@/assets/aboutimage/img4.webp';
import a5 from '@/assets/aboutimage/img5.webp';
import a6 from '@/assets/aboutimage/img6.webp';
import a7 from '@/assets/aboutimage/img7.webp';
import a8 from '@/assets/aboutimage/img8.webp';
import a9 from '@/assets/aboutimage/img9.webp';
import a10 from '@/assets/aboutimage/img10.webp';
import a11 from '@/assets/aboutimage/img11.webp';
import a12 from '@/assets/aboutimage/img12.webp';
import a13 from '@/assets/aboutimage/img13.webp';

const defaultLeft: ImageItem[] = [
  { src: a1, alt: 'Gallery image 1' },
  { src: a2, alt: 'Gallery image 2' },
  { src: a3, alt: 'Gallery image 3' },
  { src: a4, alt: 'Gallery image 4' },
  { src: a5, alt: 'Gallery image 5' },
];
const defaultMiddle: ImageItem[] = [
  { src: a6, alt: 'Gallery image 6' },
  { src: a7, alt: 'Gallery image 7' },
  { src: a8, alt: 'Gallery image 8' },
];
const defaultRight: ImageItem[] = [
  { src: a9, alt: 'Gallery image 9' },
  { src: a10, alt: 'Gallery image 10' },
  { src: a11, alt: 'Gallery image 11' },
  { src: a12, alt: 'Gallery image 12' },
  { src: a13, alt: 'Gallery image 13' },
];

const Hero = ({ children }: { children?: React.ReactNode }) => (
  <section className="text-white h-[45svh] md:[55svh] w-full grid place-content-center sticky top-0 overflow-hidden ">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] mb-6 md:mb-0 pb-6 md:pb-0" />
    <h1
      className="
        text-2xl sm:text-3xl md:text-3xl 
        px-4 sm:px-8 md:px-16 lg:px-28
        font-semibold text-left sm:text-center
        tracking-tight leading-[140%] sm:leading-[130%] lg:leading-[100%]
      "
    >
      {children ?? (
        <>
          When I step away from pixels and prototypes,
          <br className="hidden sm:block" />
          I’m on the road uncovering flavors, cities, and stories
          <br className="hidden sm:block" />
          often guided by a podcast and inspired by every sunset along the way.
        </>
      )}
    </h1>
  </section>
);

const RevealFigure = ({
  item,
  h = 'h-[38svh] md:h-96',
  delay = 0,
}: {
  item: ImageItem;
  h?: string;
  delay?: number;
}) => (
  <figure className="w-full">
    {/* keep this as a plain <img> to reduce observer work; motion is fine too */}
    <img
      src={item.src}
      alt={item.alt ?? ''}
      className={`w-full ${h} align-bottom object-cover rounded-md select-none transform-gpu will-change-transform [backface-visibility:hidden]`}
      loading="lazy"
      decoding="async"
      draggable={false}
      // for browsers that support it, hint lower priority:
      // @ts-ignore
      fetchpriority="low"
    />
  </figure>
);

const StickyCell = ({
  item,
  container,
  rowIndex,
  rows = 3,
}: {
  item: ImageItem;
  container: React.RefObject<HTMLDivElement>;
  rowIndex: number;
  rows?: number;
}) => {
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  // lighter work: small parallax only, no scale
  const ranges = useMemo(
    () => [
      { y: [-20, 20], o: [0.95, 1] },
      { y: [-14, 14], o: [0.95, 1] },
      { y: [-10, 10], o: [0.95, 1] },
    ],
    []
  );
  const r = ranges[rowIndex % rows];
  const y = useTransform(scrollYProgress, [0, 1], r.y as [number, number]);
  const opacity = useTransform(scrollYProgress, [0, 1], r.o as [number, number]);

  return (
    <motion.img
      style={{ y, opacity }}
      src={item.src}
      alt={item.alt ?? ''}
      className="h-full w-full align-bottom object-cover rounded-md select-none transform-gpu will-change-transform [backface-visibility:hidden]"
      loading="lazy"
      decoding="async"
      draggable={false}
      // @ts-ignore
      fetchpriority="low"
    />
  );
};

const CoreGallery = React.forwardRef<HTMLElement, StickyScrollGalleryProps>(
  ({ left, middle, right, title }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const L = left ?? defaultLeft;
    const M = (middle ?? defaultMiddle).slice(0, 3);
    const R = right ?? defaultRight;

    return (
      <main className="bg-black" ref={ref}>
        <div className="wrapper">
          <Hero>{title}</Hero>
        </div>

        {/* GALLERY */}
        <section ref={containerRef} className="text-white w-full bg-slate-950">
          <div className="grid grid-cols-12 gap-1.5 md:gap-2">
            {/* LEFT masonry */}
            <div
              className="
                grid gap-1.5 md:gap-2 col-span-4
                [content-visibility:auto] [contain:layout_paint_style]
              "
            >
              {L.map((item, i) => (
                <RevealFigure key={`L-${i}`} item={item} />
              ))}
            </div>

            {/* MIDDLE sticky */}
            <div className="sticky top-0 h-[85svh] md:h-screen w-full col-span-4 gap-1.5 md:gap-2 grid grid-rows-3">
              {M.map((item, i) => (
                <figure className="w-full h-full" key={`M-${i}`}>
                  <StickyCell item={item} container={containerRef} rowIndex={i} />
                </figure>
              ))}
            </div>

            {/* RIGHT masonry */}
            <div
              className="
                grid gap-1.5 md:gap-2 col-span-4
                [content-visibility:auto] [contain:layout_paint_style]
              "
            >
              {R.map((item, i) => (
                <RevealFigure key={`R-${i}`} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }
);
CoreGallery.displayName = 'CoreGallery';

/**
 * Public component:
 * - By default, NO local Lenis (assumes you already have a global smooth scroll).
 * - If you do NOT have a global one, set enableLocalLenis={true}.
 */
const StickyScrollGallery = forwardRef<HTMLElement, StickyScrollGalleryProps & { enableLocalLenis?: boolean }>(
  ({ enableLocalLenis = false, ...props }, ref) => {
    if (!enableLocalLenis) {
      return <CoreGallery {...props} ref={ref as any} />;
    }
    // Only use ONE Lenis in your whole app.
    return (
      <ReactLenis
        root
        options={{
          lerp: 0.08,
          duration: 1.0,
          smoothWheel: true,
          smoothTouch: true,
          wheelMultiplier: 0.9,
          touchMultiplier: 1.0,
          syncTouch: true,
          gestureOrientation: 'vertical',
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
        }}
      >
        <CoreGallery {...props} ref={ref as any} />
      </ReactLenis>
    );
  }
);

StickyScrollGallery.displayName = 'StickyScrollGallery';
export default StickyScrollGallery;
