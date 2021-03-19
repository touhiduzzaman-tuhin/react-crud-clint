import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StudentDetails from '../StudentDetails/StudentDetails';

const Student = () => {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/students')
            .then(response => {
                const students = response.data;
                // console.log(students);
                setStudent(students);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }, [])
    // console.log(student);
    return (
        <div align='center' className='container'>
            <h3 className='my-5'>student Information</h3>
            <div className='row'>
                {
                    student.map(std => <StudentDetails key={std._id} std={std}></StudentDetails>)
                }
            </div>
        </div>
    );
};

export default Student;