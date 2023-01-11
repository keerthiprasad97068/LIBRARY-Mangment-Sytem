import { Link } from "react-router-dom";
import '../Styles/UserNavbar.css'


const UserNavbar = () => {
    return ( 
        <div className="usernavbar">
             <div className="navbarlogo">
                <h1>User Portal</h1>
            </div>
            <div className="navbarlinks">
                <Link to={'/User/'}>DashBoard</Link>
                <Link to={'/User/Booklist'}>  Book List</Link>
    
            </div>
            <div className="navbarlogout">
                <Link to="/">Log Out</Link>
            </div>
        </div>
     );
}
 
export default UserNavbar;