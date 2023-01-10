import Admindashboard from "./AdminDashborad";
import AdminNavbar from "./AdminNavbar";
import { Routes,Route } from "react-router-dom";
import BookList from "./Booklist";
import UserList from "./UserList";
import ReadBook from "./Readbook";
import AddBooks from "./AddBook";
import AddUser from "./AddUser";


const AdminHome = () => {
    return ( 
        <div className="adminhome">
            <AdminNavbar/> 
            <Routes>
                <Route path='/' element={<Admindashboard/>} /> 
                <Route path="/Booklist" element={<BookList/>} /> 
                <Route path="/Userlist" element={<UserList/>} />
                <Route path="/BookList/:id" element={<ReadBook/>} />
                <Route path="/AddBook" element={<AddBooks/>}/>
                <Route path="/AddUser" element={<AddUser/>}  />
            </Routes>

        </div>
     );
}
 
export default AdminHome;