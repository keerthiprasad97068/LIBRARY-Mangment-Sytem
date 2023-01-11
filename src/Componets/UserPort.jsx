import { Routes,Route } from "react-router-dom";
import BookList from "./Booklist";
import UserHome from "./UserHome";
import UserNavbar from "./UserNavbar";
import ReadBook from "./Readbook";

const UserPortal = () => {
    return ( 
        <div className="userportal">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserHome/>}/>
                <Route path="/Booklist" element={<BookList/>}/>
                <Route path="/BookList/:id" element={<ReadBook/>} />
            </Routes>

        </div>
     );
}
 
export default UserPortal;