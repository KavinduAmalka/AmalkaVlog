import { Button, Grid, Input, Typography } from '@mui/material';
import { use, useEffect, useState } from 'react';

const UserForm = ({ addUser, updateUser, submitted, data, isEdit, setIsEdit }) => {

  const [id, setId] = useState(0);
  const [name, setName] = useState('');
 
  useEffect(() => {
    if (!submitted) {
      setId(0);
      setName('');
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setName(data.name);
    }
  }, [data]);

  return(
    <Grid 
      container
      spacing={2}
      sx={{ 
        backgroundColor: 'white',
        marginBottom: '30px',
        marginTop: '20px',
        display: 'block',
       }}
    >
      <Grid item xs={12} >
        <Typography  
           component={'h1'}
           sx={{
            color:'black',
           }}
        >  
              User Form
        </Typography>
      </Grid>

      

      <Grid item xs={12} sm={6} sx={{display:'flex'}}>
       <Typography 
       component={'label'} 
       htmlFor='id'
       sx={{
        color:'black',
        marginRight: '20px',
        fontSize: '16px',
        width:'100px',
        display:'block',
      }}
       >
        ID
       </Typography>
       <Input
        type='number'
        id='id'
        name='id'
        placeholder='Enter ID'
        sx={{
          width:'400px',
        }}
        value={id}
        onChange={e =>setId(e.target.value)}
       />
      </Grid>

      <Grid item xs={12} sm={6} sx={{display:'flex'}}>
       <Typography 
       component={'label'} 
       htmlFor='name'
       sx={{
        color:'black',
        marginRight: '20px',
        fontSize: '16px',
        width:'100px',
        display:'block',
      }}
       >
        Name
       </Typography>
       <Input
        type='text'
        id='name'
        name='name'
        placeholder='Enter Name'
        sx={{
          width:'400px',
        }}
        value={name}
        onChange={e => setName(e.target.value)}
       />
      </Grid>

      <Button
      sx={{
        margin:'auto',
        marginBottom:'20px',
        backgroundColor: '#00c6e6',
        color:'black',
        marginTop: '20px',
        '&:hover': {
          opacity: '0.8',
          backgroundColor: '#00c6e6',
        },        
      }}
      onClick={() => {
          if (isEdit) {
      updateUser({ id, name });
      // Reset to Add mode after update
      setIsEdit(false);
    } else {
      addUser({ id, name });
    }
      }}
      >
        {
          isEdit ? 'Update' : 'Add'

        }
      </Button>

    </Grid>
  );
}

export default UserForm;