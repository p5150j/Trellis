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

          {/* Hexagon pattern for background texture - darker */}
          <pattern id="hexPattern" width="80" height="70" patternUnits="userSpaceOnUse">
            <polygon points="40,0 80,20 80,50 40,70 0,50 0,20" fill="none" stroke="#1B4D4A" strokeWidth="1" opacity="0.18" />
          </pattern>

          {/* Vignette mask - fades out from center */}
          <radialGradient id="vignetteMask" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="60%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="vignette">
            <rect width="100%" height="100%" fill="url(#vignetteMask)" />
          </mask>

          {/* Sharp glow */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft glow for ambient particles */}
          <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>

          {/* Gradient overlay - more visible */}
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.06" />
            <stop offset="50%" stopColor="transparent" stopOpacity="0" />
            <stop offset="100%" stopColor="#4A7C79" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Background layers - hex pattern with vignette fade */}
        <rect width="100%" height="100%" fill="url(#hexPattern)" mask="url(#vignette)" />

        {/* === AMBIENT FLOATING PARTICLES - BIGGER === */}
        <g>
          {/* Slow drifting particles */}
          <circle cx="80" cy="60" r="5" fill="#6B9AC4" filter="url(#softGlow)" opacity="0.5">
            <animate attributeName="cy" values="60;40;60" dur="8s" repeatCount="indefinite" />
            <animate attributeName="cx" values="80;95;80" dur="12s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="520" cy="90" r="4" fill="#4A7C79" filter="url(#softGlow)" opacity="0.45">
            <animate attributeName="cy" values="90;65;90" dur="10s" repeatCount="indefinite" />
            <animate attributeName="cx" values="520;505;520" dur="14s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.35;0.6;0.35" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="340" r="4.5" fill="#C9879E" filter="url(#softGlow)" opacity="0.45">
            <animate attributeName="cy" values="340;315;340" dur="9s" repeatCount="indefinite" />
            <animate attributeName="cx" values="150;170;150" dur="11s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.35;0.6;0.35" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="320" r="5" fill="#5CA99D" filter="url(#softGlow)" opacity="0.5">
            <animate attributeName="cy" values="320;295;320" dur="7s" repeatCount="indefinite" />
            <animate attributeName="cx" values="500;485;500" dur="9s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.65;0.4" dur="4.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="40" r="3.5" fill="#D4956A" filter="url(#softGlow)" opacity="0.4">
            <animate attributeName="cy" values="40;20;40" dur="11s" repeatCount="indefinite" />
            <animate attributeName="cx" values="400;415;400" dur="8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.55;0.3" dur="5.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="40" cy="180" r="4" fill="#9B84B8" filter="url(#softGlow)" opacity="0.45">
            <animate attributeName="cy" values="180;160;180" dur="10s" repeatCount="indefinite" />
            <animate attributeName="cx" values="40;55;40" dur="13s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.35;0.6;0.35" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="570" cy="240" r="4.5" fill="#5BA3AD" filter="url(#softGlow)" opacity="0.5">
            <animate attributeName="cy" values="240;220;240" dur="8s" repeatCount="indefinite" />
            <animate attributeName="cx" values="570;555;570" dur="10s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.65;0.4" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="370" r="3.5" fill="#D4A86A" filter="url(#softGlow)" opacity="0.4">
            <animate attributeName="cy" values="370;350;370" dur="9s" repeatCount="indefinite" />
            <animate attributeName="cx" values="250;265;250" dur="12s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.55;0.3" dur="5s" repeatCount="indefinite" />
          </circle>
        </g>

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

        {/* === DATA INDICATORS - BIGGER floating metrics === */}
        <g style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>
          {/* Input side indicators */}
          <text x="50" y="50" fill="#6B9AC4" opacity="0.6">
            <tspan>API</tspan>
            <animate attributeName="opacity" values="0.45;0.75;0.45" dur="3s" repeatCount="indefinite" />
          </text>
          <text x="-20" y="140" fill="#5CA99D" opacity="0.55">
            <tspan>DB</tspan>
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite" />
          </text>
          <text x="60" y="225" fill="#D4956A" opacity="0.6">
            <tspan>CSV</tspan>
            <animate attributeName="opacity" values="0.45;0.75;0.45" dur="3.5s" repeatCount="indefinite" />
          </text>
          <text x="20" y="285" fill="#C9879E" opacity="0.55">
            <tspan>XML</tspan>
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4.5s" repeatCount="indefinite" />
          </text>
          <text x="100" y="350" fill="#9B84B8" opacity="0.5">
            <tspan>JSON</tspan>
            <animate attributeName="opacity" values="0.35;0.65;0.35" dur="5s" repeatCount="indefinite" />
          </text>

          {/* Output side indicators */}
          <text x="450" y="70" fill="#4A7C79" opacity="0.55">
            <tspan>REST</tspan>
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite" />
          </text>
          <text x="520" y="215" fill="#4A7C79" opacity="0.6">
            <tspan>SYNC</tspan>
            <animate attributeName="opacity" values="0.45;0.75;0.45" dur="4s" repeatCount="indefinite" />
          </text>
          <text x="480" y="360" fill="#4A7C79" opacity="0.55">
            <tspan>PUSH</tspan>
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4.5s" repeatCount="indefinite" />
          </text>

          {/* Floating metrics near hub */}
          <text x="160" y="155" fill="#5BA3AD" opacity="0.5">
            <tspan>128kb</tspan>
            <animate attributeName="opacity" values="0.35;0.65;0.35" dur="5s" repeatCount="indefinite" />
          </text>
          <text x="390" y="145" fill="#4A7C79" opacity="0.5">
            <tspan>99.9%</tspan>
            <animate attributeName="opacity" values="0.35;0.65;0.35" dur="6s" repeatCount="indefinite" />
          </text>
          <text x="380" y="265" fill="#4A7C79" opacity="0.45">
            <tspan>24ms</tspan>
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="5.5s" repeatCount="indefinite" />
          </text>
        </g>

        {/* === Scattered accent nodes - muted === */}
        <circle cx="120" cy="90" r="2" fill="#6B9AC4" opacity="0.4" />
        <circle cx="500" cy="120" r="2" fill="#4A7C79" opacity="0.35" />
        <circle cx="540" cy="300" r="2.5" fill="#4A7C79" opacity="0.4" />
        <circle cx="60" cy="220" r="1.5" fill="#D4956A" opacity="0.35" />
        <circle cx="180" cy="320" r="2" fill="#C9879E" opacity="0.35" />
        <circle cx="450" cy="80" r="1.5" fill="#5CA99D" opacity="0.3" />

        {/* Additional geometric accents - BIGGER */}
        <polygon points="90,125 100,115 110,125 100,135" fill="#5CA99D" opacity="0.4">
          <animate attributeName="opacity" values="0.3;0.55;0.3" dur="4s" repeatCount="indefinite" />
        </polygon>
        <polygon points="530,170 540,160 550,170 540,180" fill="#4A7C79" opacity="0.35">
          <animate attributeName="opacity" values="0.25;0.5;0.25" dur="5s" repeatCount="indefinite" />
        </polygon>
        <rect x="125" y="270" width="12" height="12" fill="#D4956A" opacity="0.35" transform="rotate(45 131 276)">
          <animate attributeName="opacity" values="0.25;0.5;0.25" dur="4.5s" repeatCount="indefinite" />
        </rect>
        <rect x="490" y="280" width="10" height="10" fill="#4A7C79" opacity="0.3" transform="rotate(45 495 285)">
          <animate attributeName="opacity" values="0.2;0.45;0.2" dur="5.5s" repeatCount="indefinite" />
        </rect>
        {/* Extra geometric shapes */}
        <polygon points="180,85 188,75 196,85 188,95" fill="#6B9AC4" opacity="0.35">
          <animate attributeName="opacity" values="0.25;0.5;0.25" dur="4.5s" repeatCount="indefinite" />
        </polygon>
        <rect x="420" y="130" width="10" height="10" fill="#4A7C79" opacity="0.3" transform="rotate(45 425 135)">
          <animate attributeName="opacity" values="0.2;0.45;0.2" dur="5s" repeatCount="indefinite" />
        </rect>

        {/* Labels as chips */}
        <g>
          <rect x="15" y="365" width="70" height="22" rx="4" fill="#1B4D4A" opacity="0.12" />
          <text x="50" y="380" fill="#1B4D4A" style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }} textAnchor="middle" opacity="0.8">
            SOURCES
          </text>
        </g>
        <g>
          <rect x="247" y="262" width="66" height="22" rx="4" fill="#1B4D4A" opacity="0.12" />
          <text x="280" y="277" fill="#1B4D4A" style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }} textAnchor="middle" opacity="0.8">
            PROCESS
          </text>
        </g>
        <g>
          <rect x="485" y="365" width="70" height="22" rx="4" fill="#1B4D4A" opacity="0.12" />
          <text x="520" y="380" fill="#1B4D4A" style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }} textAnchor="middle" opacity="0.8">
            OUTPUTS
          </text>
        </g>
      </svg>
    </div>
  );
}
