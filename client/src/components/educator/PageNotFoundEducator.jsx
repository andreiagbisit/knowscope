import { assets } from '../../assets/assets'

const PageNotFoundEducator = () => {
  return (
    <div className='relative min-h-screen isolate p-1'>        
        <img className='h-40 mt-20 mb-4 mx-auto block' 
                src={assets.file_break} 
                alt='' />
        
        <h1 className='text-4xl font-light text-zinc-500 text-center'>
            Page not found.
        </h1>
    </div>
  )
}

export default PageNotFoundEducator
