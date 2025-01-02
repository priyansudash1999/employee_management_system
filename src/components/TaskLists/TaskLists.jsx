import React from 'react';

const TaskLists = () => {
  return (
    <div id="tasklist" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full p-3 mt-10">
      <div className="h-60 bg-purple-700 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 p-1 m-2 text-white font-bold rounded">High</h3>
          <h4 className="text-md font-semibold mr-3">02nd Jan 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold ml-5">Make your Todo</h2>
        <p className='text-md m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas asperiores ex omnis!</p>
      </div>

      <div className="h-60 bg-green-500 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 p-1 m-2 text-white font-bold rounded">High</h3>
          <h4 className="text-md font-semibold mr-3">02nd Jan 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold ml-5">Make your Todo</h2>
        <p className='text-md m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas asperiores ex omnis!</p>
      </div>

      <div className="h-60 bg-blue-700 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 p-1 m-2 text-white font-bold rounded">High</h3>
          <h4 className="text-md font-semibold mr-3">02nd Jan 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold ml-5">Make your Todo</h2>
        <p className='text-md m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas asperiores ex omnis!</p>
      </div>

      <div className="h-60 bg-red-600 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 p-1 m-2 text-white font-bold rounded">High</h3>
          <h4 className="text-md font-semibold mr-3">02nd Jan 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold ml-5">Make your Todo</h2>
        <p className='text-md m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas asperiores ex omnis!</p>
      </div>
    </div>
  );
};

export default TaskLists;
