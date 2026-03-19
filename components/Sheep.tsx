import type { CSSProperties } from "react";

type SheepProps = {
  size?: number;
  glow?: boolean;
  className?: string;
  style?: CSSProperties;
};

export default function Sheep({
  size = 160,
  glow = false,
  className = "",
  style,
}: SheepProps) {
  const glowOpacity = glow ? "0.44" : "0.28";
  const haloRadius = glow ? 108 : 102;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <radialGradient
          id="sheepHalo"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(120 118) rotate(90) scale(104)"
        >
          <stop stopColor="var(--purple-light)" stopOpacity={glowOpacity} />
          <stop offset="1" stopColor="var(--purple-light)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="120" cy="118" r={haloRadius} fill="url(#sheepHalo)" />

      <ellipse cx="120" cy="188" rx="57" ry="11" fill="var(--border)" />

      <path
        d="M73 108C73 83 92 64 117 64H133C159 64 178 83 178 108C178 133 159 152 133 152H117C92 152 73 133 73 108Z"
        fill="var(--white-warm)"
      />
      <circle cx="93" cy="93" r="22" fill="var(--white-warm)" />
      <circle cx="147" cy="89" r="24" fill="var(--white-warm)" />
      <circle cx="166" cy="117" r="20" fill="var(--white-warm)" />
      <circle cx="79" cy="121" r="18" fill="var(--white-warm)" />
      <circle cx="120" cy="77" r="26" fill="var(--white-warm)" />

      <rect
        x="97"
        y="115"
        width="58"
        height="41"
        rx="20"
        fill="var(--bg-card)"
        stroke="var(--border)"
      />

      <circle cx="111" cy="132" r="4" fill="var(--white-warm)" />
      <circle cx="141" cy="132" r="4" fill="var(--white-warm)" />
      <path
        d="M118 145C120 148 123 149 126 149C130 149 133 147 135 145"
        stroke="var(--purple-pale)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <rect x="101" y="149" width="8" height="22" rx="4" fill="var(--white-warm)" />
      <rect x="131" y="149" width="8" height="22" rx="4" fill="var(--white-warm)" />

      <path
        d="M96 114C93 112 91 108 91 104C91 97 96 92 103 92C109 92 114 97 114 104C114 108 112 112 109 114"
        stroke="var(--border)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M137 111C134 108 132 104 132 100C132 94 137 89 143 89C149 89 154 94 154 100C154 104 152 108 149 111"
        stroke="var(--border)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
