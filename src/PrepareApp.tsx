import { useState, useEffect } from 'react'
import { Storage } from '@capacitor/storage'
import { useDispatch, setToken } from '@providers'
import { Loading } from '@components'
import { useHistory } from 'react-router-dom'
import { routes } from '@routes'

interface Props {
  children: JSX.Element
}

export const PrepareApp = ({ children }: Props) => {
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()
  const { push } = useHistory()
  useEffect(() => {
    const loadToken = async () => {
      const token = await Storage.get({ key: 'hojoToken' })
      if (!!token.value) {
        dispatch(setToken(token.value))
        push(routes.Home)
      }
    }
    loadToken().then(() => setLoaded(true))
  }, [dispatch, push])

  return <Loading loading={!loaded}>{children}</Loading>
}