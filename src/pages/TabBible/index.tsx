import { IonPage } from '@ionic/react'

import { useState } from 'react'

import StartPage from '@pages/TabBible/components/StartPage'
import SelectedBible from '@pages/TabBible/components/SelectedBible'

const TabBible = () => {
  const [content, setContent] = useState('start')

  const handleChangeContent = () => {
    setContent('daily-bible')
  }

  const ToggleContent = (content: string) => {
    switch (content) {
      case 'start':
        return <StartPage onClick={handleChangeContent} />
      case 'daily-bible':
        return <SelectedBible />
      default:
        return <></>
    }
  }

  return <IonPage>{ToggleContent(content)}</IonPage>
}

export default TabBible
