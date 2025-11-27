import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Navbar = () => {
  
  const {navigate, isEducator, backendUrl, setIsEducator, getToken} = useContext(AppContext)
  
  const isCourseListPage = location.pathname.includes('/course-list')
  const isMyEnrollmentsPage = location.pathname.includes('/my-enrollments')
  const isPlayerPage = location.pathname.includes('/player/')

  const {openSignIn} = useClerk()
  const {user} = useUser()
  
  const becomeEducator = async () => {
    try {
      if(isEducator) {
        navigate('/educator')
        return
      }

      const token = await getToken()
      const { data } = await axios.get(backendUrl + '/api/educator/update-role', 
      
      {headers: {
        Authorization: `Bearer ${token}`
      }})

      if (data.success) {
        setIsEducator (true)
        toast.success (data.message)
      } else {
        toast.error (data.message)
      }
    } catch (error) {
      toast.error (error.message)
    }
  }
  
  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-4 
                    ${( isCourseListPage || isMyEnrollmentsPage || isPlayerPage ) 
                      ? 'bg-white' 
                      : 'bg-teal-100/70'
                    }`}>
                      
        <img onClick={() => navigate('/')} 
             src={assets.logo} 
             alt='Logo' 
             className='w-45 lg:w-55 cursor-pointer' />

        <div className='hidden md:flex items-center gap-5 text-zinc-600 font-medium'>
          <div className='flex items-center gap-5'>
            { user &&  
            <>
                <button className='link-custom' 
                        onClick={becomeEducator}>
                  {isEducator ? 'Educator Dashboard' : 'Become an Educator'}
                </button>
                
              | <Link className='link-custom' 
                      to='/my-enrollments'>My Enrollments</Link>
            </>
            }
          </div>

          { user ? <UserButton /> :
            <button onClick={() => openSignIn()} 
                    className='bg-green-600 text-white px-5 py-2 rounded-lg transition duration-500 hover:bg-green-500 cursor-pointer font-semibold'>
                      Sign In
            </button> 
          }
        </div>

        {/* FOR PHONE SCREENS */}
        <div className='md:hidden flex items-center gap-2 sm:gap-5 text-zinc-500 font-medium'>
          <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
            { user &&  
              <>
                <button onClick={becomeEducator}>
                  {isEducator ? 'Educator Dashboard' : 'Become an Educator'}
                </button>
                | <Link to='/my-enrollments'>My Enrollments</Link>
              </>
            }
          </div>
          
          {
            user ? <UserButton /> : <button onClick={() => openSignIn()}><img src={assets.sign_in_icon} className='opacity-40' alt='' /></button>
          }
        </div>
    </div>
  )
}

export default Navbar