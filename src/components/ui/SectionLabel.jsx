// Reusable small uppercase gold label shown above section titles
// Usage: <SectionLabel text="Our Story" />

export default function SectionLabel({ text, light = false }) {
    return (
      <p style={{
        fontFamily: "'Jost', sans-serif",
        fontSize: 10,
        letterSpacing: 5,
        textTransform: 'uppercase',
        color: light ? 'var(--gold-light)' : 'var(--gold)',
        marginBottom: 12,
        fontWeight: 500,
      }}>
        {text}
      </p>
    );
  }