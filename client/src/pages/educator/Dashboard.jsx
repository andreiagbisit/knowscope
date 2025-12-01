import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'
import Loading from '../../components/student/Loading'
import axios from 'axios'
import { toast } from 'react-toastify'
import pageTitle from '../../lib/pageTitle'

const Dashboard = () => {
  
  const { currency, backendUrl, isEducator, getToken } = useContext(AppContext)
  const [dashboardData, setDashboardData] = useState(null)

  const fetchDashboardData = async () => {
    try {
      const token = await getToken()
      const { data } = await axios.get(backendUrl + '/api/educator/dashboard', 
      { headers: { 
        Authorization: `Bearer ${token}`
      }})
      
      if (data.success) {
        setDashboardData(data.dashboardData)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }
  
  useEffect(() => {
    if(isEducator) {
      fetchDashboardData()
    }
  }, [isEducator])

  pageTitle('Dashboard | Knowscope (Educator)')
  
  return dashboardData ? (
    <div className='min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='space-y-5'>
        <h2 className=' text-2xl font-semibold text-green-600'>
          Dashboard
        </h2>
        
        <div className='flex flex-wrap gap-5 items-center'>
          <div className='flex items-center gap-3 shadow-card border border-lime-500 p-4 w-56 rounded-md'>
            <img src={assets.total_enrolments_icon} 
                 alt='total_enrolments_icon' />

            <div>
              <p className='text-2xl font-bold text-green-600'>
                {dashboardData.enrolledStudentsData.length.toLocaleString()}
              </p>

              <p className='text-md text-zinc-600'>
                Total Enrolments
              </p>
            </div>
          </div>

          <div className='flex items-center gap-3 shadow-card border border-lime-500 p-4 w-56 rounded-md'>
            <img src={assets.total_courses_icon} 
                 alt='total_courses_icon' />

            <div>
              <p className='text-2xl font-bold text-green-600'>
                {dashboardData.totalCourses.toLocaleString()}
              </p>

              <p className='text-md text-zinc-600'>
                Total Courses
              </p>
            </div>
          </div>

          <div className='flex items-center gap-3 shadow-card border border-lime-500 p-4 w-56 rounded-md'>
            <img src={assets.total_earnings_icon} 
                 alt='total_earnings_icon' />

            <div>
              <p className='text-2xl font-bold text-green-600'>
                {currency}{dashboardData.totalEarnings.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </p>

              <p className='text-md text-zinc-600'>
                Total Earnings
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className='pb-4 text-lg font-medium'>
            Latest Enrolments
          </h2>

          <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-zinc-500/20'>
            <table className='table-auto w-full overflow-hidden'>
              <thead className='text-zinc-900 border-b border-zinc-500/20 text-sm text-left'>
                <tr>
                  <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
                  <th className='px-4 py-3 font-semibold'>Student Name</th>
                  <th className='px-4 py-3 font-semibold'>Course Title</th>
                </tr>
              </thead>

              <tbody className='text-sm text-zinc-600'>
                {dashboardData.enrolledStudentsData.length > 0 ? (
                  dashboardData.enrolledStudentsData.map((item, index) => (
                    <tr key={index} className='border-b border-zinc-500/20'>
                      <td className='px-4 py-3 text-center hidden sm:table-cell'>
                        {index + 1}
                      </td>
                      
                      <td className='md:px-4 px-2 py-3 flex items-center space-x-3'>
                        <img src={item.student.imageUrl} 
                            alt='Profile'
                            className='w-9 h-9 rounded-full' />
                        
                        <span className='whitespace-normal wrap-break-word'>
                          {item.student.name}
                        </span>
                      </td>

                      <td className='px-4 py-3 whitespace-normal wrap-break-word'>
                        {item.courseTitle}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan='3'
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
    </div>
  ) : 
    <Loading />
}

export default Dashboard