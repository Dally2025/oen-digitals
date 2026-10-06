import React, { useEffect, useState } from "react";
import bannerImage from "../../attached_assets/own halloween.jpeg";

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
    <path d="M12 3c-1 0-2 1-3 2-2 0-4 1-5 2-1 1-2 2-2 2s2-1 4-1c1 0 2 1 3 1 1 0 2-1 3-1s2 1 3 1c2 0 4 1 4 1s-1-1-2-2c-1-1-3-2-5-2-1-1-2-2-3-2z" fill="currentColor" />
  </svg>
);

const CornerSpider = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 2v4M6 6l2 2M18 6l-2 2M4 12h4M16 12h4M6 18l2-2M18 18l-2-2M8 14a4 4 0 1 0 8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
      <div className="relative">
        <div
          className="w-full bg-cover bg-center rounded-b-lg shadow-lg"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="backdrop-brightness-75 bg-black/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="relative flex items-center gap-4 py-3">
                <div className="absolute left-4 top-1 transform -translate-y-1/2 text-white opacity-95">
                  <CornerSpider className="h-10 w-10" />
                </div>
                <div className="absolute right-4 top-1 transform -translate-y-1/2 text-white opacity-95 rotate-12">
                  <CornerBat className="h-10 w-10" />
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎃</span>
                  <div className="text-sm sm:text-base font-semibold text-white drop-shadow">{headline}</div>
                  {copy && <div className="hidden md:block text-sm text-orange-100 ml-4">{copy}</div>}
                </div>

                <div className="ml-auto flex items-center gap-3">
                  <a href={ctaHref} className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-orange-600 text-white hover:bg-orange-700 drop-shadow-lg">{ctaText}</a>
                  <button onClick={dismiss} aria-label="Dismiss offer" className="text-white/90 hover:text-white ml-2 bg-black/20 rounded px-2 py-1">✕</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;
