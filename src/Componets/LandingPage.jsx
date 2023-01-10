import { Link } from 'react-router-dom'
import '../Styles/LandingPage.css'

const LandingPage = () => {
    return (
        
        <div className="landingPage">
           
            <div className="selectLogin">
                <h1>Library Mangament System</h1>
                <div className='loginbutton'>
                    <div className='admin_log'>
                        <img height={150} width={150} src="Images/adminlogo.png" alt="" />
                        <br /> <br />
                        <Link className='adminbtn' to="/admin-login">Admin Login</Link>
                    </div>
                    <div className='user_login'>
                        <img height={150} width={150} src="Images/adminlogo.png" alt="" />
                        <br /> <br />
                        <Link className='userbtn' to="/User-login">User Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;
