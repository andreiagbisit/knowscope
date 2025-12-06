import { useUser } from '@clerk/clerk-react'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../student/Loading'

function EducatorRoute ({ children }) {
  const { isLoaded, isSignedIn, user } = useUser()
  const location = useLocation()

  const isEducatorPath = location.pathname.startsWith('/educator')

  if (!isLoaded) return <Loading />

  if (!isSignedIn) {
    return (
      <Navigate to={isEducatorPath ? '/' : location.pathname} replace />
    )
  }

  if (!user || user.publicMetadata === undefined) {
    return <Loading />
  }

  if (user.publicMetadata.role !== 'educator') {
    return (
      <Navigate to={isEducatorPath ? '/' : location.pathname} replace />
    )
  }

  return children
}

export default EducatorRoute
