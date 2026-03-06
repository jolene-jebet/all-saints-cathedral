import { Link } from 'react-router-dom';

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

const CONTACT = [
  '1 Cathedral Close',
  'City Centre, EC1A',
  'office@allsaintscathedral.org',
  '+1 (555) 012-3456',
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
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 60,
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
              All Saints Cathedral
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
              A place of worship, community, and grace since 1847.
              All are welcome.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {['✦ Facebook', '✦ YouTube', '✦ Instagram'].map(s => (
                <span key={s} style={{
                  fontSize: 10,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: 'var(--gold-light)',
                  cursor: 'pointer',
                  fontFamily: "'Jost', sans-serif",
                }}>
                  {s}
                </span>
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

          {/* Contact column */}
          <FooterCol title="Contact">
            {CONTACT.map(c => (
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
            © {new Date().getFullYear()} All Saints Cathedral. All rights reserved.
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