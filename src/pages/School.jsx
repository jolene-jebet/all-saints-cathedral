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
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const CORE_VALUES = ['Faith', 'Integrity', 'Compassion', 'Excellence', 'Service'];

const OBJECTIVES = [
  { title: 'Evangelization & Formation', desc: 'Enhance evangelization and child formation through holistic, quality education.' },
  { title: 'A Synod Mandate Fulfilled', desc: 'Serve as an income-generating project for the Parish, fulfilling the diocesan Synod call for every parish to establish a mission school.' },
  { title: 'Access for the Needy', desc: 'Support needy children within and beyond the parish in accessing quality education.' },
  { title: 'Empowering Young People', desc: 'Empower young people to grow in faith, character, and capability for the future.' },
];

const TIMELINE = [
  { year: 'Feb 2025', title: 'Station Council Recommendation', desc: 'The Station Council recommends establishing a mission school to serve the growing All Saints Parish Annex community.' },
  { year: '2025', title: 'Task Force Formed', desc: 'A dedicated Task Force of volunteer professionals in education, engineering, finance, administration, and governance is convened.' },
  { year: '2025', title: 'Legal Registration', desc: "The school achieves legal registration under the Catholic Diocese of Eldoret's proprietorship." },
  { year: '2025', title: 'Architectural Design Finalized', desc: 'A complete architectural design for the school campus is approved.' },
  { year: '2025', title: 'Environmental Impact Assessment', desc: 'A full Environmental Impact Assessment is completed, clearing the way for construction.' },
  { year: '30 Nov 2025', title: 'Brick-Laying Ceremony', desc: 'Construction begins with a brick-laying ceremony led by Rt. Rev. Bishop Dominic Kimengich, marking a milestone for the parish.' },
];

const BOM = [
  { name: 'Dr. Philemon Chepsiror', role: 'Board Chair' },
  { name: 'Eng. Reuben Tuei',       role: 'Board Member' },
  { name: 'Dr. Cleophas Kweyu',     role: 'Board Member' },
  { name: 'Ms. Diana Sirucha',      role: 'Board Member' },
  { name: 'Mr. Ferdinand Etiang',   role: 'Board Member' },
  { name: 'Fr. Michael Mutai',      role: 'Board Member' },
  { name: 'Mrs. Jane Kosgei',       role: 'Board Member' },
  { name: 'Tr. Esther Wanderi',     role: 'Board Member' },
];

export default function School() {
  useReveal();
  const navigate = useNavigate();

  return (
    <div style={{ background: 'var(--cream)' }}>

      {/* ══════════════════════════════════
          PAGE HEADER
      ══════════════════════════════════ */}
      <section style={{
        paddingTop: 160, paddingBottom: 100,
        paddingLeft: 60, paddingRight: 60,
        textAlign: 'center',
        background: 'linear-gradient(135deg, var(--olive-deep) 0%, var(--olive) 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(250,248,242,0.3) 30px, rgba(250,248,242,0.3) 31px)' }} />

        <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: 'var(--gold-light)', fontWeight: 500, animation: 'fadeUp 0.8s ease 0.2s both' }}>
          All Saints Parish Annex · Eldoret Diocese
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(44px, 7vw, 84px)', lineHeight: 1.05, color: 'var(--cream)', animation: 'fadeUp 0.8s ease 0.4s both' }}>
          All Saints Mission<br />School <em style={{ fontStyle: 'italic' }}>Annex</em>
        </h1>
        <GoldRule centered light style={{ animation: 'fadeUp 0.8s ease 0.6s both' }} />
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontStyle: 'italic', fontWeight: 300, color: 'var(--gold-light)', animation: 'fadeUp 0.8s ease 0.8s both' }}>
          Fides, Scientia et Ministerium
        </p>
        <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, fontWeight: 300, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(250,248,242,0.6)', marginTop: 6, animation: 'fadeUp 0.8s ease 0.9s both' }}>
          Faith, Knowledge and Service
        </p>
      </section>

      {/* ══════════════════════════════════
          OVERVIEW
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

          <div className="reveal-left">
            <SectionLabel text="Overview" />
            <h2 style={sectionTitle}>
              A School Born of <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Faith</em>
            </h2>
            <GoldRule />
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 15, fontWeight: 300, lineHeight: 1.9, color: 'var(--stone)' }}>
              All Saints Mission School Annex (ASMSA) is a Competency-Based Curriculum
              (CBC) compliant, mixed-day school offering education from Early
              Childhood Development (ECD) through Junior Secondary School (Grade 9).
              It is proprietor-owned by the Catholic Diocese of Eldoret, established
              to serve the growing All Saints Parish Annex community — carrying
              forward the same spirit of faith and service that built the parish.
            </p>
          </div>

          <div className="reveal-right">
            <PlaceholderImg label="All Saints Mission School Annex" height={340} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginTop: 2 }}>
              {[
                { top: '2025', bottom: 'Established' },
                { top: 'ECD–G9', bottom: 'Levels Offered' },
                { top: 'CBC', bottom: 'Curriculum' },
                { top: 'Mixed', bottom: 'Day School' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--olive-pale)', padding: '20px', textAlign: 'center' }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: 'var(--olive)' }}>{s.top}</p>
                  <p style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--stone)', fontFamily: "'Jost',sans-serif", fontWeight: 400 }}>{s.bottom}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          VISION · MISSION · MOTTO · VALUES
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px', background: 'var(--warm)', borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <SectionLabel text="What Guides Us" />
            <h2 style={sectionTitle}>
              Vision, Mission &amp; <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Values</em>
            </h2>
            <GoldRule centered />
          </div>

          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 40 }}>
            <div style={{ background: 'var(--cream)', borderLeft: '3px solid var(--olive)', padding: '28px 30px' }}>
              <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--gold)', fontFamily: "'Jost',sans-serif", fontWeight: 500, marginBottom: 10 }}>Our Vision</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.7 }}>
                To be a Beacon of Excellence in Faith and Knowledge.
              </p>
            </div>
            <div style={{ background: 'var(--cream)', borderLeft: '3px solid var(--gold)', padding: '28px 30px' }}>
              <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--gold)', fontFamily: "'Jost',sans-serif", fontWeight: 500, marginBottom: 10 }}>Our Mission</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.7 }}>
                To provide a holistic education anchored on moral upbringing and servant leadership.
              </p>
            </div>
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--gold)', fontFamily: "'Jost',sans-serif", fontWeight: 500, marginBottom: 12 }}>Our Motto</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontStyle: 'italic', fontWeight: 400, color: 'var(--olive)', lineHeight: 1.5 }}>
              "Fides, Scientia et Ministerium"
            </p>
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: 1, color: 'var(--stone)', marginTop: 6 }}>
              Faith, Knowledge and Service
            </p>
          </div>

          <div className="reveal" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--gold)', fontFamily: "'Jost',sans-serif", fontWeight: 500, marginBottom: 16 }}>Core Values</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              {CORE_VALUES.map((v, i) => (
                <span key={i} style={{
                  fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: 2,
                  textTransform: 'uppercase', color: 'var(--olive)',
                  border: '1px solid var(--divider)', background: 'var(--cream)',
                  padding: '8px 18px',
                }}>
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          OBJECTIVES
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          <div className="reveal" style={{ marginBottom: 56 }}>
            <SectionLabel text="Our Purpose" />
            <h2 style={sectionTitle}>
              Objectives
            </h2>
            <GoldRule />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 2 }}>
            {OBJECTIVES.map((o, i) => (
              <div key={i} className="reveal"
                style={{ background: 'var(--warm)', border: '1px solid var(--divider)', padding: '30px 26px', transition: 'transform 0.3s', transitionDelay: `${i * 0.08}s` }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 400, color: 'var(--gold)', marginBottom: 14 }}>{String(i + 1).padStart(2, '0')}</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, fontWeight: 400, color: 'var(--charcoal)', marginBottom: 8 }}>{o.title}</p>
                <p style={{ fontSize: 13, color: 'var(--stone)', fontFamily: "'Jost',sans-serif", fontWeight: 300, lineHeight: 1.8 }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          BACKGROUND — DARK SECTION
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px', background: 'var(--olive-deep)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(250,248,242,0.5) 39px, rgba(250,248,242,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(250,248,242,0.5) 39px, rgba(250,248,242,0.5) 40px)' }} />

        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <SectionLabel text="Background" light />
          <h2 style={{ ...sectionTitle, color: 'var(--cream)' }}>
            Our <em style={{ fontStyle: 'italic' }}>Journey</em>
          </h2>
          <GoldRule centered light />
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, lineHeight: 1.9, color: 'rgba(250,248,242,0.65)' }}>
            The school was established following a Station Council recommendation
            in February 2025, spearheaded by a dedicated Task Force made up of
            volunteer professionals in education, engineering, finance,
            administration, and governance. Key milestones include legal
            registration, a finalized architectural design, a completed
            Environmental Impact Assessment, and the start of construction —
            marked by a brick-laying ceremony led by Rt. Rev. Bishop Dominic
            Kimengich on 30th November 2025.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════
          MILESTONES TIMELINE
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>

          <div className="reveal" style={{ textAlign: 'center', marginBottom: 70 }}>
            <SectionLabel text="Milestones" />
            <h2 style={sectionTitle}>
              Building the <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Dream</em>
            </h2>
            <GoldRule centered />
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'var(--divider)', transform: 'translateX(-50%)' }} />
            {TIMELINE.map((ev, i) => (
              <TimelineItem key={i} {...ev} index={i} last={i === TIMELINE.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          BOARD OF MANAGEMENT
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px', background: 'var(--warm)', borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          <div className="reveal" style={{ marginBottom: 56 }}>
            <SectionLabel text="Leadership" />
            <h2 style={sectionTitle}>
              Board of <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Management</em>
            </h2>
            <GoldRule />
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 15, fontWeight: 300, lineHeight: 1.9, color: 'var(--stone)', maxWidth: 520 }}>
              Guiding ASMSA with wisdom, professional expertise, and a shared
              commitment to faith-based education.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
            {BOM.map((m, i) => (
              <div key={i} className="reveal"
                style={{ background: 'var(--cream)', border: '1px solid var(--divider)', padding: '28px 22px', transition: 'transform 0.3s', transitionDelay: `${i * 0.08}s` }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--olive-pale)', border: '1px solid var(--divider)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: 'var(--olive)' }}>{m.name.replace(/^(Dr\.|Eng\.|Mr\.|Mrs\.|Ms\.|Fr\.|Tr\.)\s/, '')[0]}</span>
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, color: 'var(--charcoal)', marginBottom: 4 }}>{m.name}</p>
                <p style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--olive)', fontFamily: "'Jost',sans-serif", fontWeight: 500 }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ENROLLMENT / CONTACT CTA
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px', background: 'var(--olive-deep)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(250,248,242,0.3) 30px, rgba(250,248,242,0.3) 31px)' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <SectionLabel text="Join Our Family" light />
          <h2 style={{ ...sectionTitle, color: 'var(--cream)', fontSize: 'clamp(36px, 4vw, 54px)' }}>
            Enroll a Child at <em style={{ fontStyle: 'italic' }}>ASMSA</em>
          </h2>
          <GoldRule centered light />
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, color: 'rgba(250,248,242,0.7)', lineHeight: 1.9, marginBottom: 40 }}>
            For enrollment inquiries or to learn more about ASMSA, reach out to
            the Parish Office — we would love to welcome your family.
          </p>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="mailto:office@allsaintscathedral.org" style={{ textDecoration: 'none' }}>
              <button
                style={btnPrimary}
                onMouseOver={e => { e.currentTarget.style.background = 'var(--olive)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseOut={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Enrollment Inquiries
              </button>
            </a>
            <button
              onClick={() => navigate('/about')}
              style={btnGhost}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(250,248,242,0.4)'; e.currentTarget.style.color = 'var(--cream)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Contact the Parish
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

// ── Reused from About.jsx ──
function TimelineItem({ year, title, desc, index, last }) {
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
      <div style={{
        position: 'absolute', left: '50%', top: 10,
        transform: 'translateX(-50%)',
        width: 12, height: 12, borderRadius: '50%',
        background: last ? 'var(--gold)' : 'var(--olive)',
        border: '3px solid var(--cream)',
        zIndex: 1,
        boxShadow: '0 0 0 1px var(--olive)',
      }} />
      <div style={{ background: 'var(--warm)', border: '1px solid var(--divider)', padding: '22px 24px', maxWidth: 300 }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: 'var(--olive)', lineHeight: 1 }}>{year}</p>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, color: 'var(--charcoal)', margin: '6px 0 8px' }}>{title}</p>
        <p style={{ fontSize: 13, color: 'var(--stone)', fontFamily: "'Jost', sans-serif", fontWeight: 300, lineHeight: 1.8 }}>{desc}</p>
      </div>
    </div>
  );
}

const sectionTitle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 300,
  lineHeight: 1.1,
  color: 'var(--charcoal)',
  fontSize: 'clamp(36px, 4vw, 54px)',
};

const btnPrimary = {
  padding: '14px 40px',
  background: 'var(--gold)',
  color: 'var(--charcoal)',
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
