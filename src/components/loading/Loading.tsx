import React from 'react'
import { IonSpinner } from '@ionic/react'

import styles from './Loading.module.scss'
import { useSelector } from 'react-redux'
import { selectLoading } from '@providers/app'

interface Props {
  loading?: boolean
  children: JSX.Element
  type?: 'blur' | 'full'
}

const LoadingComp = ({ loading, children }: Props) => {
  const isLoading = useSelector(selectLoading)
  return (
    <>
      {(loading || isLoading) && (
        <div className={styles.backdrop}>
          <IonSpinner />
        </div>
      )}
      {children}
    </>
  )
}

export const Loading = React.memo(LoadingComp)
