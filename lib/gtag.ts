
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// lib/gtag.ts

export const GA_TRACKING_ID = 'G-QD9TP1NPD7';;

// Track a pageview (explicitly fires page_view event)
export const pageview = (url: string) => {
  if (GA_TRACKING_ID && typeof window !== 'undefined') {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
    window.gtag("event", "page_view", {
      page_path: url,
    });
  }
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (GA_TRACKING_ID && typeof window !== 'undefined') {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
