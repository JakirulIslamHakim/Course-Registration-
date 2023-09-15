import React, { useEffect, useState } from 'react';
import Course from '../../course/Course';
import SelectedCourse from '../selectedCourse/SelectedCourse';
// sweet alert 
import Swal from 'sweetalert2'


const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [displayData, setDisplayData] = useState([])
    const [credit, setCredit] = useState(0);
    const [remaining, setRemaining] = useState(20);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    // console.log(courses);

    const handleCLick = (course) => {
        const isExist = displayData.find(item => item.id === course.id);

        let totalCredit = course.credit;

        if (isExist) {
            return Swal.fire({
                icon: 'warning',
                title: 'Sorry...',
                text: 'you allready add this course !',
            })
        } else {
            displayData.forEach(credit => {
                totalCredit = totalCredit + credit.credit
            });
            const remainingCredit = 20 - totalCredit;
            if (totalCredit > 20) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Sorry...',
                    text: 'you have not enough credit hour !',
                })
            } else {

                setDisplayData([...displayData, course]);
                setCredit(totalCredit);
                setRemaining(remainingCredit);
                console.log(credit, remaining)
            }
        }
    }


    return (
        <div className='flex gap-x-10 my-10'>
            <div className=' w-3/4'>
                <div className='grid grid-cols-3 gap-3'>
                    {
                        courses.map(course => <Course key={course.id} course={course} handleCLick={handleCLick}></Course>)
                    }
                </div>
            </div>
            <div>
                <SelectedCourse
                    displayData={displayData}
                    remaining={remaining}
                    credit={credit}
                ></SelectedCourse>
            </div>
        </div>
    );
};

export default Courses;