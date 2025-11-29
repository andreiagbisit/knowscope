import SearchBar from './SearchBar'
import { ReactTyped } from 'react-typed'
import { motion } from 'framer-motion'

const Hero = () => {
  
  const fadeY1 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } }
  }

  const fadeY2 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.7 } }
  }

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 1.4 } }
  }
  
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-linear-to-b from-teal-100/70'>
        
        <motion.div initial='hidden'
                    animate='visible'
                    variants={fadeY1}>
          <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-zinc-800 max-w-3xl mx-auto md:px-35 lg:px-0'>
            Build a future driven by learning, intention, and the courage to chase{' '}
            
            <ReactTyped className='text-green-600' 
                        strings={['growth.', 'purpose.', 'mastery.', 'opportunities.']} 
                        typeSpeed={120} 
                        backSpeed={140} 
                        loop />
      
          </h1>
        </motion.div>

        <motion.div initial='hidden'
                    animate='visible'
                    variants={fadeY2}>
          <p className='md:block hidden text-zinc-600 max-w-2xl mx-auto md:px-15'>
            We bring together leading educators, immersive content, and a 
            community-driven environment to guide you toward your personal and 
            professional aspirations.
          </p>

          <p className='md:hidden text-zinc-600 max-w-lg mx-auto'>
            We bring together world-class instructors to help you achieve your 
            professional goals.

            We bring together leading educators to guide you toward your
            aspirations.
          </p>
        </motion.div>

        <motion.div className='w-full flex justify-center'
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.3, delay: 1.4 }}
                    variants={fadeScale}>
          <SearchBar />
        </motion.div>
    </div>
  )
}

export default Hero