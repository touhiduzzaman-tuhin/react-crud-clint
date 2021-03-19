// import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import studentData from '../../fakeData/studentData';

const CreateStudent = () => {
    // const url = 'http://localhost:5000/addStudents';
    // console.log(studentData);
    const handleCreateAllStudent = () => {
        fetch('http://localhost:5000/addStudents', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(studentData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }
    // const handleCreateAllStudent = () => {
    //     axios.post(url, studentData[0])
    //     .then(response => {
    //         const students = response.data;
    //         console.log(students);
    //     })
    //     .catch(error => {
    //         const errorMessage = error.message;
    //         console.log(errorMessage);
    //     })
    // }
    return (
        <div className='container' align='center'>
            <Button className='my-5' onClick={handleCreateAllStudent}>
                Add Fake Students
            </Button>
        </div>
    );
};

export default CreateStudent;