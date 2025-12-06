import { useUser } from '@clerk/clerk-react'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../student/Loading'

function EducatorRoute ({ children }) {
  const location = useLocation()
  const isEducatorPath = location.pathname.startsWith('/educator')
  const { isLoaded, isLoading, user, isSignedIn } = useUser()

  if (!isLoaded || isLoading || !user || user.publicMetadata === undefined) {  
    return <Loading />
  }

  if (!isSignedIn || user.publicMetadata.role !== 'educator') {
    return (
      <Navigate to={isEducatorPath ? '/' : location.pathname} replace />
    )
  }

  return children
}

export default EducatorRoute
