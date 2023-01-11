import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/AddUser.css'


const AddUser = () => {
  let [Name, setusername] = useState([])
  let [age, setuserage] = useState([])
  let [email, setuseremail] = useState([])
  let [phonenumber, setphonenum] = useState([])
  let navigate = useNavigate()

  let handleSumbit = (e) => {
    e.preventDefault()
    let Userdata = { Name, age, email, phonenumber }
    fetch('http://localhost:4025/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Userdata)
    })
    navigate('/admin/Userlist')
    alert(`${Name} has been added`)
  }


  return (
    <div className="addUser">
      <h1>Add Users</h1>
      <div className="adduserimp">
        <form action="" onSubmit={handleSumbit}>
          <div className="username">
            <input type="text" placeholder="Enter User Name" onChange={(e) => setusername(e.target.value)} />
          </div>
          <div className="userAge">
            <input type="age" min={1} placeholder="userage" onChange={(e) => setuserage(e.target.value)} />
          </div>
          <div className="Useremail">
            <input type="email" placeholder="Email" onChange={(e) => setuseremail(e.target.value)} />
          </div>
          <div className="userPhone">
            <input type="tel" minLength={1} maxLength={10} placeholder="PhoneNumber" onChange={(e) => setphonenum(e.target.value)} />
          </div>
          <button>Add user</button>
        </form>

      </div>

    </div>
  );
}

export default AddUser;