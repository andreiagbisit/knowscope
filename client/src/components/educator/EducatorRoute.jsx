import { useUser } from '@clerk/clerk-react'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../student/Loading'

export default function EducatorRoute({ children }) {
  const { isLoaded, isSignedIn, user } = useUser()
  const location = useLocation()

  if (!isLoaded) return <Loading />

  const isEducatorPath = location.pathname.startsWith('/educator')

  // Not signed in → bounce OUT of educator area
  if (!isSignedIn) {
    return (
      <Navigate
        to={isEducatorPath ? '/' : location.pathname}
        replace
      />
    )
  }

  // Signed in but not educator → bounce OUT
  if (user?.publicMetadata?.role !== 'educator') {
    return (
      <Navigate
        to={isEducatorPath ? '/' : location.pathname}
        replace
      />
    )
  }

  return children
}
