import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t border-zinc-500/20'>

      <div className='flex items-center gap-4'>
        <img className='hidden md:block w-20' src={assets.logo} alt='logo' />

        <div className='hidden md:block h-7 w-px bg-zinc-500/60'></div>

        <p className='py-4 text-center text-xs md:text-sm text-zinc-600'>
          &copy; 2025 <span className='text-green-600 font-semibold'>Knowscope</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
