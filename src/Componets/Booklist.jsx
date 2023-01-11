import { useState,useEffect } from  "react";
import '../Styles/Booklist.css'
import ReadBook from "./Readbook";
import {  useNavigate ,useLocation } from "react-router-dom";


const BookList = () => {

    let[book,setbook]=useState([])
    useEffect(()=>{
        let fetchdata = async()=>{
            let respone = await fetch('http://localhost:4025/books')
            let data =await respone.json()
            setbook(data)
        }
        fetchdata()
    },[book]) 

    let remove =(id,title) =>{
      fetch(`http://localhost:4025/books/${id}`,{
        method:"DELETE"
      })
      alert(`${title} Has Been Removed From Server`)
    }
   
    let navigate =useNavigate()
    let showmore=(id)=>{
        if(location.pathname=='/admin/Booklist')
        {
        navigate(`/admin/Booklist/${id}`)
        }
        else{
            navigate(`/User/BookList/${id}`)
        }
    }

    let location=useLocation()

    return ( 
        <div className="booklist">
            <h1 id="heading">Book List :{book.length}</h1>

            <div className="bookSection">
                { book.map( data =>(
                    
                        <div className="bookCard">
                            <div className="bookimag">
                                <img height={250} width={250} src={data.thumbnailUrl} alt="" />
                            </div>
                            <div className="bookimf">
                            <h1>{data.title}</h1>
                            <h4>Authors : {data.authors}</h4>
                            <h5>Pages : {data.pageCount}</h5>
                            <h5>Categories : {data.categories} </h5>
                            <button onClick={()=>showmore(data.id)} >Read More</button>
                            {
                            location.pathname=='/admin/Booklist' && <button onClick={()=> remove(data.id,data.title) } >Delete</button>  
                             }
                        
                            </div>
                        </div>

                    ) )
                }
            </div>


        </div>
     );
}
 
export default BookList;