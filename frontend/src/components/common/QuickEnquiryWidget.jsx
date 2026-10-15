import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Phone, ArrowRight } from 'lucide-react';
import siteConfig from '../../config/site';
import { WhatsAppIcon } from './SocialIcons';
import { LogoMark } from './Logo';
import { trackEvent } from '../../utils/analytics';

const QUICK_OPTIONS = [
  {
    label: 'Website Development',
    message: "Hi! I'm interested in Website Development services. Could you share more details?",
  },
  {
    label: 'Mobile App Development',
    message: "Hi! I'm looking to build a mobile app. Could you tell me more about your process?",
  },
  {
    label: 'E-Commerce Development',
    message: "Hi! I want to set up an online store. Could we discuss what's involved?",
  },
  {
    label: 'Custom Software',
    message: "Hi! I need custom software built for my business. Can we talk?",
  },
  {
    label: 'Pricing & Timelines',
    message: 'Hi! Could you share typical pricing and timelines for a project like mine?',
  },
  {
    label: 'Something Else',
    message: "Hi! I'd like to talk to your team about a project.",
  },
];

function waLink(message) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function QuickEnquiryWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Quick enquiry"
            className="w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft"
          >
            <div className="flex items-center gap-3 bg-gradient-to-br from-primary-700 to-primary-950 px-4 py-4 text-white">
              <LogoMark size={34} />
              <div className="flex-1">
                <p className="text-sm font-bold">{siteConfig.name}</p>
                <p className="flex items-center gap-1.5 text-xs text-ink-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Usually replies within a few hours
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close quick enquiry"
                className="rounded-full p-1.5 text-white/80 hover:bg-white/10 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex flex-col gap-3 p-4">
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-ink-50 px-3.5 py-2.5 text-sm text-ink-700">
                👋 Hi there! What are you looking for today? Pick an option and we'll open
                WhatsApp with your message ready to send.
              </div>

              <div className="flex flex-col gap-2">
                {QUICK_OPTIONS.map((opt) => (
                  <a
                    key={opt.label}
                    href={waLink(opt.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackEvent('whatsapp_click', { topic: opt.label });
                      setOpen(false);
                    }}
                    className="flex items-center justify-between gap-2 rounded-xl border border-ink-200 px-3.5 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
                  >
                    {opt.label}
                    <ArrowRight size={14} className="shrink-0" aria-hidden="true" />
                  </a>
                ))}
              </div>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 pt-1 text-xs font-semibold text-ink-500 hover:text-primary-600"
              >
                <Phone size={13} /> or call us at {siteConfig.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close quick enquiry' : 'Chat with us on WhatsApp'}
        aria-expanded={open}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30"
      >
        {!open && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40" />
        )}
        {open ? <X size={26} /> : <WhatsAppIcon size={28} />}
      </motion.button>
    </div>
  );
}
