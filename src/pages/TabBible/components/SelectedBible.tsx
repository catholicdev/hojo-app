import React, { useEffect } from 'react'
import { IonCard, IonCardContent, IonContent } from '@ionic/react'
import { useGetDailyBibleQuery, useUpdateFavoriteBibleMutation } from '@api'

import { Stack, Loading } from '@components'
import styles from '@pages/TabBible/SelectedBible.module.scss'

import unFavorite from '../assets/unFavorite.svg'
import favorite from '../assets/favorite.svg'
import download from '../assets/download.svg'
import share from '../assets/share.svg'
import { setDailyBible, useDispatch } from '@providers'
import { useSelector } from 'react-redux'
import { selectDailyBible } from '@providers/userInfo/selectors'
import { DailyBibleResp } from '@models'

const SelectedBible = () => {
  const dispatch = useDispatch()
  const dailyBileSelector = useSelector(selectDailyBible)

  const { data, isLoading, error } = useGetDailyBibleQuery('')
  const [updateFavorite] = useUpdateFavoriteBibleMutation()

  useEffect(() => {
    if (!isLoading && !error) {
      dispatch(setDailyBible(data?.data))
    }
  }, [isLoading, error, data, dispatch])

  const handleClickFavorite = async () => {
    try {
      const result = (
        await updateFavorite({
          dailyBibleSentenceId: dailyBileSelector?.id ?? 0,
          isFavorite: !dailyBileSelector?.isFavorite ?? false,
        }).unwrap()
      ).data as DailyBibleResp

      dispatch(setDailyBible(result))
    } catch (e) {
      console.log(e)
      /// TODO: show toast when error
    }
  }

  return (
    <Loading loading={isLoading}>
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
                  <p className={styles.sentence}>
                    {dailyBileSelector?.sentence}
                  </p>
                  <p>
                    {dailyBileSelector?.bookAbbreviation}{' '}
                    {dailyBileSelector?.chapterSequence},{' '}
                    {dailyBileSelector?.sequence}
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
                      src={
                        dailyBileSelector?.isFavorite ? favorite : unFavorite
                      }
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
    </Loading>
  )
}

export default SelectedBible
