import { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  
  const { isEducator } = useContext(AppContext)
  
  const menuItems = [
    { name: 'Dashboard', path: '/educator', icon: assets.home_icon },
    { name: 'Add Course', path: '/educator/add-course', icon: assets.add_icon },
    { name: 'My Courses', path: '/educator/my-courses', icon: assets.my_course_icon },
    { name: 'Students Enrolled', path: '/educator/students-enrolled', icon: assets.person_tick_icon },
  ]
  
  return isEducator && (
    <div className='lg:w-64 w-16 min-h-screen text-md text-zinc-800 font-semibold py-2 flex flex-col bg-linear-45 from-green-400 to-lime-300'>
        
        {menuItems.map((item) => (
          <NavLink to={item.path} 
                   key={item.name}
                   end={item.path === '/educator'}
                   className={({isActive}) => `flex items-center lg:flex-row flex-col 
                                              lg:justify-start justify-center py-3.5 lg:px-10 gap-3 transition duration-500
                                              ${isActive ? 'bg-green-600/30 border-r-[6px] border-green-600' 
                                              : 'hover:bg-lime-100/90'}`}>
            
            <img src={item.icon} 
                 alt='' 
                 className='w-6 h-6' />

            <p className='lg:block hidden text-center'>
              {item.name}
            </p>
          </NavLink>
        ))}
    </div>
  )
}

export default Sidebar