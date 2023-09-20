import { useState, useEffect } from 'react'
import { Storage } from '@capacitor/storage'
import { useDispatch, setToken } from '@providers'
import { Loading } from '@components'
import { useHistory } from 'react-router-dom'
import { routes } from '@routes'
import { useLazyGetCheckTokenQuery } from '@api'

interface Props {
  children: JSX.Element
}

export const PrepareApp = ({ children }: Props) => {
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()
  const { push, replace } = useHistory()

  const [getCheckToken, { isLoading, error }] = useLazyGetCheckTokenQuery()

  useEffect(() => {
    getCheckToken()
  }, [])

  useEffect(() => {
    const loadToken = async () => {
      try {
        if (!isLoading && !error) {
          const token = await Storage.get({ key: 'hojoToken' })
          dispatch(setToken(token.value ?? ''))
          push(routes.Home)
        } else {
          await Storage.remove({ key: 'hojoToken' })
          replace(routes.OnBoarding)
        }
      } catch (err) {
        console.log(err)
        await Storage.remove({ key: 'hojoToken' })
        replace(routes.OnBoarding)
      }
    }
    loadToken().then(() => setLoaded(true))
  }, [dispatch, push, replace, isLoading, error])

  return <Loading loading={!loaded}>{children}</Loading>
}
