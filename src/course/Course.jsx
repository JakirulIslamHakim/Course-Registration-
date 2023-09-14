import React from 'react';

const Course = ({ course }) => {
    const { cover, course_description, course_name, credit, price } = course;
    console.log(course_name);
    return (
        <div className='space-y-4 p-5 shadow-lg rounded-xl	'>
            <img className='w-full' src={cover} alt="" />
            <div>
                <h4 className='text-xl font-semibold mb-2'>{course_name}</h4>
                <p className='text-xs leading-6 text-justify'>{course_description}</p>
            </div>
            <div className='flex justify-between mx-2'>
                <p>Price : {price}</p>
                <p>Credit : {credit}hr</p>
            </div>
            <div className='text-center bg-[#2F80ED] rounded-xl'>
            <button className='w-full p-3 text-white text-base font-bold'>Select</button>
            </div>
        </div>
    );
};

export default Course;