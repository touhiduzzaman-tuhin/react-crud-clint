import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import { useHistory } from 'react-router';
import './StudentDetails.css';

const StudentDetails = ({ std }) => {
    const {name, email, phone, _id} = std;
    const [number, setNumber] = useState('');

    // const history = useHistory();

    const handleDeleteStudent = (event, studentId) => {
        axios.delete(`http://localhost:5000/students/${studentId}`)
        .then(response => {
            // console.log(response);
            // console.log(response.data);
            if(response.data){
                event.target.parentNode.style.display = 'none';
                // history.replace('/student');
            }
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }
    return (
        <div className='col-md-4'>
            <div className='student-details-area'>
                <p>Name : {name}</p>
                <p>Email : {email}</p>
                <p>Phone : {number}</p>
                <Button>
                    Add User
                </Button>
                &nbsp; &nbsp;
                <Button onClick={(e) => handleDeleteStudent(e, _id)}>
                    Delete User
                </Button>
                <Button className='my-3' variant='success' onClick={() => setNumber(phone)}>
                    Phone
                </Button>
            </div>
        </div>
    );
};



export default StudentDetails;