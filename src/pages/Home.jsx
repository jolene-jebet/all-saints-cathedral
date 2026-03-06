import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionLabel from '../components/ui/SectionLabel';
import GoldRule from '../components/ui/GoldRule';
import PlaceholderImg from '../components/ui/PlaceholderImg';

// ── Scroll reveal hook (used on every page) ──
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

// ── Mass schedule data ──
const MASSES = [
  { day: 'Sunday',    name: 'Holy Eucharist',   time: '8:00 AM',   note: 'Quiet, said service' },
  { day: 'Sunday',    name: 'Choral Eucharist',  time: '10:30 AM',  note: 'Full choir & organ' },
  { day: 'Sunday',    name: 'Evening Prayer',    time: '6:00 PM',   note: 'Contemplative Vespers' },
  { day: 'Wednesday', name: 'Midweek Mass',      time: '12:15 PM',  note: 'Brief & nourishing' },
  { day: 'Friday',    name: 'Confession',        time: '5:00 PM',   note: 'Sacrament of healing' },
  { day: 'Daily',     name: 'Morning Prayer',    time: '7:30 AM',   note: 'Mon – Sat' },
];

// ── Clergy data ──
const CLERGY = [
  { name: 'The Very Rev. Margaret Ellis', role: 'Dean & Rector',      note: 'Ordained 1998 · Joined 2015' },
  { name: 'Canon James Okafor',           role: 'Canon Precentor',    note: 'Ordained 2005 · Joined 2018' },
  { name: 'Rev. Sophia Andrade',          role: 'Associate Priest',   note: 'Ordained 2014 · Joined 2021' },
  { name: 'Deacon Thomas Walsh',          role: 'Deacon of Ministry', note: 'Ordained 2010 · Joined 2019' },
];

// ── Timeline data ──
const TIMELINE = [
  { year: '1847', title: 'Foundation',       desc: 'The original chapel is consecrated on All Saints\' Day by Bishop Thomas Hart.' },
  { year: '1865', title: 'The Great Fire',   desc: 'A devastating fire destroys the nave. Rebuilding begins within months, funded by the community.' },
  { year: '1892', title: 'Gothic Expansion', desc: 'The Cathedral gains its iconic bell tower and rose window in the Victorian Gothic style.' },
  { year: '1944', title: 'War Memorial',     desc: 'The Memorial Chapel is added to honour parishioners lost in World War II.' },
  { year: '1972', title: 'Modern Nave',      desc: 'A contemporary nave extension doubles seating capacity and adds a new pipe organ.' },
  { year: '2025', title: 'Today',            desc: 'All Saints serves 2,000+ families, maintaining a ministry of worship, service, and welcome.' },
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
        background: 'linear-gradient(160deg, var(--cream) 0%, var(--olive-pale) 60%, var(--warm) 100%)',
      }}>

        {/* Background arch SVG */}
        <svg
          style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', opacity: 0.06, pointerEvents: 'none' }}
          width={700} height={500} viewBox="0 0 700 500"
        >
          <path d="M100 500 L100 220 Q100 30 350 30 Q600 30 600 220 L600 500"
            stroke="var(--olive-deep)" strokeWidth={2} fill="none" />
          <path d="M160 500 L160 240 Q160 100 350 100 Q540 100 540 240 L540 500"
            stroke="var(--olive-deep)" strokeWidth={1} fill="none" />
          <circle cx={350} cy={200} r={90} stroke="var(--gold)" strokeWidth={1} fill="none" />
          <circle cx={350} cy={200} r={55} stroke="var(--gold)" strokeWidth={0.75} fill="none" />
          <line x1={350} y1={110} x2={350} y2={290} stroke="var(--gold)" strokeWidth={1.5} />
          <line x1={265} y1={200} x2={435} y2={200} stroke="var(--gold)" strokeWidth={1.5} />
        </svg>

        <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, animation: 'fadeUp 0.8s ease 0.2s both' }}>
          ✦ &nbsp; A Place of Grace &nbsp; ✦
        </p>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: 'clamp(58px, 10vw, 120px)',
          lineHeight: 1,
          color: 'var(--charcoal)',
          animation: 'fadeUp 0.9s ease 0.4s both',
        }}>
          All Saints<br />
          <em style={{ color: 'var(--olive)', fontStyle: 'italic' }}>Cathedral</em>
        </h1>

        <GoldRule centered style={{ animation: 'fadeUp 0.8s ease 0.6s both' }} />

        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: 15,
          fontWeight: 300,
          lineHeight: 1.9,
          color: 'var(--stone)',
          maxWidth: 420,
          animation: 'fadeUp 0.8s ease 0.8s both',
        }}>
          Where faith meets community, and hearts find home
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
            onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(42,42,32,0.3)'; e.currentTarget.style.color = 'var(--charcoal)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Plan Your Visit
          </button>
        </div>

        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, animation: 'fadeUp 0.8s ease 1.4s both' }}>
          <span style={{ fontSize: 9, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--stone)', fontFamily: "'Jost', sans-serif" }}>Scroll</span>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 2 }}>
            {MASSES.map((s, i) => (
              <MassCard key={i} {...s} />
            ))}
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
                <PlaceholderImg height={300} label={c.name} />
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
        {/* Subtle grid texture */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(250,248,242,0.5) 39px, rgba(250,248,242,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(250,248,242,0.5) 39px, rgba(250,248,242,0.5) 40px)' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div className="reveal-left">
            <SectionLabel text="Our Story" light />
            <h2 style={{ ...sectionTitle, color: 'var(--cream)', fontSize: 'clamp(38px, 5vw, 60px)' }}>
              A Brief <em style={{ fontStyle: 'italic' }}>History</em>
            </h2>
            <GoldRule light />
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, lineHeight: 1.9, color: 'rgba(250,248,242,0.6)', marginBottom: 18 }}>
              All Saints Cathedral was founded in 1847 by a small congregation seeking a spiritual home in a rapidly growing city. The original stone chapel, built by Irish stonemasons, stood as a beacon of community for early settlers.
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, lineHeight: 1.9, color: 'rgba(250,248,242,0.6)', marginBottom: 18 }}>
              Through fires, wars, and renewal, the Cathedral has been rebuilt and expanded three times — each era leaving its mark in the Gothic arches, Victorian stained glass, and the modern nave added in 1972.
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, lineHeight: 1.9, color: 'rgba(250,248,242,0.6)' }}>
              Today, All Saints serves over 2,000 families and stands as one of the oldest continuously active cathedrals in the region.
            </p>
          </div>
          <div className="reveal-right">
            <PlaceholderImg height={440} label="Cathedral Exterior c. 1920" style={{ border: '1px solid rgba(168,137,58,0.3)' }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          TIMELINE
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>

          <div className="reveal" style={{ textAlign: 'center', marginBottom: 70 }}>
            <SectionLabel text="Milestones" />
            <h2 style={sectionTitle}>
              Our <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Timeline</em>
            </h2>
            <GoldRule centered />
          </div>

          {/* Timeline track */}
          <div style={{ position: 'relative' }}>
            {/* Vertical centre line */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'var(--divider)', transform: 'translateX(-50%)' }} />

            {TIMELINE.map((ev, i) => (
              <TimelineItem key={i} {...ev} index={i} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

/* ── Sub-components (local to Home) ──────────────────── */

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

function TimelineItem({ year, title, desc, index }) {
  const isLeft = index % 2 === 0;
  return (
    <div className="reveal" style={{
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: isLeft ? 'flex-end' : 'flex-start',
      paddingRight: isLeft ? 'calc(50% + 36px)' : 0,
      paddingLeft:  isLeft ? 0 : 'calc(50% + 36px)',
      marginBottom: 48,
      position: 'relative',
    }}>
      {/* Dot */}
      <div style={{
        position: 'absolute', left: '50%', top: 10,
        transform: 'translateX(-50%)',
        width: 12, height: 12, borderRadius: '50%',
        background: index === 5 ? 'var(--gold)' : 'var(--olive)',
        border: '3px solid var(--cream)',
        zIndex: 1,
        boxShadow: '0 0 0 1px var(--olive)',
      }} />
      {/* Card */}
      <div style={{ background: 'var(--warm)', border: '1px solid var(--divider)', padding: '22px 24px', maxWidth: 300 }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: 'var(--olive)', lineHeight: 1 }}>{year}</p>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, color: 'var(--charcoal)', margin: '6px 0 8px' }}>{title}</p>
        <p style={{ fontSize: 13, color: 'var(--stone)', fontFamily: "'Jost', sans-serif", fontWeight: 300, lineHeight: 1.8 }}>{desc}</p>
      </div>
    </div>
  );
}

/* ── Shared style objects ─────────────────────────────── */
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
  color: 'var(--charcoal)',
  border: '1px solid rgba(42,42,32,0.3)',
  cursor: 'pointer',
  fontSize: 10,
  letterSpacing: 3,
  textTransform: 'uppercase',
  fontFamily: "'Jost', sans-serif",
  fontWeight: 500,
  transition: 'all 0.3s',
};