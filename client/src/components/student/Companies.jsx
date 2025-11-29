import { assets } from '../../assets/assets'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'

const Companies = () => {
  
  const fadeY = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 1.9 } }
  }

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 2.6 } }
  }
  
  return (
    <div className='pt-16'>
      <motion.div initial='hidden'
                  animate='visible'
                  variants={fadeY}>
        <p className='text-xl font-medium text-zinc-800'>
          Partners around the world <span className='text-green-600 font-semibold'>trust us</span>.
        </p>
      </motion.div>

      <motion.div initial='hidden'
                  animate='visible'
                  variants={fadeScale}>

        <Marquee className='lg:max-w-3xl max-w-xl md:mt-10 mt-5' 
                  speed={30} 
                  gradient={true} 
                  gradientColor='white' 
                  gradientWidth={50}>

          <div className='flex items-center'>
            <img src={assets.google_logo} alt='Google' className='w-20 md:w-28 mx-8' />
            <img src={assets.amazon_logo} alt='Amazon' className='w-20 md:w-28 mx-8' />
            <img src={assets.ibm_logo} alt='IBM' className='w-20 md:w-28 mx-8' />
            <img src={assets.nvidia_logo} alt='NVIDIA' className='w-20 md:w-28 mx-8' />
            <img src={assets.oracle_logo} alt='Oracle' className='w-20 md:w-28 mx-8' />
          </div>
        </Marquee>
      </motion.div>
    </div>
  )
}

export default Companies