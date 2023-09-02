import { IonButton, IonContent, IonIcon, IonPage } from '@ionic/react'
import styles from './TabRound.module.scss'
import { settingsOutline } from 'ionicons/icons'
import { Menu } from './components'

const TabRound = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={styles.page}>
          <div className={styles.content}>
            <IonButton
              shape="round"
              color="light"
              className={styles.settingButton}
            >
              <IonIcon slot="icon-only" icon={settingsOutline}></IonIcon>
            </IonButton>

            <br />
            <Menu
              bgColor="#00C2E4"
              photoStyle={{ paddingRight: '40px' }}
              photo={''}
            >
              Game <br />
              Hành Trình Kinh Thánh
            </Menu>
            <Menu
              bgColor="#0762C8"
              photoStyle={{ paddingRight: '20px' }}
              photo={''}
            >
              Sống <br />
              Lời Chúa mỗi ngày
            </Menu>
            <Menu bgColor="#FFC107" photo={''}>
              Thực hành
              <br />
              bác ái
            </Menu>
            <Menu bgColor="#FF7B02" photo={''}>
              App
              <br />
              Công Giáo cho bạn
            </Menu>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default TabRound
