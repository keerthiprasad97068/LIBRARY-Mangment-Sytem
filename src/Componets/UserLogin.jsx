
import { useNavigate } from 'react-router-dom'



const UserLogin = () => {

    let navigate = useNavigate()
    let login = () => {
        navigate('/User/')
    }

    return (
        <div className="userlogin">
            <div className="loginForm">
                <h1>Login As User</h1>
                <div className="form_input">
                    <form action="" onSubmit={login}>
                        <div className="email">
                        <label htmlFor="">Email:</label> <br />
                            <input type="email" placeholder="Enter your Email Adress" required />
                        </div>
                        <div className="password">
                        <label htmlFor="">Password:</label> <br />

                            <input type="password" placeholder="Enter your Password" required />
                        </div>
                        <button className="btn_login"> Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;