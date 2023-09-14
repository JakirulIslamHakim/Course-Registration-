import React, { useEffect, useState } from 'react';
import Course from '../../course/Course';
import SelectedCourse from '../selectedCourse/SelectedCourse';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    // console.log(courses);


    return (
        <div className='flex gap-x-10 my-10'>
            <div className=' w-3/4'>
                <div className='grid grid-cols-3 gap-3'>
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
            </div>
            <div>
                <SelectedCourse></SelectedCourse>
            </div>
        </div>
    );
};

export default Courses;