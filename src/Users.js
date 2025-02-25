import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UsersTable";

const users = [

    {
        id:1,
        name:"yasindu",
    },
    {
        id:2,
        name:"dahanayaka",
    }
];

const Users = ()=>{

return(

   <Box sx={{
    width: '1000px',
    margin:'auto',
    marginTop:'100px'
   }}>
    <UserForm/>
    <UserTable rows={users}/>
   </Box>
)
}

export default Users;