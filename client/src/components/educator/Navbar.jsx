import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  
  const { user } = useUser()
  
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-zinc-300 py-3'>
        <Link to='/'>
          <img src={assets.logo} 
              alt='Logo' 
              className='w-28 lg:w-55' />
        </Link>

        <div className='flex items-center gap-5 text-zinc-600 relative'>
          <p>Hello, <span className='font-semibold'>{user ? user.fullName : 'fellow educator'}!</span></p>
          
          { user ? <UserButton /> 
          : <img className='max-w-8' 
                 src={assets.educator_placeholder_img} /> 
          }
        </div>
    </div>
  )
}

export default Navbar
