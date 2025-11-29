import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import PhoneIcon from '../../assets/PhoneIcon'
import EnvelopeIcon from '../../assets/EnvelopeIcon'
import MapPinIcon from '../../assets/MapPinIcon'

const Footer = () => {
  
  const { navigate } = useContext(AppContext)
  
  return (
    <footer className='bg-zinc-900 px-16 md:px-26 lg:px-36 text-left w-full mt-10'>
        <div className='flex flex-row items-start px-0 justify-center gap-32 py-10 border-b border-zinc-600'>
          <div className='flex flex-col items-start max-w-4xl'>
            <img onClick={() => {navigate('/'); scrollTo(0,0)}} 
                 className='w-45 lg:w-55 cursor-pointer'
                 src={assets.logo_2} 
                 alt='logo' />
            
            <p className='mt-6 text-left text-sm text-zinc-300'>
              Knowscope empowers learners worldwide with industry-relevant 
              courses, expert instructors, and a modern learning experience 
              designed to help you grow your skills and your career.
            </p>
          </div>
          
          <div className='flex flex-col items-start w-full'>
            <h2 className='font-semibold text-white mb-5'>
              Contact Us
            </h2>
            
            <ul className='flex flex-col xl:w-70 w-50 justify-between text-sm text-zinc-300 space-y-2'>
              <li><PhoneIcon /> (+63)-922-444-1357</li>
              <li><EnvelopeIcon /> support@knowscope.ph</li>
              <li><MapPinIcon /> Unit 502, Summit One Building, Clark Freeport Zone, Angeles City, Pampanga, Philippines 2009</li>
            </ul>
          </div>
        </div>

        <p className='py-4 text-center text-xs md:text-sm text-white'>
          &copy; 2025 <span className='font-semibold text-green-500'>Knowscope</span>. All rights reserved.
        </p>
    </footer>
  )
}

export default Footer