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

const FOUNDING_COMMITTEE = [
  { name: 'Fr. Timothy Kiplagat',  role: 'Cathedral Administrator',        since: '2017' },
  { name: 'Moses Wamutoro',        role: 'Chairman · St. Martin De Porres', since: '2017' },
  { name: 'Joseph Leshau',         role: 'Vice Chair · St. Teresa',         since: '2017' },
  { name: 'Eng. Reuben Tuwei',     role: 'Secretary · St. Patrick',         since: '2017' },
  { name: 'John Simiyu',           role: 'Vice Secretary · St. Martha',     since: '2017' },
  { name: 'Eunice Kipkorir',       role: 'Treasurer · St. Bernadette',      since: '2017' },
];

const TIMELINE = [
  { year: '2005', title: 'A Seed is Planted',       desc: 'Catholic students at Moi University Annex campus gather every Sunday in the former Mushroom Farm building in Acacia. A community is quietly born.' },
  { year: '2006', title: 'First Chaplain',           desc: 'Late Bishop Cornelius Korir answers the students\' plea and assigns Fr. David Kibet to celebrate weekly masses for the growing congregation.' },
  { year: '2009', title: 'CSA Founded',              desc: 'After returning from the Cathedral, students regroup under Mrs. Rebecca Sing\'oei — the first patron — forming the Catholic Students Association (CSA).' },
  { year: '2011', title: 'Fr. Kirui Appointed',      desc: 'Bishop Korir assigns Fr. Charles Kirui as Chaplain. Masses move from Seminar Room 51 to Lecture Hall 3 as the congregation grows beyond students.' },
  { year: '2017', title: 'Jenga Kanisa Initiative',  desc: 'A pivotal meeting on 11th June forms a six-member committee to spearhead the purchase of land for a permanent church home in Annex.' },
  { year: '2019', title: 'Land Secured',             desc: 'A 2.5-acre parcel is acquired after M-Oriental Bank grants a Ksh 28 million loan, credited on 4th April. The dream of a home becomes tangible.' },
  { year: '2022', title: 'Ground-Breaking',          desc: 'Two online Harambees raise Ksh 37.5 million — clearing the loan in just 1 year and 8 months. The ground-breaking ceremony takes place on Palm Sunday.' },
  { year: '2023', title: 'A Parish is Born',         desc: 'On 18th June, Bishop Dominic Kimengich declares All Saints a full Parish. Fr. Michael Mutai is appointed founding Parish Priest on 19th June.' },
];

const APPRECIATED = [
  'Bishop Cornelius Korir of blessed memory',
  'Bishop Emeritus Maurice Crowley',
  'Bishop Dominic Kimengich',
  'Fr. Timothy Kiplagat & the Cathedral Priests',
  'Fr. Sospeter Kangogo & the Seminary Parish',
  'The CSA Alumni',
  'The Friends of Annex',
  'The Christians of All Saints, St. Pius X & St. Lucy Rono Farm',
  'The Leadership of Uasin Gishu County & all people of good will',
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
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(250,248,242,0.3) 30px, rgba(250,248,242,0.3) 31px)' }} />

        <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 10, letterSpacing: 5, textTransform: 'uppercase', color: 'var(--gold-light)', fontWeight: 500, animation: 'fadeUp 0.8s ease 0.2s both' }}>
          All Saints Catholic Church · Annex, Eldoret
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(52px, 8vw, 96px)', lineHeight: 1, color: 'var(--cream)', animation: 'fadeUp 0.8s ease 0.4s both' }}>
          About <em style={{ fontStyle: 'italic' }}>Us</em>
        </h1>
        <GoldRule centered light style={{ animation: 'fadeUp 0.8s ease 0.6s both' }} />
        <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 15, fontWeight: 300, lineHeight: 1.9, color: 'rgba(250,248,242,0.6)', maxWidth: 480, margin: '0 auto', animation: 'fadeUp 0.8s ease 0.8s both' }}>
          Born from faith, built by community. Serving Annex, Eldoret since 2005.
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

            <div style={{ background: 'var(--warm)', borderLeft: '3px solid var(--olive)', padding: '24px 28px', marginBottom: 20 }}>
              <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--gold)', fontFamily: "'Jost',sans-serif", fontWeight: 500, marginBottom: 10 }}>Our Mission</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.7 }}>
                To proclaim the Gospel of Jesus Christ through worship, sacrament, and service — nurturing a community where students, families, and neighbours are known, loved, and sent to love the world.
              </p>
            </div>

            <div style={{ background: 'var(--warm)', borderLeft: '3px solid var(--gold)', padding: '24px 28px' }}>
              <p style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--gold)', fontFamily: "'Jost',sans-serif", fontWeight: 500, marginBottom: 10 }}>Our Vision</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.7 }}>
                A Parish at the heart of Annex — where faith, justice, and belonging are not distant ideals, but the daily rhythm of a community rooted in Christ.
              </p>
            </div>
          </div>

          <div className="reveal-right">
          <PlaceholderImg src="./images/arial-church.png" height={420} label="All Saints Catholic Church, Annex" zoom={2.5}/>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginTop: 2 }}>
              {['2005 Founded', '3 Stations', '2023 Parish', '1 Family'].map((s, i) => (
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
          HISTORY — DARK SECTION
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px', background: 'var(--olive-deep)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(250,248,242,0.5) 39px, rgba(250,248,242,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(250,248,242,0.5) 39px, rgba(250,248,242,0.5) 40px)' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div className="reveal-left">
            <SectionLabel text="Our Story" light />
            <h2 style={{ ...sectionTitle, color: 'var(--cream)', fontSize: 'clamp(38px, 5vw, 60px)' }}>
              Rooted in <em style={{ fontStyle: 'italic' }}>Faith</em>
            </h2>
            <GoldRule light />
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, lineHeight: 1.9, color: 'rgba(250,248,242,0.65)', marginBottom: 18 }}>
              All Saints began not with grand architecture, but with a handful of Catholic students at Moi University Annex campus gathering in a converted mushroom farm building. From that humble beginning in 2005, a community took root.
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, lineHeight: 1.9, color: 'rgba(250,248,242,0.65)', marginBottom: 18 }}>
              Through the guidance of late Bishop Cornelius Korir, the dedication of successive chaplains, and the tireless work of the Jenga Kanisa committee, the community acquired 2.5 acres of land — clearing a Ksh 28 million loan in a remarkable 1 year and 8 months through community Harambees.
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, lineHeight: 1.9, color: 'rgba(250,248,242,0.65)' }}>
              On 18th June 2023, Bishop Dominic Kimengich declared All Saints a full Parish — a moment eighteen years in the making.
            </p>
          </div>
          <div className="reveal-right">
          <PlaceholderImg src="./images/ground-breaking.jpg" height={420} label="ground breaking 2022" zoom={2.5}/>
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
              A Journey of <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Faith</em>
            </h2>
            <GoldRule centered />
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'var(--divider)', transform: 'translateX(-50%)' }} />
            {TIMELINE.map((ev, i) => (
              <TimelineItem key={i} {...ev} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FOUNDING COMMITTEE
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px', background: 'var(--warm)', borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          <div className="reveal" style={{ marginBottom: 56 }}>
            <SectionLabel text="Leadership" />
            <h2 style={sectionTitle}>
              Founding <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Committee</em>
            </h2>
            <GoldRule />
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 15, fontWeight: 300, lineHeight: 1.9, color: 'var(--stone)', maxWidth: 520 }}>
              Formed on 11th June 2017, this committee carried the Jenga Kanisa vision from a dream into the parish we call home today.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
            {FOUNDING_COMMITTEE.map((m, i) => (
              <div key={i} className="reveal"
                style={{ background: 'var(--cream)', border: '1px solid var(--divider)', padding: '28px 22px', transition: 'transform 0.3s', transitionDelay: `${i * 0.08}s` }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
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
          APPRECIATION
      ══════════════════════════════════ */}
      <section style={{ padding: '110px 60px', background: 'var(--olive-deep)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(250,248,242,0.3) 30px, rgba(250,248,242,0.3) 31px)' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>

          <div className="reveal">
            <SectionLabel text="With Gratitude" light />
            <h2 style={{ ...sectionTitle, color: 'var(--cream)', fontSize: 'clamp(36px, 4vw, 54px)' }}>
              We <em style={{ fontStyle: 'italic' }}>Appreciate</em>
            </h2>
            <GoldRule centered light />
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, color: 'rgba(250,248,242,0.7)', lineHeight: 1.9, marginBottom: 48 }}>
              The Annex Family sincerely thanks God for the gift of this parish, and every soul who made it possible.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 48 }}>
              {APPRECIATED.map((name, i) => (
                <span key={i} style={{
                  fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: 2,
                  textTransform: 'uppercase', color: 'var(--gold-light)',
                  border: '1px solid rgba(201,168,76,0.3)', padding: '8px 16px',
                }}>
                  {name}
                </span>
              ))}
            </div>

            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontStyle: 'italic', color: 'var(--gold-light)', lineHeight: 1.8 }}>
              "All Saints — Walk with us and pray for us."
            </p>
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
              A glimpse into the spaces, ceremonies, and community life of All Saints Catholic Church, Annex.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
            <div style={{ gridColumn: '1/3' }} className="reveal"><PlaceholderImg src="./images/beautiful-exterior.jpg" height={340} label="The Parish Grounds" /></div>
            <div style={{ gridColumn: '3/4' }} className="reveal"><PlaceholderImg src="./images/construction.jpg" height={340} label="Sunday Mass" /></div>
            <div className="reveal"><PlaceholderImg src="./images/committee-building.jpg" height={240} label="CSA Fellowship" /></div>
            <div className="reveal"><PlaceholderImg src="./images/bishop-building-school.jpg" height={240} label="Ground-Breaking 2022" /></div>
            <div className="reveal"><PlaceholderImg src="./images/choir-singing.png" height={240} label="Parish Inauguration 2023" /></div>
            <div style={{ gridColumn: '1/2' }} className="reveal"><PlaceholderImg src="./images/fr-mrtirop.png" height={280} label="Community Harambee" /></div>
            <div style={{ gridColumn: '2/4' }} className="reveal"><PlaceholderImg src="./images/people_interior.png" height={280} label="Fr. Mutai's Reception, July 2023" /></div>
          </div>
        </div>
      </section>

    </div>
  );
}

// ── Reused from Home.jsx ──
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
      <div style={{
        position: 'absolute', left: '50%', top: 10,
        transform: 'translateX(-50%)',
        width: 12, height: 12, borderRadius: '50%',
        background: index === 7 ? 'var(--gold)' : 'var(--olive)',
        border: '3px solid var(--cream)',
        zIndex: 1,
        boxShadow: '0 0 0 1px var(--olive)',
      }} />
      <div style={{ background: 'var(--warm)', border: '1px solid var(--divider)', padding: '22px 24px', maxWidth: 300 }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: 'var(--olive)', lineHeight: 1 }}>{year}</p>
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