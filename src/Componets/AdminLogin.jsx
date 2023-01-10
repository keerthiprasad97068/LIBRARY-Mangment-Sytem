import { useState } from "react";
import { useNavigate} from 'react-router-dom'
import '../Styles/adminLogin.css'

const AdminLogin = () => {

    let HandleSubmit = (e) => {
        e.preventDefault();
        let data={email,password}
        console.log(data);
        if (email=="keerthi123@g" && password==1234) {
            navigate('/admin/')   
        } else {
            alert('invalid credentials')
        }
    }
    let [email, setEmail] = useState([])
    let [password, setPassword] = useState([])
    let navigate =useNavigate()

    return (
        <div className="adminlogin">
            <div className="loginForm">
                <h1>Login As Admin</h1>
                <div className="form_input">
                    <form action="" onSubmit={HandleSubmit}>
                        <div className="email">
                            <label htmlFor="">Email:</label> <br />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Enter your Email Adress" required />
                        </div>
                        <div className="password">
                            <label htmlFor="">Password:</label> <br />
                            <input type="password" value={password} onChange={(e) => 
                            setPassword(e.target.value)}  placeholder="Enter your Password" required />
                        </div>
                        <button className="btn_login">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin;