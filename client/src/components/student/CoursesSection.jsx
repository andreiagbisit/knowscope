import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'
import Loading from './Loading'
import { motion } from 'framer-motion'

const CoursesSection = () => {
  
  const {allCourses} = useContext(AppContext)

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

  const fadeScale1 = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  }

  const fadeScale2 = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  }
  
  return (
    <motion.div className='py-16 md:px-40 px-8'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.6 }}
                variants={parentDiv}>
        
        <motion.div variants={fadeY1}>
          <h2 className='text-3xl font-medium text-zinc-800'>
            Gain skills from the <span className='font-semibold text-green-600'>experts</span>.
          </h2>
        </motion.div>

        <motion.div variants={fadeY2}>
          <p className='text-sm md:text-base text-zinc-600 mt-3 md:max-w-4xl max-w-md mx-auto'>
            Browse our top courses in coding, design, business, wellness, and 
            more. Every course is designed to guide you toward meaningful growth 
            and success.
          </p>
        </motion.div>

        <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
          {allCourses.length > 0 ? (
          allCourses.slice(0,4).map((course, index) => 
              <motion.div variants={fadeScale1}>
                <CourseCard key={index} course={course} />
              </motion.div>
            )
          ) : (  
          <Loading />
          )}
        </div>
        
        <motion.div variants={fadeScale2}>
          <Link to={'/course-list'} onClick={() => scrollTo(0,0)}
                className='text-zinc-600 border border-zinc-500/40 px-10 py-3 rounded-md font-semibold transition duration-500 hover:bg-zinc-100'>
                  Show All Courses
          </Link>
        </motion.div>
    </motion.div>
  )
}

export default CoursesSection