/**
 * Site-wide click tracking for the Meta Pixel and Google Tag Manager.
 *
 * One listener on the whole page (event delegation), matched by link type, so
 * every current and future button is covered without wiring each one:
 *
 *   tel: / sms: links   → Meta "Contact"            + GTM "contact_click"
 *   cal.com links       → Meta custom "BookCallClick" + GTM "book_call_click"
 *   envelope icon (form) →                            GTM "contact_click"
 *
 * Confirmed bookings are tracked separately as "Schedule" by Cal.com's own
 * Meta Pixel app, so the click here measures intent, the booking measures success.
 */
declare global {
  interface Window { fbq?: (...args: unknown[]) => void; dataLayer?: unknown[] }
}

// Which part of the page the click came from (e.g. "hero", "nav", "footer")
const areaOf = (el: Element) =>
  el.closest('header')?.matches('.nav') ? 'nav'
    : el.closest('footer') ? 'footer'
    : el.closest('section')?.id || el.closest('section')?.classList[0] || 'page';

document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest?.<HTMLAnchorElement>('a[href]');
  if (!a) return;
  const href = a.getAttribute('href') || '';
  const params = { location: areaOf(a), page: location.pathname };

  if (href.startsWith('tel:') || href.startsWith('sms:')) {
    const method = href.startsWith('tel:') ? 'call' : 'text';
    window.fbq?.('track', 'Contact', { method, ...params });
    (window.dataLayer ||= []).push({ event: 'contact_click', method, ...params });
  } else if (/^https:\/\/(www\.)?cal\.com\//.test(href)) {
    window.fbq?.('trackCustom', 'BookCallClick', params);
    (window.dataLayer ||= []).push({ event: 'book_call_click', ...params });
  } else if (a.dataset.contact === 'form') {
    (window.dataLayer ||= []).push({ event: 'contact_click', method: 'form', ...params });
  }
});

export {};
