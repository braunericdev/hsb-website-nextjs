declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function loadGtag() {
  if (window.gtag) return; // nicht doppelt laden

  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = "https://www.googletagmanager.com/gtag/js?id=G-E9G1RR3GSR";
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-E9G1RR3GSR');
  `;
  document.head.appendChild(script2);
}

export {};

