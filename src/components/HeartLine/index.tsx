import styles from './HeartLine.module.scss'

function HeartLine() {
  return (
    <div className={styles.heartLine} aria-hidden="true">
      <svg viewBox="0 0 220 50" xmlns="http://www.w3.org/2000/svg">
        <path
          d="
            M 5 31
            C 25 29, 38 33, 55 38
            C 70 43, 82 45, 94 42

            C 87 35, 78 28, 78 19
            C 78 11, 84 6, 91 6
            C 98 6, 103 11, 106 17

            C 109 11, 114 6, 121 6
            C 128 6, 134 11, 134 19
            C 134 29, 122 37, 106 46

            C 123 39, 137 35, 151 35
            C 170 35, 188 35, 215 25
          "
        />
      </svg>
    </div>
  )
}

export default HeartLine
