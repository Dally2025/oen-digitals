import React, { useEffect, useState } from "react";

type PromoProps = {
  id: string;
  image?: string;
  headline: string;
  copy?: string;
  ctaText?: string;
  ctaHref?: string;
  startDate?: string; // YYYY-MM-DD
  endDate?: string; // YYYY-MM-DD
  theme?: "default" | "halloween" | "holiday" | "valentines" | string;
};

const Promo: React.FC<PromoProps> = ({
  id,
  image,
  headline,
  copy,
  ctaText = "Learn More",
  ctaHref = "#",
  startDate,
  endDate,
  theme = "halloween",
}) => {
  const seenKey = `promo:${id}:seen`;
  const dismissedKey = `promo:${id}:dismissed`;

  const inDateRange = () => {
    const now = new Date();
    if (startDate) {
      const s = new Date(startDate);
      if (now < s) return false;
    }
    if (endDate) {
      const e = new Date(endDate);
      if (now > e) return false;
    }
    return true;
  };

  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleBanner, setVisibleBanner] = useState(false);

  useEffect(() => {
    if (!inDateRange()) return;
    try {
      // quick test override: add `?promo=force` to URL to show modal regardless of localStorage
      try {
        const u = new URL(window.location.href);
        if (u.searchParams.get("promo") === "force") {
          setVisibleModal(true);
          setVisibleBanner(false);
          return;
        }
      } catch (e) {}
      const dismissed = localStorage.getItem(dismissedKey) === "true";
      const seen = localStorage.getItem(seenKey) === "true";
      if (dismissed) {
        setVisibleModal(false);
        setVisibleBanner(false);
      } else if (seen) {
        setVisibleModal(false);
        setVisibleBanner(true);
      } else {
        setVisibleModal(true);
        setVisibleBanner(false);
      }
    } catch (e) {
      // localStorage may not be available in some envs
      setVisibleModal(true);
    }
  }, [startDate, endDate]);

  // handle escape to close modal -> show banner
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && visibleModal) closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visibleModal]);

  return (
    <>
      {visibleModal && (
        <div role="dialog" aria-modal="true" aria-label={headline} className="fixed inset-0 z-[9999]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: image ? `url(${encodeURI(image)})` : undefined }}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
            <div className="max-w-3xl text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">SOMETHING SPOOKY IS HAPPENING AT OEN… 🎃</h1>
              <h2 className="text-2xl md:text-3xl font-bold text-orange-100 mb-4">Starter websites from £650</h2>
              {copy && <p className="text-lg text-orange-50/90 mb-6">{copy}</p>}

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={ctaHref}
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold bg-orange-600 text-white hover:bg-orange-700 transition`}
                >
                  VIEW THE OFFER
                </a>
                <button
                  onClick={closeModal}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold bg-white text-black/80 hover:opacity-95 transition"
                >
                  ENTER OEN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {visibleBanner && (
        <div className="fixed top-0 left-0 right-0 z-[9998]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-4 bg-card/95 border border-border rounded-b-lg py-2 px-3 shadow-md">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎃</span>
                <div className="text-sm font-semibold">{headline}</div>
                {copy && <div className="hidden sm:block text-muted-foreground ml-4 text-sm">{copy}</div>}
              </div>
              <div className="ml-auto flex items-center gap-2">
                <a
                  href={ctaHref}
                  className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold ${themeClasses.accent} ${themeClasses.accentHover}`}
                >
                  {ctaText}
                </a>
                <button
                  onClick={dismissBanner}
                  aria-label="Dismiss offer"
                  className="text-sm text-muted-foreground hover:text-foreground ml-2"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Promo;
