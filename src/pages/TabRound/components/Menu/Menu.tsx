// import { CSSProperties, ReactNode } from 'react'
import styles from './Menu.module.scss'

interface Props {
  // bgColor: string
  // children: ReactNode
  photo: string
  // photoStyle?: CSSProperties
  key: string
  onClick: () => void
}

export const Menu = ({ photo, onClick }: Props) => {
  return (
    <button className={styles.container} onClick={onClick}>
      <img src={photo} alt="game" />
    </button>
  )
}
