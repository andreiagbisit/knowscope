import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'
import pageTitle from '../../lib/pageTitle'

const MyCourses = () => {
  
  const {currency, backendUrl, isEducator, getToken} = useContext(AppContext)
  const [courses, setCourses] = useState(null)

  const fetchEducatorCourses = async () => {
    try {
      const token = await getToken()
      const { data } = await axios.get(backendUrl + '/api/educator/courses', 
      { headers: { 
        Authorization: `Bearer ${token}` 
      }})

      data.success && setCourses(data.courses)

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if(isEducator) {
      fetchEducatorCourses()
    }
    
  }, [isEducator])

  pageTitle('My Courses | Knowscope (Educator)')
  
  return courses ? (
    <div className='h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='w-full'>
        <h2 className=' text-2xl font-semibold text-green-600 mb-5'>
          My Courses
        </h2>

        <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-zinc-500/20'>
          <table className='table-auto w-full overflow-hidden'>
            <thead className='text-zinc-900 border-b border-zinc-500/20 text-sm text-left'>
              <tr>
                <th className='px-4 py-3 font-semibold truncate'>All Courses</th>
                <th className='px-4 py-3 font-semibold truncate'>Earnings</th>
                <th className='px-4 py-3 font-semibold truncate'>Students</th>
                <th className='px-4 py-3 font-semibold truncate'>Published On</th>
              </tr>
            </thead>

            <tbody className='text-sm text-zinc-600'>
              {courses.length > 0 ? (
                courses.map((course) => (
                  <tr key={course._id} className='border-b border-zinc-500/20'>
                    <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate'>
                      <img src={course.courseThumbnail} 
                          alt='Course Image'
                          className='w-16' />
                          
                      <span className='whitespace-normal wrap-break-word'>
                        {course.courseTitle}
                      </span>
                    </td>

                    <td className='px-4 py-3'>
                      {currency}{Math.floor(course.enrolledStudents.length * 
                      (course.coursePrice - (course.discount * course.coursePrice) / 100)).toLocaleString()}
                    </td>

                    <td className='px-4 py-3'>
                      {course.enrolledStudents.length.toLocaleString()}
                    </td>

                    <td className='px-4 py-3'>
                      {new Date(course.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan='4'
                      className='px-4 py-10 text-center'>
                    
                    <img src={assets.question_mark}
                          alt='No entries'
                          className='h-24 mb-3 mx-auto' />

                    <p className='text-zinc-600 text-base'>
                      No entries found.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : 
    <Loading />
}

export default MyCourses