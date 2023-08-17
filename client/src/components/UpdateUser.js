import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../gqloperations/mutations';

function UpdateUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [updateUser, { loading }] = useMutation(UPDATE_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateUser({
        variables: {
          updateNew: formData,
        },
      });
      navigate('/getUser');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  if (loading) {
    return <h3>Loading</h3>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            className="form-control"
            id="firstName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            className="form-control"
            id="lastName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateUser;

// import React,{useState} from 'react'
// import {useNavigate} from 'react-router-dom'
// import { useMutation } from '@apollo/client';
// import { UPDATE_USER } from '../gqloperations/mutations';

// function UpdateUser() {
//     const navigate  = useNavigate()
//     const [formData,setFormData] = useState({})
//     const [updateUser,{loading}] = useMutation(UPDATE_USER)

//     if(loading) return <h3>Loading</h3>

//         const handleChange = (e)=>{
//         setFormData({
//          ...formData,
//          [e.target.name]:e.target.value
//         })  
//     }

//      const handleSubmit = (e)=>{
//         e.preventDefault()
//         // if (!firstname || !lastname || !email) {
//         //     return alert("Please fill out all fields");
//         //   }
//         updateUser({
//             variables:{
//                 updateNew:formData
//             }
//         })
//         navigate("/getUser")
//     }
//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//                 <label for="exampleInputEmail1" className="form-label">First Name</label>
//                 <input type="text" name='firstName' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

//             </div>
//             <div className="mb-3">
//                 <label for="exampleInputEmail1" className="form-label">Last Name</label>
//                 <input type="text" name='lastName' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

//             </div>
//             <div className="mb-3">
//                 <label for="exampleInputEmail1" className="form-label">Email</label>
//                 <input type="email" name='email' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

//             </div>
           
//             <button type="submit" className="btn btn-primary">Update</button>
//       </form>
      
//     </div>
//   )
// }

// export default UpdateUser
