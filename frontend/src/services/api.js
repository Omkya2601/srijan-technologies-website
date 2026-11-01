import { services, industries, portfolio, faqs } from '../data/content';
import siteConfig from '../config/site';

// The site is fully static: content comes from data/content.js, and form submissions are
// emailed through Web3Forms (https://web3forms.com). Without VITE_WEB3FORMS_KEY, forms fall
// back to opening a pre-filled WhatsApp chat so enquiries are never lost.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

// Same { success, data } shape the old REST API returned, so pages and useFetch are unchanged.
const ok = (data) => Promise.resolve({ success: true, data });
const bySlug = (items, slug) => ok(items.find((item) => item.slug === slug) || null);

const FIELD_LABELS = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  company: 'Company',
  service: 'Service',
  industry: 'Industry',
  projectType: 'Project Type',
  stage: 'Stage',
  budget: 'Budget',
  timeline: 'Timeline',
  message: 'Message',
};

// [label, value] pairs for the fields the visitor actually filled in.
function filledFields(payload) {
  return Object.entries(FIELD_LABELS)
    .map(([key, label]) => [label, payload[key]?.toString().trim()])
    .filter(([, value]) => value);
}

async function submitForm(subject, payload, successMessage) {
  const fields = filledFields(payload);

  if (!WEB3FORMS_KEY) {
    const text = [subject, '', ...fields.map(([label, value]) => `${label}: ${value}`)].join('\n');
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    return { success: true, via: 'whatsapp', message: 'WhatsApp has opened with your details filled in — just tap send there to reach us.' };
  }

  let res;
  try {
    res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `${subject} — ${payload.name}`,
        from_name: siteConfig.name,
        replyto: payload.email,
        ...Object.fromEntries(fields),
      }),
    });
  } catch {
    throw { message: 'Network error. Please check your connection and try again.', details: null, status: 0 };
  }

  const body = await res.json().catch(() => ({}));
  if (!res.ok || !body.success) {
    throw {
      message: body.message || `Could not send your message. Please email us at ${siteConfig.email}.`,
      details: null,
      status: res.status,
    };
  }
  return { success: true, via: 'email', message: successMessage };
}

export const servicesApi = {
  list: () => ok(services),
  getBySlug: (slug) => bySlug(services, slug),
};

export const industriesApi = {
  list: () => ok(industries),
  getBySlug: (slug) => bySlug(industries, slug),
};

export const portfolioApi = {
  list: () => ok(portfolio),
  getBySlug: (slug) => bySlug(portfolio, slug),
};

export const faqsApi = {
  list: () => ok(faqs),
};

export const contactApi = {
  submit: (payload) =>
    submitForm(
      'New project enquiry',
      payload,
      'Thanks for reaching out — our team will get back to you within one business day.'
    ),
};
