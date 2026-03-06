// Placeholder image component — replace src prop with a real image path
// when photos are ready.
// Usage: <PlaceholderImg label="The Nave" height={300} />
//        <PlaceholderImg src="/images/nave.jpg" label="The Nave" height={300} />

export default function PlaceholderImg({ src, label = 'Church Photo', height = 280, style = {} }) {
    // If a real image src is provided, render it
    if (src) {
      return (
        <img
          src={src}
          alt={label}
          style={{
            width: '100%',
            height,
            objectFit: 'cover',
            display: 'block',
            ...style,
          }}
        />
      );
    }
  
    // Otherwise render the styled placeholder
    return (
      <div style={{
        width: '100%',
        height,
        background: 'linear-gradient(135deg, var(--olive-pale) 0%, var(--warm) 100%)',
        border: '1px solid var(--divider)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        ...style,
      }}>
        {/* Camera / photo icon */}
        <svg width={40} height={40} viewBox="0 0 40 40" fill="none">
          <rect x={5} y={12} width={30} height={22} rx={2}
            stroke="var(--olive-light)" strokeWidth={1.5} fill="none" />
          <circle cx={15} cy={20} r={4}
            stroke="var(--gold)" strokeWidth={1.2} fill="none" />
          <path d="M5 28 L13 20 L20 26 L27 18 L35 28"
            stroke="var(--olive-light)" strokeWidth={1.2} fill="none" />
          {/* cross above for church feel */}
          <line x1={20} y1={4} x2={20} y2={12}
            stroke="var(--gold)" strokeWidth={1.5} />
          <line x1={15} y1={7} x2={25} y2={7}
            stroke="var(--gold)" strokeWidth={1.5} />
        </svg>
  
        <span style={{
          fontSize: 11,
          letterSpacing: 3,
          textTransform: 'uppercase',
          color: 'var(--stone)',
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
        }}>
          {label}
        </span>
      </div>
    );
  }
  