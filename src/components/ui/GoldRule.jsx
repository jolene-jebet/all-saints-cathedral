// Reusable gold divider line used under section headings
// Usage: <GoldRule /> or <GoldRule centered /> or <GoldRule light />

export default function GoldRule({ centered = false, light = false, style = {} }) {
    return (
      <div style={{
        width: 50,
        height: 1,
        background: light ? 'var(--gold-light)' : 'var(--gold)',
        margin: centered ? '24px auto' : '24px 0',
        ...style,
      }} />
    );
  }