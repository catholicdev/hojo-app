import React, { useEffect } from 'react'
import { IonCard, IonCardContent, IonContent } from '@ionic/react'
import { useLazyGetDailyBibleQuery, useUpdateFavoriteBibleMutation } from '@api'

import { Stack } from '@components'
import styles from '@pages/TabBible/SelectedBible.module.scss'

import unFavorite from '../assets/unFavorite.svg'
import favorite from '../assets/favorite.svg'
import download from '../assets/download.svg'
import share from '../assets/share.svg'
import { useDispatch } from '@providers'
import { setLoading } from '@providers/app'

const SelectedBible = () => {
  const dispatch = useDispatch()
  const [getDailyBible, { data, isLoading }] = useLazyGetDailyBibleQuery()
  const dailyBible = data?.data
  const [updateFavorite] = useUpdateFavoriteBibleMutation()

  useEffect(() => {
    getDailyBible()
  }, [getDailyBible])

  useEffect(() => {
    dispatch(setLoading(isLoading))
  }, [dispatch, isLoading])

  const handleClickFavorite = async () => {
    try {
      await updateFavorite({
        dailyBibleSentenceId: dailyBible?.id ?? 0,
        isFavorite: !dailyBible?.isFavorite ?? false,
      }).unwrap()
    } catch (e) {
      console.log(e)
      /// TODO: show toast when error
    }
  }

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
                <p className={styles.sentence}>{dailyBible?.sentence}</p>
                <p>
                  {dailyBible?.bookAbbreviation} {dailyBible?.chapterSequence},{' '}
                  {dailyBible?.sequence}
                </p>
                <Stack
                  flexDirection={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  className={styles.stackAction}
                >
                  <img src={download} alt="download" />
                  <img
                    onClick={handleClickFavorite}
                    src={dailyBible?.isFavorite ? favorite : unFavorite}
                    alt="favorite"
                  />
                  <img src={share} alt="share" />
                </Stack>
              </Stack>
            </IonCardContent>
          </IonCard>
        </Stack>
      </div>
    </IonContent>
  )
}

export default SelectedBible
