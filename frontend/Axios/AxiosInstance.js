import axios from 'axios'
 const AdminInstance=axios.create({baseURL:'http://localhost:5004/admin'})
 const UserInstance= axios.create({baseURL:'http://localhost:5004'})


export{AdminInstance,UserInstance}