import React from 'react';

const SelectedCourse = ({displayData,remaining,credit}) => {
    // console.log(displayData)
    return (
        <div className='shadow-lg rounded-xl p-5'>
            <h3 className='text-[#2F80ED] text-xl font-bold '>Credit Hour Remaining {remaining} hr</h3>
            <hr  className='border-slate-600 my-4'/>
            <div>
                <h3 className='text-xl font-bold mb-6'>Course Name</h3>
                <ol className='text-base'>
                    {
                        displayData.map((course,index)=><li key={index}>{course.course_name}</li>)
                    }
                </ol>
            </div>
            <hr className='border-slate-600 my-4'/>
            <h4 className='text-lg font-medium'>Total Credit Hour : {credit}</h4>
        </div>
    );
};

export default SelectedCourse;