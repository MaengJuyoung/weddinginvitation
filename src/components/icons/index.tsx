import type { SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement>

export function IconArrowDown({ className, ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 512 512" aria-hidden="true" {...props}>
      <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5" />
    </svg>
  )
}

export function IconPhone({ className, ...props }: IconProps) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9.15 5.5H12.3L14.1 10.15L11.95 12.3C13.15 14.8 15.2 16.85 17.7 18.05L19.85 15.9L24.5 17.7V20.85C24.5 22.05 23.55 23 22.35 23C13.85 23 7 16.15 7 7.65C7 6.45 7.95 5.5 9.15 5.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconCopy({ className, ...props }: IconProps) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x="7.5" y="5.5" width="14" height="18" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 26.5H22.5C24.1569 26.5 25.5 25.1569 25.5 23.5V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconKakaoPay({ className, ...props }: IconProps) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M16 4.5C8.82 4.5 3 9.35 3 15.32C3 19.67 6.08 23.4 10.5 25.1L9.25 30L14.85 26.08C15.23 26.11 15.61 26.13 16 26.13C23.18 26.13 29 21.28 29 15.32C29 9.35 23.18 4.5 16 4.5Z" fill="currentColor" />
    </svg>
  )
}

export function IconExternalLink({ className, ...props }: IconProps) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M8 24L24 8M12 8H24V20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconFlower({ className, ...props }: IconProps) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <g transform="scale(0.00255183 -0.00255183) translate(0 -12540)" fill="currentColor" stroke="none">
        <path d="M6104 11019 c-305 -27 -593 -136 -831 -315 -250 -187 -461 -479 -557 -771 -15 -46 -29 -83 -30 -83 -2 0 -36 13 -76 30 -260 107 -569 134 -845 74 -548 -120 -973 -542 -1091 -1084 -26 -120 -27 -439 -1 -558 22 -101 67 -241 100 -310 l25 -52 -41 -11 c-464 -120 -820 -411 -1023 -833 -70 -146 -107 -264 -134 -422 -19 -112 -22 -153 -17 -319 4 -136 11 -216 25 -283 128 -586 550 -1030 1131 -1187 47 -12 85 -27 84 -31 -1 -5 -18 -51 -38 -101 -19 -51 -47 -150 -61 -220 -34 -161 -38 -393 -10 -538 87 -449 353 -798 765 -1004 350 -176 807 -187 1167 -29 l100 44 29 -80 c67 -193 186 -383 340 -544 275 -289 616 -452 1025 -491 105 -10 329 0 430 19 235 44 465 143 648 279 254 188 443 445 551 747 l33 92 91 -40 c323 -141 732 -150 1053 -23 344 137 601 376 764 710 80 165 120 307 140 508 19 188 -15 436 -84 621 -14 38 -26 72 -26 76 0 4 24 14 53 20 238 57 513 215 703 405 377 377 538 938 424 1481 -119 572 -541 1014 -1120 1175 -63 17 -116 32 -117 33 -2 1 11 38 28 81 219 569 70 1199 -371 1569 -237 199 -474 297 -789 327 -204 19 -488 -24 -655 -100 -38 -17 -70 -30 -71 -29 -2 2 -19 51 -38 110 -203 607 -731 1003 -1411 1058 -141 11 -140 11 -272 -1z m303 -350 c278 -31 527 -145 730 -334 204 -189 333 -439 378 -730 19 -119 29 -147 70 -185 23 -22 36 -25 94 -25 65 0 70 2 153 58 107 72 228 129 338 159 75 20 107 23 270 22 172 0 191 -2 275 -28 182 -55 324 -137 453 -264 294 -289 381 -718 227 -1122 -24 -64 -76 -159 -146 -269 -57 -91 -46 -175 33 -234 18 -14 53 -21 134 -28 60 -5 134 -14 164 -20 274 -52 516 -182 701 -376 165 -173 277 -395 314 -628 20 -119 19 -340 0 -446 -62 -332 -251 -622 -525 -804 -168 -112 -331 -175 -525 -201 -60 -9 -125 -18 -143 -20 -44 -7 -99 -57 -113 -104 -16 -53 -5 -98 43 -171 60 -93 117 -220 146 -329 23 -86 26 -113 26 -280 0 -159 -3 -196 -22 -264 -109 -395 -400 -685 -788 -787 -125 -33 -367 -34 -495 -2 -119 30 -246 87 -363 163 -87 56 -106 64 -155 68 -95 6 -152 -48 -166 -155 -9 -75 -56 -240 -95 -333 -275 -664 -1063 -951 -1713 -623 -348 175 -593 505 -672 906 -20 98 -41 139 -87 167 -35 21 -100 26 -142 11 -13 -6 -51 -30 -84 -54 -117 -86 -288 -160 -434 -188 -103 -20 -308 -15 -416 9 -255 58 -485 207 -634 409 -60 82 -131 227 -165 338 -25 84 -27 102 -27 275 0 168 2 194 26 281 34 123 75 221 144 343 66 115 74 155 46 219 -26 58 -70 82 -172 91 -321 30 -588 147 -801 353 -185 178 -311 413 -354 662 -19 108 -19 325 0 433 61 350 301 685 614 858 147 80 319 133 493 150 120 12 170 34 198 90 36 70 25 119 -50 229 -57 83 -122 218 -153 316 -119 378 -6 798 288 1073 355 332 894 388 1299 135 149 -93 149 -93 201 -93 92 0 145 56 159 170 12 91 45 210 88 310 150 355 421 615 768 738 183 64 364 84 567 61z" />
        <path d="M6087 7274 c-287 -52 -531 -252 -641 -528 -42 -105 -59 -198 -58 -321 2 -227 88 -431 248 -591 282 -283 718 -336 1052 -127 187 116 324 297 383 508 31 107 33 314 5 420 -45 167 -123 302 -240 413 -207 196 -472 276 -749 226z" />
      </g>
    </svg>
  )
}

export function IconPin({ className, ...props }: IconProps) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path d="M16 3.5C10.477 3.5 6 7.876 6 13.274C6 20.311 14.495 28.116 15.461 28.979C15.769 29.254 16.231 29.254 16.539 28.979C17.505 28.116 26 20.311 26 13.274C26 7.876 21.523 3.5 16 3.5Z" fill="#E8C900" />
      <circle cx="16" cy="13" r="3.15" fill="#fff" />
    </svg>
  )
}

export function IconBus({ className, ...props }: IconProps) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x="7" y="5" width="18" height="20" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9.5 8.5H22.5V16.5H9.5V8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 20H23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11.5" cy="22" r="1.2" fill="currentColor" /><circle cx="20.5" cy="22" r="1.2" fill="currentColor" />
      <path d="M10 25V27M22 25V27" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function IconSubway({ className, ...props }: IconProps) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x="6" y="4.5" width="20" height="18.5" rx="2.8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8.5H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="9" y="11.5" width="14" height="6" rx="0.8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="11.5" cy="20" r="1.4" fill="currentColor" /><circle cx="20.5" cy="20" r="1.4" fill="currentColor" />
      <path d="M11 23L7 28M21 23L25 28M9 25H23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IconCar({ className, ...props }: IconProps) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M8.2 13.2L10.1 8.5C10.45 7.62 11.3 7 12.25 7H19.75C20.7 7 21.55 7.62 21.9 8.5L23.8 13.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 13.2H24.5C25.33 13.2 26 13.87 26 14.7V22.2C26 23.19 25.19 24 24.2 24H7.8C6.81 24 6 23.19 6 22.2V14.7C6 13.87 6.67 13.2 7.5 13.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M6.5 16H4.8V13.8H7.2M25.5 16H27.2V13.8H24.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10.5" cy="18.2" r="1.5" stroke="currentColor" strokeWidth="1.7" /><circle cx="21.5" cy="18.2" r="1.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 22H22M8.5 24V27M23.5 24V27" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function IconParking({ className, ...props }: IconProps) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x="5" y="5" width="22" height="22" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 23V9.5H17.1C20.1 9.5 22 11.3 22 14C22 16.7 20.1 18.5 17.1 18.5H12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconHeart({ className, ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 512 512" aria-hidden="true" {...props}>
      <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1C283.3,86.999,310.67,59.628,365.4,59.628z" />
    </svg>
  )
}

export function IconError({ className, ...props }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2M9 10h.01M15 10h.01M9.5 15.05a3.5 3.5 0 0 1 5 0" />
    </svg>
  )
}

export function IconCloseCircle({ className, ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
      <path d="M16.707,7.293a1,1,0,0,0-1.414,0L12,10.586,8.707,7.293A1,1,0,1,0,7.293,8.707L10.586,12,7.293,15.293a1,1,0,1,0,1.414,1.414L12,13.414l3.293,3.293a1,1,0,0,0,1.414-1.414L13.414,12l3.293-3.293A1,1,0,0,0,16.707,7.293Z" />
    </svg>
  )
}
