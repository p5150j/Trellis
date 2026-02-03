"use client";

export function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] overflow-visible">
      <svg
        viewBox="0 0 600 400"
        className="w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Subtle grid */}
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.4" fill="currentColor" className="text-foreground" opacity="0.06" />
          </pattern>

          {/* Sharp glow */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>
        </defs>

        {/* Background grid */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* === INPUT STREAMS - Many sources === */}

        {/* Stream 1 - Sharp from top-left corner */}
        <g>
          <path
            d="M -200 -80 L 20 60 L 80 60 Q 140 60, 170 100 L 230 167"
            fill="none"
            stroke="#6B9AC4"
            strokeWidth="1.5"
            opacity="0.7"
          />
          <circle r="4" fill="#6B9AC4" filter="url(#glow)">
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="#in1" />
            </animateMotion>
          </circle>
          <circle r="4" fill="#6B9AC4" filter="url(#glow)">
            <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite">
              <mpath href="#in1" />
            </animateMotion>
          </circle>
        </g>
        <path id="in1" d="M -200 -80 L 20 60 L 80 60 Q 140 60, 170 100 L 230 167" fill="none" opacity="0" />

        {/* Stream 2 - From top */}
        <g>
          <path
            d="M 150 -60 Q 160 40, 175 100 Q 195 150, 230 183"
            fill="none"
            stroke="#5BA3AD"
            strokeWidth="1.5"
            opacity="0.65"
          />
          <circle r="3.5" fill="#5BA3AD" filter="url(#glow)">
            <animateMotion dur="2.2s" repeatCount="indefinite">
              <mpath href="#in2" />
            </animateMotion>
          </circle>
          <circle r="3.5" fill="#5BA3AD" filter="url(#glow)">
            <animateMotion dur="2.2s" begin="1.1s" repeatCount="indefinite">
              <mpath href="#in2" />
            </animateMotion>
          </circle>
        </g>
        <path id="in2" d="M 150 -60 Q 160 40, 175 100 Q 195 150, 230 183" fill="none" opacity="0" />

        {/* Stream 3 - Long horizontal from far left top */}
        <g>
          <path
            d="M -180 120 Q -50 110, 60 140 Q 140 165, 230 195"
            fill="none"
            stroke="#5CA99D"
            strokeWidth="1.5"
            opacity="0.7"
          />
          <circle r="4" fill="#5CA99D" filter="url(#glow)">
            <animateMotion dur="2.8s" repeatCount="indefinite">
              <mpath href="#in3" />
            </animateMotion>
          </circle>
          <circle r="4" fill="#5CA99D" filter="url(#glow)">
            <animateMotion dur="2.8s" begin="1.4s" repeatCount="indefinite">
              <mpath href="#in3" />
            </animateMotion>
          </circle>
        </g>
        <path id="in3" d="M -180 120 Q -50 110, 60 140 Q 140 165, 230 195" fill="none" opacity="0" />

        {/* Stream 4 - Straight from left */}
        <g>
          <path
            d="M -150 207 L 50 207 Q 140 207, 230 207"
            fill="none"
            stroke="#D4956A"
            strokeWidth="1.5"
            opacity="0.7"
          />
          <circle r="4" fill="#D4956A" filter="url(#glow)">
            <animateMotion dur="2s" repeatCount="indefinite">
              <mpath href="#in4" />
            </animateMotion>
          </circle>
          <circle r="4" fill="#D4956A" filter="url(#glow)">
            <animateMotion dur="2s" begin="1s" repeatCount="indefinite">
              <mpath href="#in4" />
            </animateMotion>
          </circle>
        </g>
        <path id="in4" d="M -150 207 L 50 207 Q 140 207, 230 207" fill="none" opacity="0" />

        {/* Stream 5 - Curve from left-bottom area */}
        <g>
          <path
            d="M -120 280 Q 20 270, 100 245 Q 160 225, 230 223"
            fill="none"
            stroke="#C9879E"
            strokeWidth="1.5"
            opacity="0.7"
          />
          <circle r="4" fill="#C9879E" filter="url(#glow)">
            <animateMotion dur="2.4s" repeatCount="indefinite">
              <mpath href="#in5" />
            </animateMotion>
          </circle>
          <circle r="4" fill="#C9879E" filter="url(#glow)">
            <animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite">
              <mpath href="#in5" />
            </animateMotion>
          </circle>
        </g>
        <path id="in5" d="M -120 280 Q 20 270, 100 245 Q 160 225, 230 223" fill="none" opacity="0" />

        {/* Stream 6 - Sweep up from bottom */}
        <g>
          <path
            d="M 80 520 Q 100 400, 130 320 Q 170 250, 230 223"
            fill="none"
            stroke="#9B84B8"
            strokeWidth="1.5"
            opacity="0.65"
          />
          <circle r="3.5" fill="#9B84B8" filter="url(#glow)">
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="#in6" />
            </animateMotion>
          </circle>
          <circle r="3.5" fill="#9B84B8" filter="url(#glow)">
            <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite">
              <mpath href="#in6" />
            </animateMotion>
          </circle>
        </g>
        <path id="in6" d="M 80 520 Q 100 400, 130 320 Q 170 250, 230 223" fill="none" opacity="0" />

        {/* Stream 7 - From bottom-left diagonal */}
        <g>
          <path
            d="M -100 450 L 40 340 Q 110 280, 165 245 L 230 215"
            fill="none"
            stroke="#D4A86A"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <circle r="3.5" fill="#D4A86A" filter="url(#glow)">
            <animateMotion dur="2.6s" repeatCount="indefinite">
              <mpath href="#in7" />
            </animateMotion>
          </circle>
        </g>
        <path id="in7" d="M -100 450 L 40 340 Q 110 280, 165 245 L 230 215" fill="none" opacity="0" />

        {/* Stream 8 - From far bottom */}
        <g>
          <path
            d="M 200 500 Q 205 400, 210 320 Q 220 260, 230 230"
            fill="none"
            stroke="#5EA88D"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <circle r="3.5" fill="#5EA88D" filter="url(#glow)">
            <animateMotion dur="2.8s" repeatCount="indefinite">
              <mpath href="#in8" />
            </animateMotion>
          </circle>
        </g>
        <path id="in8" d="M 200 500 Q 205 400, 210 320 Q 220 260, 230 230" fill="none" opacity="0" />

        {/* === CENTRAL HUB - Bigger, bolder === */}
        <g transform="translate(-20, -5)">
          {/* Outer hexagon - larger */}
          <polygon
            points="300,140 355,170 355,230 300,260 245,230 245,170"
            fill="none"
            stroke="#14B8A6"
            strokeWidth="1.5"
            opacity="0.3"
          />

          {/* Rotating ring - larger */}
          <circle cx="300" cy="200" r="50" fill="none" stroke="#14B8A6" strokeWidth="1" opacity="0.3" strokeDasharray="5 7">
            <animateTransform attributeName="transform" type="rotate" from="0 300 200" to="360 300 200" dur="30s" repeatCount="indefinite" />
          </circle>

          {/* Inner hexagon - larger */}
          <polygon
            points="300,165 328,182 328,218 300,235 272,218 272,182"
            fill="none"
            stroke="#14B8A6"
            strokeWidth="2"
            opacity="0.5"
          />

          {/* Core - larger */}
          <circle cx="300" cy="200" r="14" fill="url(#nodeGrad)" />
          <circle cx="300" cy="200" r="20" fill="none" stroke="#14B8A6" strokeWidth="1.5" opacity="0.7" />

          {/* Pulse - larger */}
          <circle cx="300" cy="200" r="14" fill="none" stroke="#14B8A6" strokeWidth="1.5" opacity="0.5">
            <animate attributeName="r" values="14;35;14" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Input connection points - muted colors */}
          <circle cx="250" cy="172" r="4" fill="#6B9AC4" />
          <circle cx="250" cy="188" r="4" fill="#5BA3AD" />
          <circle cx="250" cy="200" r="4" fill="#5CA99D" />
          <circle cx="250" cy="212" r="4" fill="#D4956A" />
          <circle cx="250" cy="228" r="4" fill="#C9879E" />

          {/* Output connection points - muted gray */}
          <circle cx="350" cy="175" r="4" fill="#4A7C79" />
          <circle cx="350" cy="200" r="4" fill="#4A7C79" />
          <circle cx="350" cy="225" r="4" fill="#4A7C79" />

          {/* Internal wiring - muted */}
          <line x1="250" y1="172" x2="286" y2="192" stroke="#6B9AC4" strokeWidth="1.5" opacity="0.5" />
          <line x1="250" y1="188" x2="286" y2="196" stroke="#5BA3AD" strokeWidth="1.5" opacity="0.5" />
          <line x1="250" y1="200" x2="286" y2="200" stroke="#5CA99D" strokeWidth="1.5" opacity="0.5" />
          <line x1="250" y1="212" x2="286" y2="204" stroke="#D4956A" strokeWidth="1.5" opacity="0.5" />
          <line x1="250" y1="228" x2="286" y2="208" stroke="#C9879E" strokeWidth="1.5" opacity="0.5" />

          <line x1="314" y1="192" x2="350" y2="175" stroke="#4A7C79" strokeWidth="1.5" opacity="0.5" />
          <line x1="314" y1="200" x2="350" y2="200" stroke="#4A7C79" strokeWidth="1.5" opacity="0.5" />
          <line x1="314" y1="208" x2="350" y2="225" stroke="#4A7C79" strokeWidth="1.5" opacity="0.5" />
        </g>

        {/* === OUTPUT STREAMS - Muted gray with hexagon particles === */}

        {/* Out 1 - Shoots to top right corner */}
        <g>
          <path
            d="M 330 170 L 400 120 Q 480 60, 560 10 L 750 -120"
            fill="none"
            stroke="#4A7C79"
            strokeWidth="1.5"
            opacity="0.55"
          />
          <polygon points="0,-5 4.3,-2.5 4.3,2.5 0,5 -4.3,2.5 -4.3,-2.5" fill="#4A7C79">
            <animateMotion dur="2s" repeatCount="indefinite" rotate="auto">
              <mpath href="#out1" />
            </animateMotion>
          </polygon>
          <polygon points="0,-5 4.3,-2.5 4.3,2.5 0,5 -4.3,2.5 -4.3,-2.5" fill="#4A7C79">
            <animateMotion dur="2s" begin="1s" repeatCount="indefinite" rotate="auto">
              <mpath href="#out1" />
            </animateMotion>
          </polygon>
        </g>
        <path id="out1" d="M 330 170 L 400 120 Q 480 60, 560 10 L 750 -120" fill="none" opacity="0" />

        {/* Out 2 - Gentle curve going way right */}
        <g>
          <path
            d="M 330 195 Q 440 190, 540 205 Q 650 225, 800 200"
            fill="none"
            stroke="#4A7C79"
            strokeWidth="1.5"
            opacity="0.55"
          />
          <polygon points="0,-5 4.3,-2.5 4.3,2.5 0,5 -4.3,2.5 -4.3,-2.5" fill="#4A7C79">
            <animateMotion dur="2.4s" repeatCount="indefinite" rotate="auto">
              <mpath href="#out2" />
            </animateMotion>
          </polygon>
          <polygon points="0,-5 4.3,-2.5 4.3,2.5 0,5 -4.3,2.5 -4.3,-2.5" fill="#4A7C79">
            <animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite" rotate="auto">
              <mpath href="#out2" />
            </animateMotion>
          </polygon>
        </g>
        <path id="out2" d="M 330 195 Q 440 190, 540 205 Q 650 225, 800 200" fill="none" opacity="0" />

        {/* Out 3 - Dramatic plunge to bottom right */}
        <g>
          <path
            d="M 330 220 L 400 270 Q 480 350, 580 440 L 750 580"
            fill="none"
            stroke="#4A7C79"
            strokeWidth="1.5"
            opacity="0.55"
          />
          <polygon points="0,-5 4.3,-2.5 4.3,2.5 0,5 -4.3,2.5 -4.3,-2.5" fill="#4A7C79">
            <animateMotion dur="2.6s" repeatCount="indefinite" rotate="auto">
              <mpath href="#out3" />
            </animateMotion>
          </polygon>
          <polygon points="0,-5 4.3,-2.5 4.3,2.5 0,5 -4.3,2.5 -4.3,-2.5" fill="#4A7C79">
            <animateMotion dur="2.6s" begin="1.3s" repeatCount="indefinite" rotate="auto">
              <mpath href="#out3" />
            </animateMotion>
          </polygon>
        </g>
        <path id="out3" d="M 330 220 L 400 270 Q 480 350, 580 440 L 750 580" fill="none" opacity="0" />

        {/* === Scattered accent nodes - muted === */}
        <circle cx="120" cy="90" r="2" fill="#6B9AC4" opacity="0.4" />
        <circle cx="500" cy="120" r="2" fill="#4A7C79" opacity="0.35" />
        <circle cx="540" cy="300" r="2.5" fill="#4A7C79" opacity="0.4" />
        <circle cx="60" cy="220" r="1.5" fill="#D4956A" opacity="0.35" />
        <circle cx="180" cy="320" r="2" fill="#C9879E" opacity="0.35" />
        <circle cx="450" cy="80" r="1.5" fill="#5CA99D" opacity="0.3" />

        {/* Labels - muted gray */}
        <text x="20" y="380" fill="#4A7C79" style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }} opacity="0.65">
          SOURCES
        </text>
        <text x="252" y="280" fill="#4A7C79" style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }} opacity="0.65">
          PROCESS
        </text>
        <text x="490" y="380" fill="#4A7C79" style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }} opacity="0.65">
          OUTPUTS
        </text>
      </svg>
    </div>
  );
}
