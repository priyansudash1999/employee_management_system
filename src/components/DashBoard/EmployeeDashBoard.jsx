import React from 'react'
import Header from '../mainComponents/Header'
import TaskNumber from '../mainComponents/TaskNumber'
import TaskLists from '../TaskLists/TaskLists'

const EmployeeDashBoard = () => {
  return (
    <div className='p-4 text-white  bg-[#1c1c1c] h-screen'>
      <Header/>
      <TaskNumber />
      <TaskLists />
    </div>
  )
}

export default EmployeeDashBoard