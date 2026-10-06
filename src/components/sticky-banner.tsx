import React, { useEffect, useState } from "react";

type StickyBannerProps = {
  id: string;
  headline: string;
  copy?: string;
  ctaText?: string;
  ctaHref?: string;
  startDate?: string;
  endDate?: string;
};

const CornerBat = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M2 12c3-2 6-2 8-1 2-1 5-1 8 1 0 0-1-3-4-4 1-1 2-2 2-2s-3 0-6 2c-3-2-6-2-6-2s1 1 2 2c-3 1-4 4-4 4z" fill="currentColor" />
  </svg>
);

const StickyBanner: React.FC<StickyBannerProps> = ({
  id,
  headline,
  copy,
  ctaText = "Book Now",
  ctaHref = "#",
  startDate,
  endDate,
}) => {
  const dismissedKey = `promo:${id}:dismissed`;

  const inDateRange = () => {
    const now = new Date();
    if (startDate && new Date(startDate) > now) return false;
    if (endDate && new Date(endDate) < now) return false;
    return true;
  };

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!inDateRange()) return;
    try {
      const dismissed = localStorage.getItem(dismissedKey) === "true";
      if (!dismissed) setVisible(true);
    } catch (e) {
      setVisible(true);
    }
  }, [startDate, endDate]);

  const dismiss = () => {
    try {
      localStorage.setItem(dismissedKey, "true");
    } catch (e) {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center gap-4 bg-orange-50/95 border border-orange-200 rounded-b-lg py-2 px-3 shadow-md">
          <div className="absolute left-2 top-1 transform -translate-y-1/2 text-orange-700 opacity-90">
            <CornerBat className="h-8 w-8" />
          </div>
          <div className="absolute right-2 top-1 transform -translate-y-1/2 rotate-12 text-orange-700 opacity-90">
            <CornerBat className="h-8 w-8" />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">🎃</span>
            <div className="text-sm font-semibold">{headline}</div>
            {copy && <div className="hidden sm:block text-sm text-orange-700 ml-4">{copy}</div>}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <a href={ctaHref} className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-orange-600 text-white hover:bg-orange-700">{ctaText}</a>
            <button onClick={dismiss} aria-label="Dismiss offer" className="text-sm text-orange-700 hover:text-orange-900 ml-2">✕</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;
