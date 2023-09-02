import { CSSProperties, ReactNode } from 'react'
import styles from './Menu.module.scss'

interface Props {
  bgColor: string
  children: ReactNode
  photo: string
  photoStyle?: CSSProperties
}

export const Menu = ({ bgColor, photo, photoStyle, children }: Props) => {
  return (
    <button className={styles.container}>
      <div
        className={styles.iconBackground}
        style={{ backgroundColor: bgColor, ...photoStyle }}
      >
        <img src={photo} alt="game" />
      </div>
      <div className={styles.empty}></div>
      <div className={styles.content}>{children}</div>
    </button>
  )
}
