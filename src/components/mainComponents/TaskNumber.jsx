import React from 'react'

const TaskNumber = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full p-3 mt-10'>
        <div className='h-40 bg-purple-700 rounded-xl'>
            <h2 className='text-3xl font-bold ml-3'>0</h2>
            <h3 className='etxt-2xl font-semibold ml-3'>New Task</h3>
        </div>
        <div className='h-40 bg-green-500 rounded-xl'>
            <h2 className='text-3xl font-bold ml-3'>0</h2>
            <h3 className='etxt-2xl font-semibold ml-3'>Completed Task</h3>
        </div>
        <div className='h-40 bg-blue-700 rounded-xl'>
            <h2 className='text-3xl font-bold ml-3'>0</h2>
            <h3 className='etxt-2xl font-semibold ml-3'>Accepted Task</h3>
        </div>
        <div className='h-40 bg-red-600 rounded-xl'>
            <h2 className='text-3xl font-bold ml-3'>0</h2>
            <h3 className='etxt-2xl font-semibold ml-3'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskNumber