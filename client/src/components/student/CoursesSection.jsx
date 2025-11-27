import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'
import Loading from './Loading'

Loading
const CoursesSection = () => {
  
  const {allCourses} = useContext(AppContext)
  
  return (
    <div className='py-16 md:px-40 px-8'>
        <h2 className='text-3xl font-medium text-zinc-800'>
          Gain skills from the <span className='font-semibold text-green-600'>experts</span>.
        </h2>

        <p className='text-sm md:text-base text-zinc-600 mt-3 md:max-w-4xl max-w-md mx-auto'>
          Browse our top courses in coding, design, business, wellness, and 
          more. Every course is designed to guide you toward meaningful growth 
          and success.
        </p>

        <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
          {allCourses.length > 0 ? (
            allCourses.slice(0,4).map((course, index) => 
            <CourseCard key={index} course={course} />)
          ) : (  
           <Loading />
          )}
        </div>
        
        <Link to={'/course-list'} onClick={() => scrollTo(0,0)}
              className='text-zinc-600 border border-zinc-500/40 px-10 py-3 rounded-md font-semibold transition duration-500 hover:bg-zinc-100'>
                Show All Courses
        </Link>
    </div>
  )
}

export default CoursesSection