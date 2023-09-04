import React from 'react'
import { IonCard, IonCardContent, IonContent } from '@ionic/react'
import { useGetDailyBibleQuery } from '@api'
import { DailyBibleResp } from '@models'
import { Stack, Loading } from '@components'
import styles from '@pages/TabBible/SelectedBible.module.scss'

const SelectedBible = () => {
  const { data, isLoading } = useGetDailyBibleQuery('')
  const result: DailyBibleResp = data?.data

  if (isLoading) return <Loading />
  // if (!result) return <IonContent>Missing Sentence!</IonContent>

  return (
    <IonContent fullscreen scrollY={false} className={styles.page}>
      <div className={styles.selectedBible}>
        <Stack justifyContent={'center'}>
          <p className={styles.title}>Lời Chúa hôm nay</p>
          <IonCard className={styles.selectedBibleCard}>
            <IonCardContent className={styles.selectedBibleCardContent}>
              <Stack
                alignItems={'flex-start'}
                justifyContent={'center'}
                className={styles.stackSentence}
              >
                <p className={styles.sentence}>{result.sentence}</p>
                <p>
                  {result.bookAbbreviation} {result.chapterSequence},{' '}
                  {result.sequence}
                </p>
              </Stack>
            </IonCardContent>
          </IonCard>
        </Stack>
      </div>
    </IonContent>
  )
}

export default SelectedBible
