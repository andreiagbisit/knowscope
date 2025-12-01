import { useUser } from '@clerk/clerk-react'
import Loading from '../student/Loading'

function AuthLoader ({ children }) {
  const { isLoaded } = useUser()

  if (!isLoaded) return <Loading />
  return children
}

export default AuthLoader
