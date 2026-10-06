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

  const art = "/attached_assets/own halloween.jpeg";

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] halloween-banner halloween-root" role="region" aria-label="Halloween offer banner">
      <div className="halloween-banner__inner max-w-7xl mx-auto relative">
        <div className="halloween-banner__left">
          <div className="title">HALLOWEEN<br/>OFFER</div>
          <img src={art} alt="" className="halloween-banner__pumpkin pointer-events-none" />
        </div>

        <div className="halloween-banner__center">
          <div>
            <div className="price">Starter websites from <span className="price" style={{color:'var(--halloween-accent)', fontSize:32}}>£650</span></div>
            <div className="sub">Get your business seen — quick, accessible starter sites.</div>
          </div>
        </div>

        <div className="halloween-banner__right">
          <img src={art} alt="ghost" className="halloween-banner__ghost" />
          <a href={ctaHref} className="halloween-banner__cta">{ctaText}</a>
          <button onClick={dismiss} aria-label="Dismiss offer" className="text-white/90 hover:text-white ml-2 bg-transparent rounded px-2 py-1">✕</button>
        </div>

        {/* decorative corners */}
        <div className="halloween-banner__decor" style={{left:8, top:8}} aria-hidden>
          <CornerBat />
        </div>
        <div className="halloween-banner__decor" style={{right:8, top:8}} aria-hidden>
          <CornerSpider />
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;
