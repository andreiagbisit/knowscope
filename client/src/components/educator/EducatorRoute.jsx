import { useUser } from '@clerk/clerk-react'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../student/Loading'

export default function EducatorRoute({ children }) {
  const { isLoaded, isSignedIn, user } = useUser()
  const location = useLocation()

  if (!isLoaded) return <Loading />

  if (!isSignedIn) {
    return <Navigate to={location.pathname} replace />
  }

  if (user?.publicMetadata?.role !== 'educator') {
    return <Navigate to={location.pathname} replace />
  }

  return children
}
