import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";

const Users = ()=>{

    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [isEdit, setIsEdit] = useState();
 
    useEffect(() => {
        
    getUsers();
        
    }, []);

    const getUsers = ()=>{
        Axios.get('http://localhost:3000/api/users')
        .then(response => {
            setUsers(response?.data?.response || [])
        })
        .catch(error =>{
            console.log("Axios error:", error)
        })

    }

    const addUser = (data)=>{
        setSubmitted(true)
        const payload = {
            id: data.id,
            name: data.name,
        }
        Axios.post('http://localhost:3000/api/createuser', payload)
        .then(response => {
            getUsers()
            setSubmitted(false)
        })
        .catch(error =>{
            console.log("Axios erroe:", error)
        })
    }

    const updateUser =(data)=>{
             setSubmitted(true)    

        const payload = {
            id: data.id,
            name: data.name,
        }
        Axios.post('http://localhost:3000/api/updateuser', payload)
        .then(() => {
            getUsers()
            setSubmitted(false)
            isEdit(false)
        })
        .catch(error =>{
            console.log("Axios erroe:", error)
        })

    }

    const deleteUser = (data)=>{
            

        Axios.post('http://localhost:3000/api/deleteuser', data)
        .then(() => {
            getUsers()
            
        })
        .catch(error =>{
            console.log("Axios error:", error)
        })
    }
return(

   <Box sx={{
    width: '1000px',
    margin:'auto',
    marginTop:'100px'
   }}>
    <UserForm
    
    addUser={addUser}
    updateUser={updateUser}
    submitted={submitted}
    data={selectedUser}
    isEdit={isEdit}
    />
    <UserTable 
    rows={users}
    selectedUser={data =>{
        setSelectedUser(data)
        setIsEdit(true)
    
    }}
    
    deleteUser={data=> window.confirm('Are you sure?') && deleteUser(data)}
    />
   </Box>
)
}

export default Users;