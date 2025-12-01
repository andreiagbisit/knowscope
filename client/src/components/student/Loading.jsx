import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const Loading = () => {
  
  const { navigate } = useContext(AppContext)
  
  const isCourseDetailsPage = location.pathname.includes('/course/')
  const isPlayerPage = location.pathname.includes('/player/')
  const isDashboardPage = location.pathname.includes('/educator')
  const isMyCoursesPage = location.pathname.includes('/educator/my-courses')
  const isStudentsEnrolledPage = location.pathname.includes('/educator/students-enrolled')
  const isMyEnrollmentsPage = location.pathname.includes('/my-enrollments')
  
  const { path } = useParams()

  useEffect(() => {
    if (path) {
      const timer = setTimeout(() => {
        navigate (`/${path}`)
      }, 5000)

    return () => clearTimeout (timer)
    }
  }, [])
  
  return (
    <div className={`flex items-center justify-center
      ${( isCourseDetailsPage || isPlayerPage || isDashboardPage || isMyCoursesPage || isStudentsEnrolledPage || isMyEnrollmentsPage ) 
                        ? 'min-h-screen' 
                        : ''
      }`}>
        <div className='w-16 sm:w-20 aspect-square border-4 border-zinc-300 
                       border-t-4 border-t-green-400 rounded-full animate-spin'></div>
    </div>
  )
}

export default Loading
