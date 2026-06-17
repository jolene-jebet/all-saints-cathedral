import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionLabel from '../components/ui/SectionLabel';
import GoldRule from '../components/ui/GoldRule';
import PlaceholderImg from '../components/ui/PlaceholderImg';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const MASSES = [
  { day: 'Sunday',    name: 'First Mass',   time: '8:00 AM' },
  { day: 'Sunday',    name: 'Second Mass',  time: '10:00 AM' },
  { day: 'Tuesday',   name: 'Weekday Mass', time: '6:45 AM' },
  { day: 'Wednesday', name: 'Weekday Mass', time: '6:45 AM' },
  { day: 'Thursday',  name: 'Evening Mass', time: '5:00 PM' },
  { day: 'Friday',    name: 'Weekday Mass', time: '6:45 AM' },
  { day: 'Saturday',  name: 'Confession',   time: '9:00 AM' },
];

const CLERGY = [
  { name: 'Fr. Michael Mutai',    role: 'Founding Parish Priest',  note: 'Appointed June 2023', src: './images/fr_michael.jpg' },
  { name: 'Fr. Timothy Kiplagat', role: 'Cathedral Administrator', note: 'Served since 2011',   src: '/images/clergy/fr_timothy.jpg' },
  { name: 'Fr. David Kibet',      role: 'Former Chaplain',         note: 'Served 2005 – 2018',  src: '/images/clergy/fr_david.jpg' },
  { name: 'Fr. Charles Kirui',    role: 'Former Chaplain',         note: 'Served 2009 – 2011',  src: '/images/clergy/fr_kirui.jpg' },
];

export default function Home() {
  useReveal();
  const navigate = useNavigate();

  return (
    <div style={{ background: 'var(--cream)' }}>

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '140px 40px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* ── Hero background image ──
            A full-cover parish photo sits behind all content.
            object-fit: cover ensures it crops gracefully at any screen size
            (like setting a photo as a desktop wallpaper — it always fills). */}
        <img
          src="./images/exterior_painted.png"
          alt="All Saints Parish exterior"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
          }}
        />

        {/* Dark overlay so text stays legible over the photo */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(160deg, rgba(39,39,32,0.55) 0%, rgba(61,74,37,0.6) 100%)',
        }} />

        {/* All hero text sits above overlay */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 'clamp(58px, 10vw, 120px)',
            lineHeight: 1,
            color: 'var(--cream)',
            animation: 'fadeUp 0.9s ease 0.4s both',
          }}>
            All Saints<br />
            <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Parish</em>
          </h1>

          <GoldRule centered light style={{ animation: 'fadeUp 0.8s ease 0.6s both' }} />

          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: 15, fontWeight: 300, lineHeight: 1.9,
            color: 'rgba(250,248,242,0.8)', maxWidth: 420,
            animation: 'fadeUp 0.8s ease 0.8s both',
          }}>
            Born from faith, built by community
          </p>

          <div style={{ display: 'flex', gap: 18, marginTop: 44, flexWrap: 'wrap', justifyContent: 'center', animation: 'fadeUp 0.8s ease 1s both' }}>
            <button
              onClick={() => navigate('/about')}
              style={btnPrimary}
              onMouseOver={e => { e.currentTarget.style.background = 'var(--olive-deep)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'var(--olive)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Our Story
            </button>
            <button
              style={btnGhost}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(250,248,242,0.4)'; e.currentTarget.style.color = 'var(--cream)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Plan Your Visit
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, animation: 'fadeUp 0.8s ease 1.4s both', zIndex: 2 }}>
          <span style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(250,248,242,0.5)', fontFamily: "'Jost', sans-serif" }}>Scroll</span>
          <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, var(--gold), transparent)', animation: 'shimmer 2s ease infinite' }} />
        </div>
      </section>
      {/* ══════════════════════════════════
      MASS SCHEDULE
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px', background: 'var(--warm)', borderTop: '1px solid var(--divider)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <SectionLabel text="Gather With Us" />
            <h2 style={sectionTitle}>
              Mass <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Schedule</em>
            </h2>
            <GoldRule centered />
          </div>

          <div className="reveal" style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontFamily: "'Jost', sans-serif",
            }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--olive)' }}>
                  {['Day', 'Service', 'Time'].map(h => (
                    <th key={h} style={{
                      padding: '14px 20px',
                      textAlign: 'left',
                      fontSize: 10,
                      letterSpacing: 4,
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      fontWeight: 500,
                      fontFamily: "'Jost', sans-serif",
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MASSES.map((s, i) => (
                  <tr key={i} style={{
                    borderBottom: '1px solid var(--divider)',
                    background: i % 2 === 0 ? 'var(--cream)' : 'transparent',
                    transition: 'background 0.2s',
                  }}
                    onMouseOver={e => e.currentTarget.style.background = 'var(--olive-pale)'}
                    onMouseOut={e => e.currentTarget.style.background = i % 2 === 0 ? 'var(--cream)' : 'transparent'}
                  >
                    <td style={{ padding: '18px 20px', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--olive)', fontWeight: 500 }}>{s.day}</td>
                    <td style={{ padding: '18px 20px', fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: 'var(--charcoal)' }}>{s.name}</td>
                    <td style={{ padding: '18px 20px', fontSize: 14, color: 'var(--olive)', fontWeight: 400, letterSpacing: 1 }}>{s.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
        {/* ══════════════════════════════════
            CLERGY
        ══════════════════════════════════ */}
        <section style={{ padding: '110px 60px', background: 'var(--cream)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="reveal" style={{ marginBottom: 60 }}>
              <SectionLabel text="Our Leadership" />
              <h2 style={sectionTitle}>
                Meet the <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Clergy</em>
              </h2>
              <GoldRule />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
              {CLERGY.map((c, i) => (
                <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <PlaceholderImg src={c.src} height={300} label={c.name} />
                  <div style={{ padding: '22px 0', borderBottom: '1px solid var(--divider)' }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: 'var(--charcoal)', marginBottom: 4 }}>{c.name}</p>
                    <p style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--olive)', fontFamily: "'Jost', sans-serif", fontWeight: 500, marginBottom: 8 }}>{c.role}</p>
                    <p style={{ fontSize: 12, color: 'var(--stone)', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{c.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* ══════════════════════════════════
          BRIEF HISTORY
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px', background: 'var(--olive-deep)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(250,248,242,0.5) 39px, rgba(250,248,242,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(250,248,242,0.5) 39px, rgba(250,248,242,0.5) 40px)' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div className="reveal-left">
            <SectionLabel text="Our Story" light />
            <h2 style={{ ...sectionTitle, color: 'var(--cream)', fontSize: 'clamp(38px, 5vw, 60px)' }}>
              A Brief <em style={{ fontStyle: 'italic' }}>History</em>
            </h2>
            <GoldRule light />
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, lineHeight: 1.9, color: 'rgba(250,248,242,0.6)', marginBottom: 18 }}>
              All Saints began in 2005 with Catholic students at Moi University Annex campus gathering for Sunday worship in a humble mushroom farm building. Under the late Bishop Cornelius Korir, Fr. David Kibet was assigned as the first chaplain, laying the foundation of what would become a thriving community.
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, lineHeight: 1.9, color: 'rgba(250,248,242,0.6)', marginBottom: 18 }}>
              In 2017, the Jenga Kanisa Initiative was born — a bold vision to build a permanent home. A 2.5-acre parcel of land was secured, and through two remarkable online Harambees, the community raised Ksh 37.5 million, clearing a Ksh 28 million bank loan in just 1 year and 8 months.
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, lineHeight: 1.9, color: 'rgba(250,248,242,0.6)' }}>
              On 18th June 2023, Bishop Dominic Kimengich declared All Saints a full Parish, with Fr. Michael Mutai appointed as founding Parish Priest — a culmination of eighteen years of faith, sacrifice, and community.
            </p>
          </div>
          <div className="reveal-right">
            <PlaceholderImg src='./images/bishop-building-school.jpg' height={440} label="Parish Ground-Breaking, Palm Sunday 2022" style={{ border: '1px solid rgba(168,137,58,0.3)' }} />
          </div>
        </div>
      </section>

    </div>
  );
}

function MassCard({ day, name, time, note }) {
  return (
    <div
      style={{ background: 'var(--cream)', border: '1px solid var(--divider)', padding: '36px 28px', position: 'relative', overflow: 'hidden', transition: 'transform 0.3s', cursor: 'default' }}
      onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.querySelector('.card-bar').style.transform = 'scaleX(1)'; }}
      onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.querySelector('.card-bar').style.transform = 'scaleX(0)'; }}
    >
      <div className="card-bar" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--olive)', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.35s ease' }} />
      <p style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--gold)', fontFamily: "'Jost', sans-serif", fontWeight: 500, marginBottom: 10 }}>{day}</p>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 400, color: 'var(--charcoal)', marginBottom: 6 }}>{name}</p>
      <p style={{ fontSize: 14, color: 'var(--olive)', fontFamily: "'Jost', sans-serif", fontWeight: 400, letterSpacing: 1 }}>{time}</p>
      <div style={{ width: 30, height: 1, background: 'var(--divider)', margin: '16px 0' }} />
      <p style={{ fontSize: 12, color: 'var(--stone)', fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{note}</p>
    </div>
  );
}

const sectionTitle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 300,
  lineHeight: 1.1,
  color: 'var(--charcoal)',
  fontSize: 'clamp(38px, 5vw, 60px)',
};

const btnPrimary = {
  padding: '14px 40px',
  background: 'var(--olive)',
  color: 'var(--cream)',
  border: 'none',
  cursor: 'pointer',
  fontSize: 10,
  letterSpacing: 3,
  textTransform: 'uppercase',
  fontFamily: "'Jost', sans-serif",
  fontWeight: 500,
  transition: 'all 0.3s',
};

const btnGhost = {
  padding: '14px 40px',
  background: 'transparent',
  color: 'var(--cream)',
  border: '1px solid rgba(250,248,242,0.4)',
  cursor: 'pointer',
  fontSize: 10,
  letterSpacing: 3,
  textTransform: 'uppercase',
  fontFamily: "'Jost', sans-serif",
  fontWeight: 500,
  transition: 'all 0.3s',
};