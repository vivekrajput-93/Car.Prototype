import React from 'react'
import car from "../assets/audi.jpeg"

const CarDetails = () => {
  return (
    <div className='mt-5 w-full'>
        <div className='text-center block m-auto  w-1/2 max-[768px]:w-full'>
            <h3 className='text-2xl font-bold my-1'>Vehicle Models</h3>
            <p className='text-4xl font-extrabold  my-2'>Our rental fleet</p>
            <p className='text-center px-12 text-neutral-500 font-semibold my-3 max-[768px]:w-full '>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
        </div>
        <div className='flex gap-x-6 justify-between px-10 my-16 max-[768px]:flex-col max-[768px]:gap-y-10'>
            <div className='car-details flex flex-col gap-y-2 '>
                <button>Audi A1 S-line</button>
                <button>VW Golf 6</button>
                <button>Toyata Camry</button>
                <button>BMW 320</button>
                <button>Mercedez-benz</button>
                <button>VW Pasat SC</button>
            </div>
            <div className='max-[768px]:block max-[768px]:m-auto'>
                <img src={car} alt='car-image' />
            </div>
            <div className='max-[768px]:block max-[768px]:m-auto'>
                <div className='w-[250px] border-2 border-black h-[300px] '>
                    <h1 className='border-b  py-2 px-2 bg-blue-600'>Car Information </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarDetails;