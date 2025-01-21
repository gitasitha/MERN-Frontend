import { Button,Typography,Grid2,Input } from "@mui/material";
import { useEffect, useState } from "react";

const UserForm = ({adduser,submitted,data,isedited,updateUser}) =>{

const [id, setId]=useState(0);
const [name, setName]=useState('');

useEffect(()=>{
    if(!submitted){
        setId(0);
        setName('');
    }
},[submitted]);

useEffect(()=>{
    if(data && data.id && data.id !== 0) {
        setId(data.id);
        setName(data.name);
    }
},[data]);

return(
<Grid2 
    container 
    spacing={2}
    sx={{
        backgroundColor:'ffffff',
        marginBottom:'30px',
        display:'block'
    }}
    >
    <Grid2 item xs={12}>
         <Typography Component={'h1'} sx={{color:"#000000", fontSize:'30px',fontWeight:'bold', marginLeft:'15px',marginTop:'10px'}}>User Form</Typography>     
    </Grid2>

    <Grid2 item xs={12} sm={6} sx={{display:'flex',marginLeft:'15px'}}>
            <Typography 
             component={'label'}
             htmlFor="id" 
             sx={{
                marginTop:'10px',
                color:'#000000',
                marginRight:'20px',
                fontSize:'16px',
                width:'100px',
                display:'block'
               }}>
                ID
            <Input 
                type="number"
                id='id'
                name='name'
                sx={{width:'400px'}}
                value={id}
                onChange={e =>setId(e.target.value)} 
                />
            </Typography>
             
    </Grid2>

    <Grid2 item xs={12} sm={6} sx={{display:'flex',marginLeft:'15px'}}>
            <Typography 
            component={'label'}
             htmlFor="name" 
             sx={{
                color:'#000000',
                marginRight:'20px',
                fontSize:'16px',
                width:'100px',
                display:'block'
               }}>
                    Name

            <Input 
                type="text"
                id='name'
                name='name'
                sx={{width:'400px'}}
                value={name}
                onChange={e =>setName(e.target.value)} 
                />
            </Typography>
               
    </Grid2>

    <Button
        sx={{
            margin:'auto',
            marginBottom:'20px',
            backgroundColor:'#00c6e6',
            color:'#000000',
            marginLeft:'350px',
            marginTop:'20px',
            '&:hour':{
                opacity:'0.7',
                backgroundColor:'#00c6e6',

            }

        }}

        onClick={()=>isedited ? updateUser({id,name}):adduser({id,name})}
       
         >
       {
        isedited ? 'Update' : 'Add'
       }
    </Button>
</Grid2>
);
}
export default UserForm;