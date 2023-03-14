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
      >
        <img src={image} alt="game" />
      </div>
      <div className="content">
        Game Hành Trình Kinh Thánh
      </div>
    </button>
  )
}
