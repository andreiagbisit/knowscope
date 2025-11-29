import { assets } from '../../assets/assets'
import pageTitle from '../../lib/pageTitle'
import Footer from './Footer'

const PageNotFound = () => {
  
  pageTitle('Page not found | Knowscope')
  
  return (
    <>
        <div className='min-h-screen p-1'>
            <img className='h-60 mt-20 mb-10 mx-auto block' 
                    src={assets.file_break} 
                    alt='' />
            
            <h1 className='text-5xl mb-3 font-light text-center'>
                Page not found.
            </h1>

            <p className='text-xl font-light text-center text-zinc-500'>
                Where are you going?
            </p>
        </div>

        <Footer />
    </>
  )
}

export default PageNotFound
