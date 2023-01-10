import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";

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
                <h2>{book.title}</h2>
                <p> <span style={{ fontWeight:'bold' }} >shortDescription</span> <br /> {book.shortDescription}</p>
                <p> {book.longDescription}</p>
               
            </div>
        
        </div>
     );
}
 
export default ReadBook;