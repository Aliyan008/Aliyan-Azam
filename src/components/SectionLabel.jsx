function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-serif text-xs text-ink-faint tracking-wider">
        {number}
      </span>
      <div className="h-px w-10 bg-warm-border" />
      <span className="text-xs uppercase tracking-widest text-ink-faint">
        {label}
      </span>
    </div>
  );
}

export default SectionLabel;
