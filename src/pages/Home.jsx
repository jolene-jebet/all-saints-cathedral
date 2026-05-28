import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionLabel from '../components/ui/SectionLabel';
import GoldRule from '../components/ui/GoldRule';
import PlaceholderImg from '../components/ui/PlaceholderImg';

// ─────────────────────────────────────────────────────────
// HOOK: useReveal
// Watches elements with .reveal / .reveal-left / .reveal-right
// and adds the .visible class when they scroll into view.
// Think of it like a stage crew — elements wait offstage,
// and this hook cues them to enter once the audience can see them.
// ─────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    // Select all elements that should animate in on scroll
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    // IntersectionObserver fires when an element enters/exits the viewport
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible'); // trigger the CSS transition
          obs.unobserve(e.target);           // stop watching once visible — no repeat
        }
      }),
      { threshold: 0.1 } // fire when 10% of the element is visible
    );

    els.forEach(el => obs.observe(el)); // start watching each element
    return () => obs.disconnect();      // cleanup when component unmounts
  }, []);
}

// ─────────────────────────────────────────────────────────
// DATA: MASSES
// Each object is one row in the schedule table.
// day, name, time, note map directly to table columns.
// ─────────────────────────────────────────────────────────
const MASSES = [
  { day: 'Sunday',    time: '8:00 AM',   note: 'Quiet, said service' },
  { day: 'Sunday',   time: '10:30 AM',  note: 'Full choir & organ' },
  { day: 'Sunday',    time: '6:00 PM',   note: 'Contemplative Vespers' },
  { day: 'Wednesday',     time: '12:15 PM',  note: 'Brief & nourishing' },
  { day: 'Friday',        time: '5:00 PM',   note: 'Sacrament of healing' },
  { day: 'Daily',  time: '7:30 AM',   note: 'Mon – Sat' },
];

// ─────────────────────────────────────────────────────────
// DATA: CLERGY
// Each object represents one clergy card in the grid.
// ─────────────────────────────────────────────────────────
const CLERGY = [
  { name: 'fr. Michael', role: 'Parish Priest',      note: 'Ordained 1998 · Joined 2015', photo: '/images/fr_michael.jpg' },
  { name: 'Canon James Okafor',           role: 'Canon Precentor',    note: 'Ordained 2005 · Joined 2018', photo: '/images/james-okafor.jpg' },
  { name: 'Rev. Sophia Andrade',          role: 'Associate Priest',   note: 'Ordained 2014 · Joined 2021', photo: '/images/sophia-andrade.jpg' },
  { name: 'Deacon Thomas Walsh',          role: 'Deacon of Ministry', note: 'Ordained 2010 · Joined 2019', photo: '/images/thomas-walsh.jpg' },
];

// ─────────────────────────────────────────────────────────
// DATA: TIMELINE
// Milestones rendered as alternating left/right cards
// along a vertical centre line.
// ─────────────────────────────────────────────────────────
const TIMELINE = [
  { year: '1847', title: 'Foundation',       desc: 'The original chapel is consecrated on All Saints\' Day by Bishop Thomas Hart.' },
  { year: '1865', title: 'The Great Fire',   desc: 'A devastating fire destroys the nave. Rebuilding begins within months, funded by the community.' },
  { year: '1892', title: 'Gothic Expansion', desc: 'The Cathedral gains its iconic bell tower and rose window in the Victorian Gothic style.' },
  { year: '1944', title: 'War Memorial',     desc: 'The Memorial Chapel is added to honour parishioners lost in World War II.' },
  { year: '1972', title: 'Modern Nave',      desc: 'A contemporary nave extension doubles seating capacity and adds a new pipe organ.' },
  { year: '2025', title: 'Today',            desc: 'All Saints serves 2,000+ families, maintaining a ministry of worship, service, and welcome.' },
];

// ─────────────────────────────────────────────────────────
// PAGE COMPONENT: Home
// Assembles all sections in order:
//   Hero → Mass Schedule → Clergy → History → Timeline
// ─────────────────────────────────────────────────────────
export default function Home() {
  useReveal();                   // activate scroll-reveal for this page
  const navigate = useNavigate(); // used by the "Our Story" CTA button

  return (
    <div style={{ background: 'var(--cream)' }}>

      {/* ══════════════════════════════════
          SECTION 1: HERO
          Full-viewport opening panel with:
          - A real cathedral photo as background
          - Overlay for text legibility
          - Decorative SVG arch (low opacity)
          - Cathedral name + two CTA buttons
          - Animated scroll-down hint at bottom
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
            A full-cover cathedral photo sits behind all content.
            object-fit: cover ensures it crops gracefully at any screen size
            (like setting a photo as a desktop wallpaper — it always fills). */}
        <img
          src="/images/exterior_painted.png"
          alt="Cathedral interior"
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

        {/* ── Dark overlay ──
            A semi-transparent dark layer over the photo so white/cream text
            stays legible — like sunglasses for the background. */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, rgba(30,28,20,0.72) 0%, rgba(42,42,32,0.60) 60%, rgba(20,18,10,0.80) 100%)',
          zIndex: 1,
        }} />
        
        {/* ── Hero text content ──
            Sits above the image (zIndex: 3) so it's always readable. */}
        <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Small eyebrow label above the main title */}
          <p style={{
            fontFamily: "'Jost',sans-serif",
            fontSize: 10,
            letterSpacing: 5,
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: 500,
            animation: 'fadeUp 0.8s ease 0.2s both',
          }}>
            ✦ &nbsp; A Place of Grace &nbsp; ✦
          </p>

          {/* Main cathedral name — large, serif, staggered fade-in */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 'clamp(58px, 10vw, 120px)',
            lineHeight: 1,
            color: 'var(--cream)',
            animation: 'fadeUp 0.9s ease 0.4s both',
          }}>
            All Saints<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Cathedral</em>
          </h1>

          {/* Decorative gold rule (horizontal divider component) */}
          <GoldRule centered style={{ animation: 'fadeUp 0.8s ease 0.6s both' }} />

          {/* Tagline subtitle */}
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: 15,
            fontWeight: 300,
            lineHeight: 1.9,
            color: 'rgba(250,248,242,0.75)',
            maxWidth: 420,
            animation: 'fadeUp 0.8s ease 0.8s both',
          }}>
            Where faith meets community, and hearts find home
          </p>

          {/* CTA buttons: primary "Our Story" + ghost "Plan Your Visit" */}
          <div style={{
            display: 'flex', gap: 18, marginTop: 44,
            flexWrap: 'wrap', justifyContent: 'center',
            animation: 'fadeUp 0.8s ease 1s both',
          }}>
            <button
              onClick={() => navigate('/about')}
              style={btnPrimary}
              onMouseOver={e => {
                e.currentTarget.style.background = 'var(--olive-deep)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'var(--olive)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Our Story
            </button>
            <button
              style={btnGhost}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.color = 'var(--gold)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = 'rgba(250,248,242,0.4)';
                e.currentTarget.style.color = 'var(--cream)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onClick={() => document.getElementById('mass-schedule').scrollIntoView({ behavior: 'smooth' })}
            >
              Mass Schedule
            </button>
          </div>
        </div>

      </section>

      {/* ══════════════════════════════════
          SECTION 2: MASS SCHEDULE (TABLE)
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px', background: 'var(--warm)', borderTop: '1px solid var(--divider)' }} id= "mass-schedule">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>

          {/* Section heading block */}
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <SectionLabel text="Gather With Us" />
            <h2 style={sectionTitle}>
              Mass <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Schedule</em>
            </h2>
            <GoldRule centered />
          </div>

          {/* ── Schedule table ──
              A semantic HTML table — like a spreadsheet embedded in the page.
              thead holds column labels; tbody holds each service row.
              Rows alternate between cream and warm backgrounds for readability. */}
          <div className="reveal" style={{ overflowX: 'auto' }}> {/* horizontal scroll on small screens */}
            <table style={{
              width: '100%',
              borderCollapse: 'collapse', // removes double borders between cells
              fontFamily: "'Jost', sans-serif",
            }}>
              {/* Column headers */}
              <thead>
                <tr style={{ borderBottom: '2px solid var(--olive)' }}>
                  {['Day', 'Time', 'Notes'].map(col => (
                    <th key={col} style={{
                      padding: '14px 20px',
                      textAlign: 'left',
                      fontSize: 9,
                      letterSpacing: 4,
                      textTransform: 'uppercase',
                      color: 'var(--olive)',
                      fontWeight: 600,
                    }}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* One row per mass entry — index used for zebra striping */}
              <tbody>
                {MASSES.map((s, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? 'var(--cream)' : 'transparent', // alternating rows
                      borderBottom: '1px solid var(--divider)',
                      transition: 'background 0.2s',
                    }}
                    onMouseOver={e => { e.currentTarget.style.background = 'rgba(168,137,58,0.08)'; }}
                    onMouseOut={e => { e.currentTarget.style.background = i % 2 === 0 ? 'var(--cream)' : 'transparent'; }}
                  >
                    {/* Day column — styled in gold as a visual anchor */}
                    <td style={{ padding: '18px 20px', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
                      {s.day}
                    </td>
                    {/* Time — olive color to visually separate from name */}
                    <td style={{ padding: '18px 20px', fontSize: 14, color: 'var(--olive)', fontWeight: 400, letterSpacing: 1 }}>
                      {s.time}
                    </td>
                    {/* Notes — muted, smallest text — supplementary info */}
                    <td style={{ padding: '18px 20px', fontSize: 12, color: 'var(--stone)', fontWeight: 300 }}>
                      {s.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 3: CLERGY
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Section heading */}
          <div className="reveal" style={{ marginBottom: 60 }}>
            <SectionLabel text="Our Leadership" />
            <h2 style={sectionTitle}>
              Meet the <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Clergy</em>
            </h2>
            <GoldRule />
          </div>

          {/* CSS grid: auto-fill columns, min 260px wide each */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
            {CLERGY.map((c, i) => (
              // transitionDelay staggers the reveal — like dominos falling in sequence
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <img
                  src={c.photo}
                  alt={c.name}
                  style={{
                    width: '100%',
                    height: 300,
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
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
        SECTION 4: BRIEF HISTORY
      ══════════════════════════════════ */}
      <section style={{
        padding: '110px 60px',
        background: 'var(--olive-deep)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle dot-grid texture overlay — purely decorative */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(250,248,242,0.5) 39px, rgba(250,248,242,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(250,248,242,0.5) 39px, rgba(250,248,242,0.5) 40px)',
        }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

          {/* Left column — slides in from the left on scroll */}
          <div className="reveal-left">
            <SectionLabel text="Our Story" light />
            <h2 style={{ ...sectionTitle, color: 'var(--cream)', fontSize: 'clamp(38px, 5vw, 60px)' }}>
              A Brief <em style={{ fontStyle: 'italic' }}>History</em>
            </h2>
            <GoldRule light />
            {/* Three history paragraphs — colour is cream at 60% opacity for hierarchy */}
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

          {/* Right column — slides in from the right on scroll */}
          <div className="reveal-right">
            <PlaceholderImg height={440} label="Cathedral Exterior c. 1920" style={{ border: '1px solid rgba(168,137,58,0.3)' }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 5: TIMELINE
          A vertical centred track with
          alternating left/right milestone cards.
          Even-indexed items sit on the left,
          odd-indexed on the right — like a
          zigzag stitch down the page.
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>

          {/* Section heading */}
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 70 }}>
            <SectionLabel text="Milestones" />
            <h2 style={sectionTitle}>
              Our <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Timeline</em>
            </h2>
            <GoldRule centered />
          </div>

          {/* Timeline track wrapper — positioned so cards can anchor to the centre line */}
          <div style={{ position: 'relative' }}>
            {/* Vertical centre line — the "thread" all milestone dots hang on */}
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: 1, background: 'var(--divider)',
              transform: 'translateX(-50%)',
            }} />

            {/* Render each milestone as an alternating card */}
            {TIMELINE.map((ev, i) => (
              <TimelineItem key={i} {...ev} index={i} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   SUB-COMPONENT: TimelineItem
   Renders one milestone card, positioned left or right
   of the centre line based on its index (even = left).
   Each card has a coloured dot that sits on the centre line.
───────────────────────────────────────────────────────── */
function TimelineItem({ year, title, desc, index }) {
  const isLeft = index % 2 === 0; // true → card on left side

  return (
    <div
      className="reveal"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        // Push the card to the correct half by adjusting padding
        justifyContent: isLeft ? 'flex-end' : 'flex-start',
        paddingRight: isLeft ? 'calc(50% + 36px)' : 0,
        paddingLeft:  isLeft ? 0 : 'calc(50% + 36px)',
        marginBottom: 48,
        position: 'relative',
      }}
    >
      {/* Dot on the centre line — gold for "Today", olive for past events */}
      <div style={{
        position: 'absolute', left: '50%', top: 10,
        transform: 'translateX(-50%)',
        width: 12, height: 12, borderRadius: '50%',
        background: index === 5 ? 'var(--gold)' : 'var(--olive)',
        border: '3px solid var(--cream)',
        zIndex: 1,
        boxShadow: '0 0 0 1px var(--olive)',
      }} />

      {/* Card body */}
      <div style={{ background: 'var(--warm)', border: '1px solid var(--divider)', padding: '22px 24px', maxWidth: 300 }}>
        {/* Year in large serif — acts as a visual anchor */}
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: 'var(--olive)', lineHeight: 1 }}>{year}</p>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, color: 'var(--charcoal)', margin: '6px 0 8px' }}>{title}</p>
        <p style={{ fontSize: 13, color: 'var(--stone)', fontFamily: "'Jost', sans-serif", fontWeight: 300, lineHeight: 1.8 }}>{desc}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   SHARED STYLE OBJECTS
   Defined once at the bottom so they can be reused across
   multiple JSX elements without repeating inline styles.
   Think of these like named presets on a mixing board.
───────────────────────────────────────────────────────── */

// Section title — large, light-weight Cormorant serif
const sectionTitle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 300,
  lineHeight: 1.1,
  color: 'var(--charcoal)',
  fontSize: 'clamp(38px, 5vw, 60px)',
};

// Filled olive button — used for the primary CTA
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

// Outlined ghost button — used for secondary CTA
// Borders/text are cream-toned so they show on the dark hero photo
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