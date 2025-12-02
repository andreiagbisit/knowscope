import { useUser } from '@clerk/clerk-react'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../student/Loading'

export default function EducatorRoute({ children }) {
  const { isLoaded, isSignedIn, user } = useUser()
  const location = useLocation()

  const isEducatorPath = location.pathname.startsWith('/educator')

  // 1. Never redirect while Clerk is still loading
  if (!isLoaded) return <Loading />

  // 2. If Clerk is loaded but user is STILL signing in (first-time), render nothing yet
  if (isLoaded && !isSignedIn && location.pathname.startsWith('/sign-in')) {
    return null
  }

  // 3. Not signed in - bounce safely
  if (!isSignedIn) {
    return (
      <Navigate
        to={isEducatorPath ? '/' : location.pathname}
        replace
      />
    )
  }

  // 4. Wait until Clerk has loaded user metadata before checking role
  if (!user || user.publicMetadata === undefined) {
    return <Loading />
  }

  // 5. Signed in but not educator - bounce safely
  if (user.publicMetadata.role !== 'educator') {
    return (
      <Navigate
        to={isEducatorPath ? '/' : location.pathname}
        replace
      />
    )
  }

  // 6. Finally render child routes
  return children
}
