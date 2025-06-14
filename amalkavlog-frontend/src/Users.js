import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";

const Users = () => {
 
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
      Axios.get(process.env.REACT_APP_API_URL + '/api/users')
      .then(response =>{
        setUsers(response.data?.response || []);
      })
      .catch(error => {
        console.error("Axios error : ", error);
      });
  }

  const addUser = (data) =>{
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    }

    Axios.post(process.env.REACT_APP_API_URL + '/api/createUser', payload)
        .then(() =>{
          setSubmitted(false);
          getUsers();
          isEdit(false);
      })
      .catch(error => {
        console.error("Axios error : ", error);
      });
  }

  const updateUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    }

    Axios.put(process.env.REACT_APP_API_URL + '/api/updateUser', payload)
        .then(() =>{
          setSubmitted(false);
          getUsers();
          isEdit(false);
      })
      .catch(error => {
        console.error("Axios error : ", error);
      });
  }

  const deleteUser = (data) => {
    Axios.delete(process.env.REACT_APP_API_URL + '/api/deleteUser',{data: data})
      .then(() => {
        getUsers();
      })
      .catch(error => {
        console.error("Axios error : ", error);
      });
  }
  
 return(
  <Box
    sx={{
      width: 'calc(100% - 100px)',
      margin: 'auto',
      marginTop: '100px',
    }}
  >
    <UserForm
     addUser={addUser}
     updateUser={updateUser}
     submitted={submitted}
     data={selectedUser}
     isEdit={isEdit}
     setIsEdit={setIsEdit}
    />
    <UsersTable 
      rows={(users)}
      selectedUser={ data =>{
        setSelectedUser(data);
        setIsEdit(true);
      }}
      deleteUser={ data => window.confirm("Are you sure you want to delete this user?") && deleteUser(data) }
    />
  </Box>
 
 );

};

export default Users;