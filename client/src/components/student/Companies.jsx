import { assets } from '../../assets/assets'
import Marquee from 'react-fast-marquee'

const Companies = () => {
  return (
    <div className='pt-16'>
      <p className='text-xl font-medium text-zinc-800'>
        Partners around the world <span className='text-green-600 font-semibold'>trust us</span>.
      </p>

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
    </div>
  )
}

export default Companies