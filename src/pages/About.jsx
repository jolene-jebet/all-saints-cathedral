import { useEffect } from 'react';
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

const COUNCIL = [
  { name: 'Eleanor Watts',    role: 'Warden',        since: '2020' },
  { name: 'Patrick Nkemelu', role: 'Warden',        since: '2022' },
  { name: 'Anita Johansson', role: 'Treasurer',     since: '2019' },
  { name: 'David Chen',      role: 'Secretary',     since: '2021' },
  { name: 'Maria Santos',    role: 'Council Member',since: '2023' },
  { name: 'Robert Achebe',   role: 'Council Member',since: '2023' },
];

const GALLERY = [
  { label: 'The Nave',         span: '1/3', rowSpan: '1/2', height: 340 },
  { label: 'Rose Window',      span: '3/4', rowSpan: '1/2', height: 340 },
  { label: 'Baptismal Font',   span: null,  rowSpan: null,   height: 240 },
  { label: 'Sunday Worship',   span: null,  rowSpan: null,   height: 240 },
  { label: 'Community Feast',  span: null,  rowSpan: null,   height: 240 },
  { label: 'Choir Rehearsal',  span: '1/2', rowSpan: '3/4', height: 280 },
  { label: 'Cathedral Gardens',span: '2/4', rowSpan: '3/4', height: 280 },
];

export default function About() {
  useReveal();

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
        {/* Diagonal texture */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(250,248,242,0.3) 30px, rgba(250,248,242,0.3) 31px)' }} />

        <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: 'var(--gold-light)', fontWeight: 500, animation: 'fadeUp 0.8s ease 0.2s both' }}>
          All Saints Cathedral
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(52px, 8vw, 96px)', lineHeight: 1, color: 'var(--cream)', animation: 'fadeUp 0.8s ease 0.4s both' }}>
          About <em style={{ fontStyle: 'italic' }}>Us</em>
        </h1>
        <GoldRule centered light style={{ animation: 'fadeUp 0.8s ease 0.6s both' }} />
        <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 15, fontWeight: 300, lineHeight: 1.9, color: 'rgba(250,248,242,0.6)', maxWidth: 480, margin: '0 auto', animation: 'fadeUp 0.8s ease 0.8s both' }}>
          Rooted in tradition. Open to all. Serving our city for over 175 years.
        </p>
      </section>

      {/* ══════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

          <div className="reveal-left">
            <SectionLabel text="Who We Are" />
            <h2 style={sectionTitle}>
              Mission &amp; <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Vision</em>
            </h2>
            <GoldRule />

            {/* Mission block */}
            <div style={{ background: 'var(--warm)', borderLeft: '3px solid var(--olive)', padding: '24px 28px', marginBottom: 20 }}>
              <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--gold)', fontFamily: "'Jost',sans-serif", fontWeight: 500, marginBottom: 10 }}>Our Mission</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.7 }}>
                To proclaim the Good News of Jesus Christ through worship, service, and radical welcome — nurturing a community where every person is known, loved, and sent to love the world.
              </p>
            </div>

            {/* Vision block */}
            <div style={{ background: 'var(--warm)', borderLeft: '3px solid var(--gold)', padding: '24px 28px' }}>
              <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--gold)', fontFamily: "'Jost',sans-serif", fontWeight: 500, marginBottom: 10 }}>Our Vision</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.7 }}>
                A Cathedral at the heart of the city and the soul of the community — where beauty, justice, and belonging are not ideals, but daily practice.
              </p>
            </div>
          </div>

          <div className="reveal-right">
            <PlaceholderImg height={420} label="Interior of All Saints" />
            {/* Stat tiles */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginTop: 2 }}>
              {['2,000+ Families', '175+ Years', '12 Ministries', '1 Community'].map((s, i) => (
                <div key={i} style={{ background: 'var(--olive-pale)', padding: '20px', textAlign: 'center' }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: 'var(--olive)' }}>{s.split(' ')[0]}</p>
                  <p style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--stone)', fontFamily: "'Jost',sans-serif", fontWeight: 400 }}>{s.split(' ').slice(1).join(' ')}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════
          PARISH COUNCIL
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px', background: 'var(--warm)', borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          <div className="reveal" style={{ marginBottom: 56 }}>
            <SectionLabel text="Leadership" />
            <h2 style={sectionTitle}>
              Parish <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Council</em>
            </h2>
            <GoldRule />
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 15, fontWeight: 300, lineHeight: 1.9, color: 'var(--stone)', maxWidth: 520 }}>
              Our Parish Council is a body of elected lay leaders who serve alongside the clergy to govern and guide the Cathedral community.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
            {COUNCIL.map((m, i) => (
              <div key={i} className="reveal"
                style={{ background: 'var(--cream)', border: '1px solid var(--divider)', padding: '28px 22px', transition: 'transform 0.3s', transitionDelay: `${i * 0.08}s` }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Avatar initial */}
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--olive-pale)', border: '1px solid var(--divider)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: 'var(--olive)' }}>{m.name[0]}</span>
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, color: 'var(--charcoal)', marginBottom: 4 }}>{m.name}</p>
                <p style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--olive)', fontFamily: "'Jost',sans-serif", fontWeight: 500, marginBottom: 6 }}>{m.role}</p>
                <p style={{ fontSize: 11, color: 'var(--stone)', fontFamily: "'Jost',sans-serif" }}>Since {m.since}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          IMAGE GALLERY
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          <div className="reveal" style={{ marginBottom: 56 }}>
            <SectionLabel text="Our Space" />
            <h2 style={sectionTitle}>
              Image <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Gallery</em>
            </h2>
            <GoldRule />
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 15, fontWeight: 300, lineHeight: 1.9, color: 'var(--stone)', maxWidth: 480 }}>
              A glimpse into the spaces, ceremonies, and community life of All Saints Cathedral.
            </p>
          </div>

          {/* Masonry grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
            <div style={{ gridColumn: '1/3' }} className="reveal"><PlaceholderImg height={340} label="The Nave" /></div>
            <div style={{ gridColumn: '3/4' }} className="reveal"><PlaceholderImg height={340} label="Rose Window" /></div>
            <div className="reveal"><PlaceholderImg height={240} label="Baptismal Font" /></div>
            <div className="reveal"><PlaceholderImg height={240} label="Sunday Worship" /></div>
            <div className="reveal"><PlaceholderImg height={240} label="Community Feast" /></div>
            <div style={{ gridColumn: '1/2' }} className="reveal"><PlaceholderImg height={280} label="Choir Rehearsal" /></div>
            <div style={{ gridColumn: '2/4' }} className="reveal"><PlaceholderImg height={280} label="Cathedral Gardens" /></div>
          </div>

          <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 12, color: 'var(--stone)', textAlign: 'center', marginTop: 24, fontWeight: 300 }}>
            ✦ &nbsp; Upload your photos to <code>public/images/</code> and pass the path as a <code>src</code> prop to replace placeholders &nbsp; ✦
          </p>
        </div>
      </section>

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