import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Loading from '../student/Loading'
import Educator from '../../pages/educator/Educator'

const EducatorGate = () => {
  const navigate = useNavigate()
  const { isLoaded, isSignedIn, user } = useUser()

  useEffect(() => {
    if (isLoaded) {
      if (!isSignedIn) {
        navigate(-1)

      } else if (user?.publicMetadata?.role !== 'educator') {
        navigate(-1)
      }
    }
  }, [isLoaded, isSignedIn, user, navigate])

  if (!isLoaded) return <Loading />
  if (!isSignedIn || user?.publicMetadata?.role !== 'educator') return null

  return <Educator />
}

export default EducatorGate
