import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { Line } from 'rc-progress'
import Footer from '../../components/student/Footer'
import axios from 'axios'
import { assets } from '../../assets/assets'

const MyEnrollments = () => {
  
  const {enrolledCourses, calculateCourseDuration, navigate, userData, fetchUserEnrolledCourses, backendUrl, getToken, calculateNoOfLectures} = useContext(AppContext)

  const [progressArray, setProgressArray] = useState([])

  const getCourseProgress = async () => {
    try {
      const token = await getToken()
      const tempProgressArray = await Promise.all(
        enrolledCourses.map(async (course) => {
          const { data } = await axios.post(
            `${backendUrl}/api/user/get-course-progress`, 
            {courseId: course._id},
            {headers: { 
              Authorization: `Bearer ${token}` 
            }})
          
          let totalLectures = calculateNoOfLectures(course)

          const lectureCompleted = data.progressData ? data.progressData.lectureCompleted.length : 0
          return { totalLectures, lectureCompleted }
        })
      )

      setProgressArray(tempProgressArray)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if(userData) {
      fetchUserEnrolledCourses()
    }
  }, [userData])

  useEffect(() => {
    if(enrolledCourses.length > 0) {
      getCourseProgress()
    }
  }, [enrolledCourses])

  return (
    <div className='min-h-screen flex flex-col'>
      <div className="flex-1">
        <div className='md:px-15 lg:px-36 px-8 pt-10'>
          <h1 className='text-2xl font-semibold'>
            My Enrollments
          </h1>

          <div className='rounded-lg border border-zinc-500/20 mt-10 overflow-scroll'>
            <table className='table-auto w-full'>
              <thead className='text-zinc-900 border-b border-zinc-500/20 text-sm text-left'>
                <tr>
                  <th className='px-4 py-3 font-semibold truncate'>Course</th>
                  <th className='px-4 py-3 font-semibold truncate'>Duration</th>
                  <th className='px-4 py-3 font-semibold truncate'>Completed</th>
                  <th className='px-4 py-3 font-semibold truncate'>Status</th>
                </tr>
              </thead>

              <tbody className='text-zinc-700'>
                {enrolledCourses.length > 0 ? (
                  enrolledCourses.map((course, index) => (
                    <tr key={index}>
                      <td className='md:px-4 pl-2 md:pl-4 py-3 '>
                        <div className='flex items-center space-x-3'>
                          <img src={course.courseThumbnail} 
                              alt='' 
                              className='w-14 sm:w-24 md:w-28' />

                          <div>
                            <div className='mb-1 xl:w-lg max-xl:mr-7'>
                              <p className='font-semibold whitespace-normal wrap-break-word'>
                                {course.courseTitle}
                              </p>
                            </div>
                            
                            <Line strokeColor='#00a63e' 
                                  strokeWidth={2} 
                                  percent={progressArray[index] ? (progressArray[index].lectureCompleted * 100) / 
                                  progressArray[index].totalLectures : 0} 
                                  className='bg-zinc-300 rounded-full max-[769px]:hidden lg:w-3xs xl:w-lg' />
                          </div>
                        </div>
                      </td>

                      <td className='px-4 py-3 max-sm:hidden'>
                        {calculateCourseDuration(course)}
                      </td>

                      <td className='px-4 py-3 max-sm:hidden'>
                        {progressArray[index] && `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`} <span>Lectures</span>
                      </td>

                      <td className='px-4 py-3 max-sm:text-right'>
                        <button className={`max-sm:text-xs font-semibold cursor-pointer transition duration-500 
                          ${
                            progressArray[index] &&
                            progressArray[index].lectureCompleted / progressArray[index].totalLectures === 1
                              ? 'text-green-600 hover:text-green-500'
                              : 'text-amber-500 hover:text-amber-400'
                          }`} 
                          
                        onClick={() => navigate('/player/' + course._id)}
                        title='View Course Structure'>
                          
                          {
                            progressArray[index] && 
                            progressArray[index].lectureCompleted / progressArray[index].totalLectures === 1 
                            ? 'Completed' 
                            : 'Ongoing'
                          }
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan='4'
                        className='px-4 py-10 text-center'>
                      
                      <img src={assets.empty_box}
                            alt='No entries'
                            className='h-40 mx-auto' />

                      <p className='text-zinc-600 text-base'>
                        You haven't enrolled in any course yet.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default MyEnrollments
