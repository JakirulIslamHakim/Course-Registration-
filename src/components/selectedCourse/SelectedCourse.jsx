import React from 'react';

const SelectedCourse = () => {
    return (
        <div>
            <h3 className='text-[#2F80ED] text-xl font-bold '>Credit Hour Remaining 20 hr</h3>
            <hr  className='border-slate-600 my-4'/>
            <div>
                <h3 className='text-xl font-bold mb-6'>Course Name</h3>
                <ol className='text-base'>
                    <li>1 Introduction to c programming</li>
                </ol>
            </div>
            <hr className='border-slate-600 my-4'/>
            <h4 className='text-lg font-medium'>Total Credit Hour : 13</h4>
        </div>
    );
};

export default SelectedCourse;