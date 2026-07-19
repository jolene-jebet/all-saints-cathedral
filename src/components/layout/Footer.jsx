import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const FOOTER_NAV = [
  { label: 'Home',        path: '/' },
  { label: 'About',       path: '/about' },
  { label: 'Ministries',  path: '/ministries' },
  { label: 'News',        path: '/news' },
  { label: 'Donation',    path: '/donation' },
  { label: 'School',      path: '/school' },
];

const SERVICES = [
  'Sunday 8:00 AM',
  'Sunday 10:30 AM',
  'Wednesday 12:15 PM',
  'Confession Fri 5 PM',
];

const SOCIALS = [
  { label: 'Facebook',  href: '#', Icon: FaFacebookF },
  { label: 'YouTube',   href: '#', Icon: FaYoutube },
  { label: 'Instagram', href: '#', Icon: FaInstagram },
];

const CHURCH_CONTACT = [
  '1 Cathedral Close',
  'City Centre, EC1A',
  'office@allsaintscathedral.org',
  '+1 (555) 012-3456',
];

const SCHOOL_CONTACT = [
  'School Address — TBD',
  'School Email — TBD',
  'School Phone — TBD',
];

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--charcoal)',
      padding: '72px 60px 40px',
      color: 'var(--cream)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* ── Top Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
          gap: 40,
          marginBottom: 60,
        }}>

          {/* Brand column */}
          <div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 26,
              fontWeight: 400,
              marginBottom: 12,
            }}>
              All Saints Parish Annex
            </div>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: 14,
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'rgba(250,248,242,0.45)',
              maxWidth: 280,
              marginBottom: 24,
            }}>
              A place of worship, community, and grace — serving Annex,
              Eldoret since 2005. All are welcome.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 34,
                    height: 34,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(201,168,76,0.3)',
                    color: 'var(--gold-light)',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.color = 'var(--charcoal)'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold-light)'; }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <FooterCol title="Navigation">
            {FOOTER_NAV.map(link => (
              <li key={link.path}>
                <Link to={link.path} style={{
                  fontSize: 13,
                  color: 'rgba(250,248,242,0.5)',
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                  onMouseOver={e => e.currentTarget.style.color = 'var(--gold-light)'}
                  onMouseOut={e => e.currentTarget.style.color = 'rgba(250,248,242,0.5)'}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          {/* Services column */}
          <FooterCol title="Services">
            {SERVICES.map(s => (
              <li key={s} style={{
                fontSize: 13,
                color: 'rgba(250,248,242,0.5)',
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
              }}>
                {s}
              </li>
            ))}
          </FooterCol>

          {/* Church contact column */}
          <FooterCol title="Church Contact">
            {CHURCH_CONTACT.map(c => (
              <li key={c} style={{
                fontSize: 13,
                color: 'rgba(250,248,242,0.5)',
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
              }}>
                {c}
              </li>
            ))}
          </FooterCol>

          {/* School contact column */}
          <FooterCol title="School Contact">
            {SCHOOL_CONTACT.map(c => (
              <li key={c} style={{
                fontSize: 13,
                color: 'rgba(250,248,242,0.5)',
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
              }}>
                {c}
              </li>
            ))}
          </FooterCol>

        </div>

        {/* ── Bottom Bar ── */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 28,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <span style={{
            fontSize: 11,
            color: 'rgba(250,248,242,0.3)',
            fontFamily: "'Jost', sans-serif",
          }}>
            © {new Date().getFullYear()} All Saints Parish Annex. All rights reserved.
          </span>
          <span style={{
            fontSize: 11,
            color: 'rgba(250,248,242,0.3)',
            fontFamily: "'Jost', sans-serif",
          }}>
            Designed with faith & care
          </span>
        </div>

      </div>
    </footer>
  );
}

// ── Small helper: footer column ──
function FooterCol({ title, children }) {
  return (
    <div>
      <div style={{
        fontSize: 10,
        letterSpacing: 4,
        textTransform: 'uppercase',
        color: 'var(--gold)',
        fontFamily: "'Jost', sans-serif",
        fontWeight: 500,
        marginBottom: 20,
      }}>
        {title}
      </div>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}>
        {children}
      </ul>
    </div>
  );
}