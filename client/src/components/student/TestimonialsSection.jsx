import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    <div className='pb-14 px-8 md:px-24'>
        <h2 className='text-3xl font-medium text-zinc-800'>
          Stories from our <span className='font-semibold text-green-600'>learners</span>
        </h2>

        <p className='md:text-base text-zinc-600 mt-3 max-w-4xl mx-auto'>
          Discover how our learners transformed their skills and lives—and why they trust 
          our platform to help them succeed, grow with confidence, and reach their goals 
          faster than they ever imagined.
        </p>

        <div className='grid grid-cols-auto gap-8 mt-14'>
          {dummyTestimonial.map((testimonial, index) => (
            <div key={index} 
                 className='text-sm text-left border border-zinc-500/30 pb-6 rounded-lg bg-white shadow=[0px_4px_15px_0px] shadow-black/5 overflow-hidden'>
              <div className='flex items-center gap-4 px-5 py-4 bg-zinc-500/10'>
                <img className='h-12 w-12 rounded-full' 
                     src={testimonial.image} 
                     alt={testimonial.name} />

                <div>
                  <h1 className='text-lg font-medium text-zinc-800'>
                    {testimonial.name}
                  </h1>
                  
                  <p className='text-zinc-800/80'>
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

                <p className='text-zinc-600 mt-5'>
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default TestimonialsSection