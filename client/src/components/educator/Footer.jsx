import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Footer = () => {
  
  const { navigate } = useContext(AppContext)
  
  return (
    <footer className='flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 bg-zinc-800'>

      <div className='flex items-center gap-4'>
        <img onClick={() => {navigate('/'); scrollTo(0,0)}} 
             className='hidden md:block w-30 cursor-pointer' 
             src={assets.logo_2} 
             alt='logo' />

        <div className='hidden md:block h-7 w-px bg-zinc-400'></div>

        <p className='py-4 text-center text-xs md:text-sm text-zinc-400'>
          &copy; 2025 <span className='text-green-500 font-semibold'>Knowscope</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
