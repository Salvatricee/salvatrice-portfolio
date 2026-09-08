export default function SIMonogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Salvatrice Igabineza monogram">
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" fill="none" />
      <text x="20" y="28" textAnchor="middle" fill="currentColor" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="400" fontSize="22">
        S
      </text>
    </svg>
  );
}