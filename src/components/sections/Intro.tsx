import Section from '@shared/Section'
import classNames from 'classnames/bind'
import styles from './Intro.module.scss'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import Text from '@shared/Text'
import HeartLine from '@/components/HeartLine'

const cx = classNames.bind(styles)

interface Parent {
  name: string
  phoneNumber: string
  account: {
    bankName: string
    accountNumber: string
  }
}
interface IntroProps {
  groomName: string
  groomParents: Parent[]
  brideName: string
  brideParents: Parent[]
  date: string
  locationName: string
  invitation: string
  intro: string
}

function Intro({
  groomName,
  groomParents,
  brideName,
  brideParents,
  date,
  locationName,
  invitation,
  intro,
}: IntroProps) {
  return (
    <Section className={cx('container')}>
      <HeartLine />

      <Text className={cx('invitation')}>{invitation}</Text>

      <div className={cx('wrap-location')}>
        <span>
          {format(parseISO(date), 'yyyy년 M월 d일 eeee', { locale: ko })}
        </span>
        <span>{locationName}</span>
      </div>

      <Text className={cx('intro')}>{intro}</Text>

      <div className={cx('wrap-persons')}>
        <ul>
          <li>
            <img
              src="https://res.cloudinary.com/y0qp0xrk/image/upload/v1784078190/intro_groom.png"
              alt="intro_groom"
            />
          </li>
          <li>
            <span>
              <s>신랑</s> {groomName}
            </span>
          </li>
          <li className={cx('parents')}>
            <span>
              <IconFlower className={cx('ico-flower')} />
              허정완
            </span>
            ·{groomParents[0].name}의 아들
          </li>
        </ul>
        <ul>
          <li>
            <img
              src="https://res.cloudinary.com/y0qp0xrk/image/upload/v1784078209/intro_bride.png"
              alt="intro_bride"
            />
          </li>
          <li>
            <span>
              <s>신부</s> {brideName}
            </span>
          </li>
          <li className={cx('parents')}>
            {brideParents[0].name}·{brideParents[1].name}의 딸
          </li>
        </ul>
      </div>
    </Section>
  )
}

function IconHeart({ className }: { className: string }) {
  return (
    <svg
      className={className}
      height="512px"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
    >
      <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
        <g>
          <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  )
}

function IconFlower({ className }: { className: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32">
      <g
        transform="scale(0.00255183 -0.00255183) translate(0 -12540)"
        fill="#000000"
        stroke="none"
      >
        <path d="M6104 11019 c-305 -27 -593 -136 -831 -315 -250 -187 -461 -479 -557 -771 -15 -46 -29 -83 -30 -83 -2 0 -36 13 -76 30 -260 107 -569 134 -845 74 -548 -120 -973 -542 -1091 -1084 -26 -120 -27 -439 -1 -558 22 -101 67 -241 100 -310 l25 -52 -41 -11 c-464 -120 -820 -411 -1023 -833 -70 -146 -107 -264 -134 -422 -19 -112 -22 -153 -17 -319 4 -136 11 -216 25 -283 128 -586 550 -1030 1131 -1187 47 -12 85 -27 84 -31 -1 -5 -18 -51 -38 -101 -19 -51 -47 -150 -61 -220 -34 -161 -38 -393 -10 -538 87 -449 353 -798 765 -1004 350 -176 807 -187 1167 -29 l100 44 29 -80 c67 -193 186 -383 340 -544 275 -289 616 -452 1025 -491 105 -10 329 0 430 19 235 44 465 143 648 279 254 188 443 445 551 747 l33 92 91 -40 c323 -141 732 -150 1053 -23 344 137 601 376 764 710 80 165 120 307 140 508 19 188 -15 436 -84 621 -14 38 -26 72 -26 76 0 4 24 14 53 20 238 57 513 215 703 405 377 377 538 938 424 1481 -119 572 -541 1014 -1120 1175 -63 17 -116 32 -117 33 -2 1 11 38 28 81 219 569 70 1199 -371 1569 -237 199 -474 297 -789 327 -204 19 -488 -24 -655 -100 -38 -17 -70 -30 -71 -29 -2 2 -19 51 -38 110 -203 607 -731 1003 -1411 1058 -141 11 -140 11 -272 -1z m303 -350 c278 -31 527 -145 730 -334 204 -189 333 -439 378 -730 19 -119 29 -147 70 -185 23 -22 36 -25 94 -25 65 0 70 2 153 58 107 72 228 129 338 159 75 20 107 23 270 22 172 0 191 -2 275 -28 182 -55 324 -137 453 -264 294 -289 381 -718 227 -1122 -24 -64 -76 -159 -146 -269 -57 -91 -46 -175 33 -234 18 -14 53 -21 134 -28 60 -5 134 -14 164 -20 274 -52 516 -182 701 -376 165 -173 277 -395 314 -628 20 -119 19 -340 0 -446 -62 -332 -251 -622 -525 -804 -168 -112 -331 -175 -525 -201 -60 -9 -125 -18 -143 -20 -44 -7 -99 -57 -113 -104 -16 -53 -5 -98 43 -171 60 -93 117 -220 146 -329 23 -86 26 -113 26 -280 0 -159 -3 -196 -22 -264 -109 -395 -400 -685 -788 -787 -125 -33 -367 -34 -495 -2 -119 30 -246 87 -363 163 -87 56 -106 64 -155 68 -95 6 -152 -48 -166 -155 -9 -75 -56 -240 -95 -333 -275 -664 -1063 -951 -1713 -623 -348 175 -593 505 -672 906 -20 98 -41 139 -87 167 -35 21 -100 26 -142 11 -13 -6 -51 -30 -84 -54 -117 -86 -288 -160 -434 -188 -103 -20 -308 -15 -416 9 -255 58 -485 207 -634 409 -60 82 -131 227 -165 338 -25 84 -27 102 -27 275 0 168 2 194 26 281 34 123 75 221 144 343 66 115 74 155 46 219 -26 58 -70 82 -172 91 -321 30 -588 147 -801 353 -185 178 -311 413 -354 662 -19 108 -19 325 0 433 61 350 301 685 614 858 147 80 319 133 493 150 120 12 170 34 198 90 36 70 25 119 -50 229 -57 83 -122 218 -153 316 -119 378 -6 798 288 1073 355 332 894 388 1299 135 149 -93 149 -93 201 -93 92 0 145 56 159 170 12 91 45 210 88 310 150 355 421 615 768 738 183 64 364 84 567 61z" />
        <path d="M6087 7274 c-287 -52 -531 -252 -641 -528 -42 -105 -59 -198 -58 -321 2 -227 88 -431 248 -591 282 -283 718 -336 1052 -127 187 116 324 297 383 508 31 107 33 314 5 420 -45 167 -123 302 -240 413 -207 196 -472 276 -749 226z" />
      </g>
    </svg>
  )
}

export default Intro
