import { useNavigate } from "react-router-dom";
import '../Styles/error.css'

const ErrorPage = () => {
    let navigate =useNavigate()

    let go=()=>{
        navigate('/')
    }

    return ( 
        <div className="error404">

            <img src="/Images/404eror.jpg" alt="" />
            <br />
            <button onClick={go} >Go To Landing Page</button>
        </div>
     );
}
 
export default ErrorPage;