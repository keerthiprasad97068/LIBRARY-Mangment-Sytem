import { Link } from "react-router-dom";
import '../Styles/adminNavbar.css'

const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
            <div className="navbarlogo">
                <h1>Admin Portal</h1>
            </div>
            <div className="navbarlinks">
                <Link to={'/admin/'}>DashBoard</Link>
                <Link to={'/admin/AddBook'} >Add Books</Link>
                <Link to={'/admin/AddUser'}>Add User</Link>
                <Link to={'/admin/Booklist'}>  Book List</Link>
                <Link to={'/admin/Userlist'} >User List</Link>
            </div>
            <div className="navbarlogout">
                <Link to="/">Log Out</Link>
            </div>
        </div>
     );
}
 
export default AdminNavbar;