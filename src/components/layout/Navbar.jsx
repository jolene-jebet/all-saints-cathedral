import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// Navigation links config — add or remove pages here
const NAV_LINKS = [
  { label: 'Home',        path: '/' },
  { label: 'About',       path: '/about' },
  { label: 'Ministries',  path: '/ministries' },
  { label: 'News',        path: '/news' },
  { label: 'School',      path: '/school' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 200,
      padding: scrolled ? '14px 52px' : '22px 52px',
      background: scrolled
        ? 'rgba(250,248,242,0.97)'
        : 'rgba(250,248,242,0.88)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--divider)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'padding 0.3s ease, background 0.3s ease',
      animation: 'fadeDown 0.7s ease forwards',
    }}>

      {/* ── Logo ── */}
      <div
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      >
        <div style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: 10,
          letterSpacing: 5,
          textTransform: 'uppercase',
          color: 'var(--gold)',
          fontWeight: 500,
          marginBottom: 3,
        }}>
          ✦ Est. 1847
        </div>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 20,
          fontWeight: 400,
          letterSpacing: 2,
          color: 'var(--charcoal)',
        }}>
          All Saints Cathedral
        </div>
      </div>

      {/* ── Nav Links ── */}
      <ul style={{
        display: 'flex',
        gap: 36,
        listStyle: 'none',
        alignItems: 'center',
      }}>
        {NAV_LINKS.map(link => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              end={link.path === '/'}   // exact match for home only
              style={({ isActive }) => ({
                fontFamily: "'Jost', sans-serif",
                fontSize: 10,
                letterSpacing: 3,
                textTransform: 'uppercase',
                fontWeight: 500,
                textDecoration: 'none',
                color: isActive ? 'var(--olive)' : 'var(--stone)',
                borderBottom: isActive
                  ? '1px solid var(--gold)'
                  : '1px solid transparent',
                paddingBottom: 2,
                transition: 'color 0.25s, border-color 0.25s',
              })}
            >
              {link.label}
            </NavLink>
          </li>
        ))}

        {/* ── Donate CTA button ── */}
        <li>
          <NavLink to="/donation">
            {({ isActive }) => (
              <button style={{
                background: isActive ? 'var(--olive-deep)' : 'var(--olive)',
                color: 'var(--cream)',
                border: 'none',
                padding: '10px 24px',
                cursor: 'pointer',
                fontSize: 10,
                letterSpacing: 3,
                textTransform: 'uppercase',
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                transition: 'background 0.3s',
              }}
                onMouseOver={e => e.currentTarget.style.background = 'var(--olive-deep)'}
                onMouseOut={e => e.currentTarget.style.background = isActive ? 'var(--olive-deep)' : 'var(--olive)'}
              >
                Give
              </button>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}