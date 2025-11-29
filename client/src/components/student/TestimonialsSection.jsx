import { assets, dummyTestimonial } from '../../assets/assets'
import { motion } from 'framer-motion'

const TestimonialsSection = () => {
  
  const parentDiv = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: {  delayChildren: 0.3, staggerChildren: 0.5 } }
  }

  const fadeY1 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  }

  const fadeY2 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  }

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  }
  
  return (
    <motion.div className='pb-14 px-8 md:px-24'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.3 }}
                variants={parentDiv}>

        <motion.div variants={fadeY1}>
          <h2 className='text-3xl font-medium text-zinc-800'>
            Stories from our <span className='font-semibold text-green-600'>learners</span>
          </h2>
        </motion.div>

        <motion.div variants={fadeY2}>
          <p className='md:text-base text-zinc-600 mt-3 max-w-4xl mx-auto'>
            Discover how our learners transformed their skills and lives—and why they trust 
            our platform to help them succeed, grow with confidence, and reach their goals 
            faster than they ever imagined.
          </p>
        </motion.div>

          <div className='grid grid-cols-auto gap-8 mt-14'>
            {dummyTestimonial.map((testimonial, index) => (
              
              <motion.div key={index} 
                          className='text-sm text-left border border-zinc-500/30 rounded-lg bg-white shadow=[0px_4px_15px_0px] shadow-black/5 overflow-hidden'
                          variants={fadeScale}>
                
                <div className='flex items-center gap-4 px-5 py-4 bg-zinc-500/10'>
                  <img className='h-12 w-12 rounded-full' 
                      src={testimonial.image} 
                      alt={testimonial.name} />

                  <div>
                    <h1 className='xl:text-lg text-sm font-bold text-zinc-800'>
                      {testimonial.name}
                    </h1>
                    
                    <p className='text-zinc-800/80 xl:text-sm text-xs'>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className='p-5'>
                  <div className='flex gap-0.5'>
                    {[...Array(5)].map((_, i) => (
                      
                      <img className='h-5' 
                            key={i} 
                            src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} 
                            alt='star' />
                    ))}
                  </div>

                  <p className='text-zinc-600 font-medium mt-5'>
                    {testimonial.feedback}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
    </motion.div>
  )
}

export default TestimonialsSection