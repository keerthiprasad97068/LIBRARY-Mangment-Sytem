import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import '../Styles/readMore.css'

const ReadBook = () => {
    let[book,setbook]=useState([])
    let pharm =useParams()
    useEffect(()=>{
        let fetchdata = async()=>{
            let respone = await fetch(`http://localhost:4025/books/${pharm.id}`)
            let data =await respone.json()
            setbook(data)
        }
        fetchdata()
    },[book])
     
    
    return ( 
        <div className="readBook">
            <h1>Read Book</h1>
            <div className="readbookinf">
                <h2>Title:{book.title}</h2>
                <p> <span style={{ fontWeight:'bold' }} >Short Description:</span> <br /> {book.shortDescription}</p>
                <p><span style={{ fontWeight:'bold' }} >Long Description:</span> <br />  {book.longDescription}</p>
               
            </div>
        
        </div>
     );
}
 
export default ReadBook;