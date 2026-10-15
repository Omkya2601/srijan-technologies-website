import { Link } from 'react-router-dom';
import siteConfig from '../../config/site';

// Brand icon mark, cropped from the official logo artwork (public/brand/logo-icon.png).
export function LogoMark({ size = 40, className = '' }) {
  return (
    <img
      src="/brand/logo-icon.png"
      alt={`${siteConfig.name} logo`}
      width={size}
      height={size}
      style={{ height: size, width: 'auto' }}
      className={className}
    />
  );
}

// Full lockup (icon + wordmark + tagline) for spacious placements like the
// About page or a login screen, where the whole brand mark can breathe.
export function LogoFull({ height = 120, className = '' }) {
  return (
    <img
      src="/brand/logo-full.png"
      alt={`${siteConfig.name} — ${siteConfig.tagline}`}
      style={{ height, width: 'auto' }}
      className={className}
    />
  );
}

export default function Logo({ showWordmark = true, size = 40, className = '', linkClassName = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${linkClassName}`}>
      <LogoMark size={size} className={className} />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-tight">{siteConfig.shortName}</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
            Technologies
          </span>
        </span>
      )}
    </Link>
  );
}
