import './Menu.scss'

import image from '../../assets/game.png'

interface Props {
  bgColor: string
  photo: string
}

export const Menu = ({ bgColor }: Props) => {
  return (
    <button className="home-menu">
      <div
        className="icon-background"
        style={{ backgroundColor: bgColor }}
      ></div>
      <div className="content">
        <img src={image} alt="game" />
        <span>Game Hành Trình Kinh Thánh</span>
      </div>
    </button>
  )
}
