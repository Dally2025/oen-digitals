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
    <div className="fixed top-0 left-0 right-0 z-[9999] halloween-banner" role="region" aria-label="Halloween offer banner">
      <div className="halloween-banner__inner max-w-7xl mx-auto relative">
        <div className="halloween-banner__decor halloween-banner__left">
          {/* Decorative pumpkins / spiderweb - pointer-events none */}
          <svg className="opacity-95" width="180" height="120" viewBox="0 0 180 120" fill="none" aria-hidden>
            <ellipse cx="60" cy="80" rx="48" ry="28" fill="#ff9b4a" />
            <path d="M44 68c6 4 18 4 26 0 8 4 20 4 26 0" fill="#fff" opacity="0.06" />
          </svg>
        </div>

        <div className="halloween-banner__center">
          <div className="px-4 sm:px-6">
            <div className="text-center">
              <div className="text-sm font-bold tracking-wider text-orange-200 uppercase mb-1">HALLOWEEN OFFER</div>
              <div className="text-lg md:text-2xl font-bold">
                Starter websites from <span style={{color: 'var(--halloween-accent)'}} className="font-extrabold">£650</span>
              </div>
              <div className="text-sm text-orange-100">Get your business seen — quick, accessible starter sites.</div>
            </div>
          </div>
        </div>

        <div className="halloween-banner__decor halloween-banner__right">
          <div className="flex items-center gap-3">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" aria-hidden className="pointer-events-none">
              <path d="M12 2c1 0 2 .5 2 1.5S13 6 12 6s-2-2.5-2-2.5S11 2 12 2z" fill="#fff" opacity="0.9" />
            </svg>
            <a href={ctaHref} className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-orange-600 text-white hover:bg-orange-700">{ctaText}</a>
            <button onClick={dismiss} aria-label="Dismiss offer" className="text-white/90 hover:text-white ml-2 bg-transparent rounded px-2 py-1">✕</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;
