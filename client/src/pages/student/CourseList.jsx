import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import SearchBar from '../../components/student/SearchBar'
import { useParams } from 'react-router-dom'
import CourseCard from '../../components/student/CourseCard'
import { assets } from '../../assets/assets'
import Footer from '../../components/student/Footer'
import Loading from '../../components/student/Loading'
import pageTitle from '../../lib/pageTitle'

const CourseList = () => {
  
  const {navigate, allCourses} = useContext(AppContext)
  const {input} = useParams()
  const [filteredCourse, setFilteredCourse] = useState([])

  useEffect(() => {
    if(allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice()

      input ?
        setFilteredCourse(
          tempCourses.filter(
            item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        )
      : setFilteredCourse(tempCourses)
    }
  },[allCourses, input])

  const isLoading = !allCourses || allCourses.length === 0;
  const noResults = !isLoading && input && filteredCourse.length === 0;
  
  useEffect(() => {
    pageTitle(input ? `Course Search: '${input}' | Knowscope` : 'Course List | Knowscope');
  }, [input]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className='relative lg:px-36 md:px-14 px-8 pt-20 text-left'>
          <div className='flex xl:flex-row flex-col gap-6 items-start justify-between w-full'>
            <div>
              <h1 className='text-4xl font-semibold text-zinc-800 pb-1'>
                Course List
              </h1>

              <p className='text-zinc-500'>
                <span className='link-custom-2' 
                      onClick={() => navigate('/')}>Home</span> / <span>Course List</span>
              </p>
            </div>

            <SearchBar data={input} />
          </div>

          { input && 
          <div className='inline-flex items-center gap-4 px-4 py-2 border border-zinc-300 rounded-md mt-8 -mb-8 text-zinc-600'>
            <p className='text-zinc-600'>
              {input}
            </p>
            
            <img src={assets.cross_icon} 
                alt='' 
                className='cursor-pointer'
                onClick={() => navigate('/course-list')} />
          </div>
          }

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
            { isLoading ? (
              <div className='col-span-full flex justify-center items-center py-16'>
                <Loading />
              </div>
            ) : noResults ? (
              <div className='col-span-full flex flex-col justify-center items-center py-16 text-center'>
                <img src={assets.question_mark} 
                     className='w-30 opacity-60' 
                     alt='' />
                     
                <p className='text-zinc-600 mt-4 text-lg'>No results found.</p>
              </div>
            ) : (
              filteredCourse.map((course, index) => (
                <CourseCard key={index} 
                            course={course} />
              ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CourseList