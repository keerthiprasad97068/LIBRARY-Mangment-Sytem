import {useState,useEffect} from 'react'
import '../Styles/UserList.css'

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

let remove = (id, title) => {
    fetch(`http://localhost:4025/users/${id}`, {
        method: "DELETE"
    })
    alert(`${title} Has Been Removed From Server`)
}


    return ( 
        <div className="userlist">
            <h1 id='userheading'>User list :{userList.length}</h1>
            <div className='imfmainuser'>
            {
                userList.map(data =>(
                    <div className="userImp">
                        <h1>User :{data.Name}</h1>
                        <h4>age :{data.age}</h4>
                        <h4>Email :{data.email} </h4>
                        <h4>Phone Number :{data.phonenumber} </h4>
                        <div className="deletebtn2">
                            <button onClick={()=>remove(data.id, data.title)}>Delete</button>
                        </div>
                    </div>

                ))
            }
            </div>

        </div>
     );
}
 
export default UserList;