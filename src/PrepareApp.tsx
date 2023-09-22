import { useState, useEffect } from 'react'
import { Storage } from '@capacitor/storage'
import { Loading } from '@components'
import { useHistory } from 'react-router-dom'
import { routes } from '@routes'
import { AuthenticationResp } from '@models'
import moment from 'moment'

interface Props {
  children: JSX.Element
}

export const PrepareApp = ({ children }: Props) => {
  const [loaded, setLoaded] = useState(false)
  const { push, replace } = useHistory()

  useEffect(() => {
    const loadToken = async () => {
      const token = await Storage.get({ key: 'hojoToken' })
      if (!!token) {
        replace(routes.OnBoarding)
      }

      if (token.value) {
        const data = JSON.parse(token.value) as AuthenticationResp
        const now = moment().toDate()
        if (data.expiredAt <= now) {
          await Storage.remove({ key: 'hojoToken' })
          replace(routes.OnBoarding)
        }
        push(routes.Home)
      }
    }

    loadToken()
      .catch((err) => console.log(err))
      .finally(() => setLoaded(true))
  }, [push, replace])

  return <Loading loading={!loaded}>{children}</Loading>
}
