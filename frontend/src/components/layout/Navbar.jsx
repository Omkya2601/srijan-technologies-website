import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, MessageCircle, Menu, X } from 'lucide-react';
import { navServices, navIndustries } from '../../data/navLinks';
import { getIcon } from '../../utils/iconMap';
import Logo from '../common/Logo';

const NAV_LINKS = [
  { key: 'home', label: 'Home', to: '/' },
  { key: 'about', label: 'About', to: '/about' },
];

const AFTER_LINKS = [
  { key: 'technologies', label: 'Technologies', to: '/technologies' },
  { key: 'portfolio', label: 'Portfolio', to: '/portfolio' },
  { key: 'contact', label: 'Contact', to: '/contact' },
];

const PILL_ID = 'nav-hover-pill';

function NavPill({ itemKey, hoveredKey, setHoveredKey, className = '', children }) {
  return (
    <div
      className={`relative flex items-center ${className}`}
      onMouseEnter={() => setHoveredKey(itemKey)}
    >
      {hoveredKey === itemKey && (
        <motion.span
          layoutId={PILL_ID}
          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
          className="absolute inset-0 rounded-full bg-ink-100"
        />
      )}
      <span className="relative z-10 flex items-center">{children}</span>
    </div>
  );
}

const NAV_LINK_CLASS = ({ isActive }) =>
  `group relative whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold transition-colors hover:text-primary-600 ${
    isActive ? 'text-primary-600' : 'text-ink-700'
  }`;

function NavUnderline({ isActive }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-transform duration-200 group-hover:scale-x-100 ${
        isActive ? 'scale-x-100' : ''
      }`}
    />
  );
}

const MEGA_PROMO = {
  Services: {
    heading: 'Not sure what you need?',
    detail: "Tell us about your goals and we'll recommend the right service — no obligation.",
  },
  Industries: {
    heading: "Don't see your industry?",
    detail: 'We build custom solutions beyond these categories too — let\'s talk.',
  },
};

function MegaMenu({ title, to, items, basePath, hoveredKey, setHoveredKey, isOpen, setOpen }) {
  const timeoutRef = useRef(null);
  const wrapperRef = useRef(null);

  const openOnHover = () => {
    clearTimeout(timeoutRef.current);
    setOpen(title);
    setHoveredKey(title);
  };
  const closeOnHoverOut = () => {
    timeoutRef.current = setTimeout(() => setOpen(null), 150);
  };
  const toggleOnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(isOpen ? null : title);
  };

  // Closes the menu on outside click/tap so it behaves correctly on touch
  // devices, where there is no "mouse leave" to rely on.
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(null);
      }
    };
    document.addEventListener('pointerdown', handleOutside);
    return () => document.removeEventListener('pointerdown', handleOutside);
  }, [isOpen, setOpen]);

  const promo = MEGA_PROMO[title];

  return (
    <div ref={wrapperRef} className="relative" onMouseEnter={openOnHover} onMouseLeave={closeOnHoverOut}>
      <NavPill itemKey={title} hoveredKey={hoveredKey} setHoveredKey={setHoveredKey}>
        <NavLink to={to} onClick={() => setOpen(null)} className={NAV_LINK_CLASS}>
          {({ isActive }) => (
            <>
              {title}
              <NavUnderline isActive={isActive} />
            </>
          )}
        </NavLink>
        <button
          type="button"
          onClick={toggleOnClick}
          aria-label={`${isOpen ? 'Close' : 'Open'} ${title} menu`}
          aria-expanded={isOpen}
          className="-ml-1.5 rounded-full p-1.5 text-ink-500 transition-colors hover:text-primary-600"
        >
          <ChevronDown size={15} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </NavPill>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-full z-50 w-[min(680px,92vw)] -translate-x-1/2 pt-3"
          >
            <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft">
              <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-500" />
              <div className="grid grid-cols-[1fr,220px]">
                <div className="grid grid-cols-2 gap-1 p-4">
                  {items.map((item) => {
                    const Icon = getIcon(item.icon);
                    return (
                      <Link
                        key={item.slug}
                        to={`${basePath}/${item.slug}`}
                        onClick={() => setOpen(null)}
                        className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-ink-50"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                          <Icon size={18} aria-hidden="true" />
                        </span>
                        <span className="text-sm font-semibold text-ink-700">{item.title}</span>
                      </Link>
                    );
                  })}
                </div>

                {promo && (
                  <div className="flex flex-col justify-between gap-3 border-l border-ink-100 bg-gradient-to-br from-primary-50 to-accent-500/5 p-5">
                    <div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-primary-600 shadow-soft">
                        <MessageCircle size={18} />
                      </span>
                      <p className="mt-3 text-sm font-bold text-ink-800">{promo.heading}</p>
                      <p className="mt-1 text-xs text-ink-500">{promo.detail}</p>
                    </div>
                    <Link
                      to="/contact"
                      onClick={() => setOpen(null)}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 hover:text-primary-700"
                    >
                      Talk to an Expert <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordion({ title, to, items, basePath, close }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-ink-100 py-1">
      <div className="flex items-center justify-between">
        <Link to={to} onClick={close} className="flex-1 py-3 text-base font-semibold">
          {title}
        </Link>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-label={`Toggle ${title} submenu`}
          aria-expanded={expanded}
          className="p-3"
        >
          <ChevronDown size={18} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-2"
          >
            <div className="flex flex-col gap-1 pb-3">
              {items.map((item) => (
                <Link
                  key={item.slug}
                  to={`${basePath}/${item.slug}`}
                  onClick={close}
                  className="rounded-lg px-3 py-2 text-sm text-ink-600 hover:bg-ink-50"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [hoveredKey, setHoveredKey] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'border-ink-100 shadow-soft' : 'border-transparent'
      }`}
    >
      <div className="h-[3px] w-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />
      <div
        className={`container-app flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
          <Logo size={scrolled ? 36 : 40} />
        </motion.div>

        <nav
          className="hidden items-center gap-0.5 rounded-full border border-transparent px-1 py-1 xl:flex"
          aria-label="Primary"
          onMouseLeave={() => setHoveredKey(null)}
        >
          {NAV_LINKS.map((link) => (
            <NavPill key={link.key} itemKey={link.key} hoveredKey={hoveredKey} setHoveredKey={setHoveredKey}>
              <NavLink to={link.to} className={NAV_LINK_CLASS}>
                {({ isActive }) => (
                  <>
                    {link.label}
                    <NavUnderline isActive={isActive} />
                  </>
                )}
              </NavLink>
            </NavPill>
          ))}

          <MegaMenu
            title="Services"
            to="/services"
            items={navServices}
            basePath="/services"
            hoveredKey={hoveredKey}
            setHoveredKey={setHoveredKey}
            isOpen={openMenu === 'Services'}
            setOpen={setOpenMenu}
          />
          <MegaMenu
            title="Industries"
            to="/industries"
            items={navIndustries}
            basePath="/industries"
            hoveredKey={hoveredKey}
            setHoveredKey={setHoveredKey}
            isOpen={openMenu === 'Industries'}
            setOpen={setOpenMenu}
          />

          {AFTER_LINKS.map((link) => (
            <NavPill key={link.key} itemKey={link.key} hoveredKey={hoveredKey} setHoveredKey={setHoveredKey}>
              <NavLink to={link.to} className={NAV_LINK_CLASS}>
                {({ isActive }) => (
                  <>
                    {link.label}
                    <NavUnderline isActive={isActive} />
                  </>
                )}
              </NavLink>
            </NavPill>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link to="/contact" className="btn-primary group">
            Let's Talk
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-primary-300 hover:text-primary-600"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink-100 bg-white xl:hidden"
          >
            <div className="container-app flex max-h-[75vh] flex-col overflow-y-auto py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMobile}
                  className="border-b border-ink-100 py-3 text-base font-semibold"
                >
                  {link.label}
                </Link>
              ))}

              <MobileAccordion
                title="Services"
                to="/services"
                items={navServices}
                basePath="/services"
                close={closeMobile}
              />
              <MobileAccordion
                title="Industries"
                to="/industries"
                items={navIndustries}
                basePath="/industries"
                close={closeMobile}
              />

              {AFTER_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMobile}
                  className="border-b border-ink-100 py-3 text-base font-semibold"
                >
                  {link.label}
                </Link>
              ))}

              <Link to="/contact" onClick={closeMobile} className="btn-primary mt-5 w-full">
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
