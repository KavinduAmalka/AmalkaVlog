const users =[
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id:2,
    name: 'Jane Smith',
  }
];

const getUsers = (cb) =>{
  cb(users);
};

const getUserById = (id, cb) => {
   const user = users.find(user => user.id == id);
  if (!user) {
    return cb({ message: 'User not found' });
  }
  else {
    return cb(user);
  }
   
};

exports.getUsers = getUsers;
exports.getUserById = getUserById;