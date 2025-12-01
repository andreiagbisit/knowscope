import { SignIn, useUser } from '@clerk/clerk-react'
import Loading from './Loading'

function ProtectedRoute ({ children, redirectUrl }) {
  const { isLoaded, isSignedIn } = useUser()

  if (!isLoaded) return <Loading />

  if (!isSignedIn) {
    return (
      <div className='sign-in-wrapper'>
        <SignIn fallbackRedirectUrl={redirectUrl} />
      </div>
    )
  }

  return children
}

export default ProtectedRoute
