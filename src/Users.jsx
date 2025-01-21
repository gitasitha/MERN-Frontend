import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from 'axios';
import { useEffect, useState } from "react";


const Users = ()=>{
 
 const [users, setUsers] = useState([]);
 const [submitted, setSubmited] = useState(false);
 const [selectedUser, setSelectedUser] = useState({});
 const [isedited, setIsEdited] = useState(false);

useEffect(()=>{
    getUsers();
},[]);

    const getUsers =() =>{
    Axios.get('http://localhost:3001/api/users')
        .then(response=>{
            setUsers(response?.data || []);
        })
        .catch(error=>{
            console.log('Error getting users',error);
        });
    }

    const adduser = (data) =>{
        setSubmited(true);
        const payload = {
            id:data.id,
            name:data.name
        };
        Axios.post('http://localhost:3001/api/createuser',payload)
            .then(()=>{
                getUsers();
                setSubmited(false); 
                isedited(false);
            })
            .catch(error=>{
                console.log('Error adding user',error);
            })
    }

    const updateUser = (data) =>{
        setSubmited(true);
        const payload = {
            id:data.id,
            name:data.name
        };
        Axios.post('http://localhost:3001/api/updateuser', payload)
            .then(()=>{
                getUsers();
                setSubmited(false); 
                isedited(false);
               
            })
            .catch(error=>{
                console.log('Error updating user',error);
            })
    }


    const deleteUser = (data) =>{
   
        Axios.post('http://localhost:3001/api/deleteuser', data)
            .then(()=>{
                getUsers();
               
            })
            .catch(error=>{
                console.log('Error updating user',error);
            })
    }

    return(
        
       <Box 
       sx={{
        width:'calc(100% - 200px)',
        margin:'auto',
        marginTop:'100px'
       }}
       >
         <UserForm 
         adduser={adduser}
         submitted={submitted}
         updateUser={updateUser}
         data={selectedUser}
         isedited={isedited}
         />
         <UsersTable 
         rows={users}
         setSelectedUser={data=>{
            setSelectedUser(data);
            setIsEdited(true);
         }}
         deleteUser={data=>window.confirm('Are you sure you want to delete this user?') && deleteUser(data)}
         />
       </Box>
       
    );
}
export default Users;