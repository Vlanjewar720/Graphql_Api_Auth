import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_USERS } from '../gqloperations/queries';
import { DELETE_USER } from '../gqloperations/mutations';
// import UpdateUser from './UpdateUser';
export default function GetAllUsers() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  const [deleteUserMutation] = useMutation(DELETE_USER);

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUserMutation({
        variables: { id: userId },
        // You might want to refetch data or update cache here
      });
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (loading) return <h4>Profile is loading</h4>;
  if (error) {
    console.log(error);
  }
  console.log(data.users);

  return (
    <div className="container my-container">
      <div className="center-align">
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDeleteUser(user.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to="/Update"><span className="btn btn-primary">UpdateUser </span> </Link>
                  {/* <UpdateUser userId={user.id} /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// import React from 'react'
// import { useQuery,useMutation } from '@apollo/client';
// import { GET_ALL_USERS } from '../gqloperations/queries';
// // import {useNavigate} from 'react-router-dom'
// import { DELETE_USER } from '../gqloperations/mutations';
// import UpdateUser from './UpdateUser';

// export default function GetAllUsers() {

//     const {loading,error,data} = useQuery(GET_ALL_USERS)
   
//     if(loading) return <h4>Profile is loading</h4>
//     if(error){
//         console.log(error)
//     }
//     console.log(data.users);


//     const [deleteUserMutation] = useMutation(DELETE_USER);

//   const handleDeleteUser = async (userId) => {
//     try {
//       await deleteUserMutation({
//         variables: { id: userId },
      
//       });
//       // Refetch user data or update cache as needed
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };
//     return (
//         <div className="container my-container">
//             <div className="center-align">
//             <table>
//                     <tr> 
//                         <th>FirstName</th>
//                         <th>LastName</th>
//                         <th>Email</th>
//                         <th>Delete</th>
//                         <th>Update</th>
//                       </tr>
//                       {data.users.map((user) => (
//                        <tr key={user.id}> 
//                          <td>{user.firstName}</td>
//                          <td>{user.lastName}</td>
//                          <td>{user.email}</td>
//                           <td> <button type='submit' onClick={() => handleDeleteUser(user.id)} className='btn btn-danger'>Delete</button> </td>
//                           <td> <button type='submit' onClick={<UpdateUser />} className='btn btn-success'>Update</button> </td>
//                       </tr>
//                        ))}
//                    </table>
              
//             </div>
            
//         </div>
//     )
// }



//  import React from "react";
// // import { useQuery } from "@apollo/client";
//  import { useMutation } from "@apollo/client";
//  import { DELETE_USER } from "../gqloperations/mutations";
//  import { GET_ALL_USERS } from "../gqloperations/queries";
// //  import { GET_ALL_QUOTES } from "../gqloperations/queries";
// function GetAllUsers({ users }) {

//   const [deleteUsers] = useMutation(DELETE_USER, {
//     variables: { id: users.id },
//        refetchQueries: [{ query: GET_ALL_USERS }],
//     // update(cache, { data: { deleteUsers } }) {
//     //   const { users } = cache.readQuery({ query: GET_USER });
//     //   cache.writeQuery({
//     //     query: GET_USERS,
//     //     data: {
//     //       users: users.filter((user) => user.id !== deleteUser.id),
//     //     },
//     //   });
//     // },
//   });
//   // const [deleteUsers] = useMutation(DELETE_PROJECT, {
//   //   variables: { id: projectId },
//   //   onCompleted: () => navigate('/'),
//   //   refetchQueries: [{ query: GET_PROJECTS }],
//   // });
//   return (
//     <tr>
//       <td>{users.firstName}</td>
//       <td>{users.lastName}</td>
//       <td>{users.email}</td>
//       <td>
//         <button className='btn btn-danger btn-sm' onClick={deleteUsers}>
//          Delete
//         </button>
//       </td>
//     </tr>
//   );
// }

// export default GetAllUsers;



// import { FaTrash } from 'react-icons/fa';
// import { useMutation } from '@apollo/client';
// import { DELETE_CLIENT } from '../mutations/clientMutations';
// import { GET_CLIENTS } from '../queries/clientQueries';
// import { GET_PROJECTS } from '../queries/projectQueries';

// export default function ClientRow({ client }) {
//   const [deleteClient] = useMutation(DELETE_CLIENT, {
//     variables: { id: client.id },
//     refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
//     // update(cache, { data: { deleteClient } }) {
//     //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
//     //   cache.writeQuery({
//     //     query: GET_CLIENTS,
//     //     data: {
//     //       clients: clients.filter((client) => client.id !== deleteClient.id),
//     //     },
//     //   });
//     // },
//   });

//   return (
//     <tr>
//       <td>{client.name}</td>
//       <td>{client.email}</td>
//       <td>{client.phone}</td>
//       <td>
//         <button className='btn btn-danger btn-sm' onClick={deleteClient}>
//           <FaTrash />
//         </button>
//       </td>
//     </tr>
//   );
// }

//  import React from "react";
// import { useQuery } from "@apollo/client";
// import { GET_ALL_USERS } from "../gqloperations/queries";

// function GetUsers({ users }) {
//   const { error, loading, data } = useQuery(GET_ALL_USERS);
//   //  const [users, setUsers] = useState([]);
//      console.log(users);
//   if(loading) return <h1>Loading</h1>

//   if (error) {
//           console.log(error);
//         }
//         if(users.length === 0){
//           return  <h3>Users Not available</h3>
//          }      

//   useEffect(() => {
//     if (data) {
//      setUsers(data.users);
//     }
//   }, [data]);
  
//   return (
//     <div>
      
//       <table>
//          <tr>        
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//          </tr>
//          {users.map((user) => {
//            <tr>          
//              <td>{user.firstName} </td>
//              <td>{user.lastName} </td>
//              <td>{user.email} </td>
//          </tr>
// })}
//       </table>
//     </div>
//   );
// }

// export default GetUsers;