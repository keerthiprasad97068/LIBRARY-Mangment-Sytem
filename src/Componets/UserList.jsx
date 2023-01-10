import {useState,useEffect} from 'react'

const UserList = () => {
let[userList,setUserlist]=useState([])

useEffect(()=>{
    let fetchdata = async()=>{
        let respone = await fetch('http://localhost:4025/users')
        let data =await respone.json()
        setUserlist(data)
    }
    fetchdata()
},[userList])


    return ( 
        <div className="userlist">
            <h1>User list</h1>
            {
                userList.map(data =>(
                    <div className="userImp">
                        <h1>User :{data.Name}</h1>
                        <h4>age :{data.age}</h4>
                        <h4>Email :{data.email} </h4>
                        <h4>Phone Number : {data.phonenumber} </h4>
                    </div>

                ))
            }

        </div>
     );
}
 
export default UserList;