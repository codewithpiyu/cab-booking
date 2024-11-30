import React from 'react'
import notimage from "../../assets/image/notfound.svg"

const Notpage = () => {
  return (
    <div  className='bg-white dark:bg-dark h-screen flex flex-col gap-12 justify-center items-center duration-300'>
      <img src = {notimage} alt= "notimg" className='max-w-[400px]'/>
      <h1 className='text-3xl font-bold text-center dark:text-white'>Page Not Found </h1>
    </div>
  )
}

export default Notpage
