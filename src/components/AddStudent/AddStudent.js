import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './AddStudent.css';

const AddStudent = () => {
    const [studentDetails, setStudentDetails] = useState([]);

    const handleBlur = (event) => {
        let validForm = true;
        if (validForm) {
            const studentInfo = { ...studentDetails };
            studentInfo[event.target.name] = event.target.value;
            setStudentDetails(studentInfo)
        }
    }

    const handleReset = (event) => {
        // event.preventDefault();
        const studentInfo = {
            name : '',
            email : '',
            phone : '',
            id : ''

        }
        setStudentDetails(studentInfo);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('id').value = '';
    }

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/addSingleStudent', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(studentDetails)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })

        history.replace('/student');
    }

    console.log(studentDetails);

    return (
        <div align='center' className='container'>
            <form className='student-area'>
                <h3>This is add Student</h3>
                <div className="form-group">
                    <input className='form-control' type="text" name="name" id="name" placeholder='Enter Student Name' onBlur={handleBlur} required />
                </div>

                <div className="form-group">
                    <input className='form-control' type="email" name="email" id="email" placeholder='Enter Student Email' onBlur={handleBlur} required />
                </div>

                <div className="form-group">
                    <input className='form-control' type="tel" name="phone" id="phone" placeholder='Enter Student Phone' onBlur={handleBlur} required />
                </div>

                <div className="form-group">
                    <input className='form-control' type="number" name="id" id="id" placeholder='Enter Student Id' onBlur={handleBlur} required />
                </div>

                <div className="form-group">
                    <Button onClick={handleSubmit}>
                        Save
                    </Button> &nbsp;
                    <Button variant='danger' onClick={handleReset}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;