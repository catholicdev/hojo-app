import cloud from '../assets/bottom_cloud.png'
import leftGrass from '../assets/bottom_grass_left.png'
import rightGrass from '../assets/bottom_grass_right.png'

export const BottomArt = ({ className }: { className: string }) => (
  <div className={className} style={{ width: '100%' }}>
    <div style={{ position: 'relative' }}>
      <img src={cloud} alt="cloud" style={{ width: '100%' }} />
      <img
        src={leftGrass}
        alt="left grass"
        style={{ position: 'absolute', left: 0, bottom: 0 }}
      />
      <img
        src={rightGrass}
        alt="right grass"
        style={{ position: 'absolute', right: 0, bottom: 0 }}
      />
    </div>
  </div>
)
