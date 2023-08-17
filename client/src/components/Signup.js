import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../gqloperations/mutations';
// import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Signup() {
//   const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [signupUser, { data, error }] = useMutation(SIGNUP_USER);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser({
      variables: {
        userNew: formData,
      },
    });
  };

  return (
    <div className="">
      {error && <div className="red card-panel">{error.message}</div>}

      {data && data.signupUser && (
        <div className="green card-panel">
          {data.signupUser.firstName} is SignedUp. You can login now!
        </div>
      )}
      <div className="">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Form onSubmit={handleSubmit}>
                <h1 className="mb-3 text-lg text-center">SIGNUP </h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="firstName" onChange={handleChange} placeholder="first name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lastName" onChange={handleChange} placeholder="last name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" required />
                </Form.Group>
                <Button type="submit" variant="primary" size="lg">
                  SignUp
                </Button>
                <br />
                <Form.Text id="passwordHelpBlock" muted>
                  Already have an account?
                  <Link
                    to="/login"
                    className="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  >
                    Sign in
                  </Link>
                </Form.Text>
              </Form>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="">
                <img
                  src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?w=740&t=st=1687584173~exp=1687584773~hmac=93f7f48f7ba0770d6ffa01c9655900af323b889470ec691ed9d9c538525b31c9"
                  alt="img"
                  width={500}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

// import React,{useState} from 'react'
// import {Link} from 'react-router-dom'
// import { useMutation } from '@apollo/client';
// import { SIGNUP_USER } from '../gqloperations/mutations';
// import {useNavigate} from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

// export default function Signup() {
//     const navigate  = useNavigate()
//     const [formData,setFormData] = useState({})
//     const [signupUser,{data,loading,error}] = useMutation(SIGNUP_USER)

//     if(loading) return <h3>Loading</h3>

//     const handleChange = (e)=>{
//         setFormData({
//          ...formData,
//          [e.target.name]:e.target.value
//         })
    
//     }

//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         signupUser({
//             variables:{
//                 userNew:formData
//             }
//         })
//         navigate("/login")
//     }
//     return (
//         <div className="">
//             {
//                 error && 
//                 <div className="red card-panel">{error.message}</div>
//             }

//             {
//                 data && data.user &&
//                 <div className="green card-panel">{data.user.firstName} is SignedUp. You can login now!</div>
//             }
//             <div className='' >
//             <Container>
//       <Row>
//         <Col xs={12} sm={12} md={6} lg={6} > 
//                <Form onSubmit={handleSubmit}>
//                <h1 className="mb-3 text-lg text-center">SIGNUP </h1>
//                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                         <Form.Label>First Name</Form.Label>
//                         <Form.Control type="text" onChange={handleChange} placeholder="first name" required/>
//                      </Form.Group>

//                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                         <Form.Label>Last Name</Form.Label>
//                         <Form.Control type="text" onChange={handleChange} placeholder="last name" required/>
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" onChange={handleChange} placeholder="Enter email" required/>
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" onChange={handleChange} placeholder="Password" required />
//                         </Form.Group>
//                         <Button  type="submit" variant="primary" size="lg">
//                             SignUp
//                             </Button>
//                           <br />
//                         <Form.Text id="passwordHelpBlock" muted>
//                         have an account?
//                         <Link
//                       to={"/login"}
//                       className="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
//                     >
//                      Signin
//                     </Link>
//                          </Form.Text>
                 
      
//                   </Form>
                    
//               </Col>
//               <Col xs={12} sm={12} md={6} lg={6}>
                
//               <div className="">
//                <img src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?w=740&t=st=1687584173~exp=1687584773~hmac=93f7f48f7ba0770d6ffa01c9655900af323b889470ec691ed9d9c538525b31c9" alt="img" width={500} />
          
//             </div> 
//               </Col>
//             </Row>
                
//          </Container>
           
//         </div>
//     </div>
//     )
// }





/*
 <h5>Signup</h5>
            <form onSubmit={handleSubmit} className='border border-3 border-black'>
                <label>First Name</label>
                <input
                 type="text"
                 placeholder="First Name"
                 name="firstName"
                 onChange={handleChange}
                 required
                 />
                  <label>Last Name</label>
                <input
                 type="text"
                 placeholder="Last Name"
                 name="lastName"
                 onChange={handleChange}
                 required
                 />
                  <label>Email</label>
                <input
                 type="email"
                 placeholder="email"
                 name="email"
                 onChange={handleChange}
                 required
                 />
                  <label>Password</label>
                <input
                 type="password"
                 placeholder="password"
                 name="password"
                 onChange={handleChange}
                 required
                 />
                  <Link to="/login"><p>Already have an account ?</p></Link> 
                 <button className="btn #673ab7 deep-purple" type="submit">Submit</button>
            </form> */