import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/AddBooks.css'
const AddBooks = () => {

    let [title, settitel] = useState([])
    let [authors, setAuthor] = useState([])
    let [categories, setcategories] = useState([])
    let [pageCount, setPagecount] = useState([])
    let [shortDescription, setshortDesc] = useState([])
    let [longDescription, SetLongDes] = useState([])
    let [thumbnailUrl, setthumb] = useState([])

    let navigate = useNavigate()

    let handlesumbit = (e) => {
        e.preventDefault()

        //data to be posted
        let bookdata = { title, authors, categories, pageCount, shortDescription, longDescription, thumbnailUrl }

        //posting to server
        fetch('http://localhost:4025/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookdata)
        })

        alert(`${title} add to DataBase`)
        navigate('/admin/Booklist')

    }

    return (
        <div className="addbooks">
            <h1>Add A Book</h1>
            <div className="AddForm">
                <form action="" onSubmit={handlesumbit}>
                    <div className="booktitle">
                        <input type="text" placeholder="Enter Title" required onChange={(e) => settitel(e.target.value)} />
                    </div>
                    <div className="bookauthors">
                        <input type="text" placeholder=" Enter Author" required onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                    <div className="bookCategories">
                        <input type="text" placeholder="Enter Categories" onChange={(e) => setcategories(e.target.value)} />
                    </div>
                    <div className="BookpageCount">
                        <input type="number" placeholder="Enter PageCount" onChange={(e) => setPagecount(e.target.value)} />
                    </div>
                    <div className="shortdescription">
                        <textarea cols="30" rows="10" placeholder="Enter Short Description" onChange={(e) => setshortDesc(e.target.value)}></textarea>
                    </div>
                    <div className="longdescription">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Enter LongDescription" onChange={(e) => SetLongDes(e.target.value)}></textarea>
                    </div>
                    <div className="thumbnailURL">
                        <input type="text" placeholder="Enter Image id" onChange={(e) => setthumb(e.target.value)} />
                    </div>
                    <button className="bookbtn">Add Book</button>
                </form>
            </div>

        </div>
    );
}

export default AddBooks;