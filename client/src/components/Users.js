import { useQuery } from '@apollo/client';
 //import GetAllUsers from './GetAllUsers';
import { GET_ALL_USERS } from "../gqloperations/queries";

export default function Users() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <h1>Loading</h1>;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastEmail</th>
              <th>Email</th>
    
            </tr>
          </thead>
          <tbody>
            {data.users.map((users) => (
              <GetAllUsers key={users.id} users={users} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
