import { Stack } from '@components'
import { Menu } from '@pages/TabRound/components'
import styles from './Round.module.scss'
import { useLazyGetRoundsQuery } from '@api'
import { useEffect } from 'react'
import { RoundResp } from '@models'

export const Round = () => {
  const [getRounds, { data }] = useLazyGetRoundsQuery()
  const response = data?.data ?? []

  useEffect(() => {
    getRounds()
  }, [getRounds])

  const handleRoundClick = (roundId: string) => {
    console.log(roundId)
  }

  return (
    <Stack justifyContent={'flex-start'} className={styles.roundContent}>
      {response?.map((round: RoundResp) => (
        <Menu
          photo={round.image}
          key={round.id}
          onClick={() => handleRoundClick(round.id)}
        />
      ))}
    </Stack>
  )
}
