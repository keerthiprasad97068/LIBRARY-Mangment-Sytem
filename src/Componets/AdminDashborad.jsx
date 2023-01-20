import '../Styles/AdminDash.css'

const Admindashboard = () => {
    return (
        <div className="dashborad">
            <div className="imagesheading">
                <div className="adminheading">
                    <h1>Library Managment System</h1>
                </div>
            </div>
            <div className="lib1">
                <h3>Central Library to Host an Evening of Broadway Cabaret</h3>
                <p>By Keerthi Prasad on 12th Jan,2023</p>
                <p>The Friends of Central Library Club are pleased to host a special night of cabaret-style performances with How I Got to…</p>
                <a href="">Read More</a>
            </div>
            <div className="libimg">
                <img src="/Images/adminpagespic.webp" alt="" />
            </div>
            <div className="lib2">
                <h3>
                    AuthorsLive: Barbara Gage, author of “G-Man: J. Edgar Hoover and the Making of the American Century</h3>
                <p>By Bargav on 16th Jan,2023</p>
                <p>Greenwich Library is excited to welcome Yale professor and author Beverly Gage to its AuthorsLive series. Gage will discuss G-Man:…</p>
                <a href="">Read More</a>
            </div>
            <div className="libimg">
                <img src="/Images/adminpagespic.webp" alt="" />
            </div>
            <div className="lib3">
                <h3  >Signature Series: In the News with Fareed Zakaria</h3>

                <p>By Nihal H A on 14th Jan,2023</p>
                <p>V V N's Library’s Signature Series is pleased to welcome bestselling author and journalist Fareed Zakaria to the Library’s Berkley Theater on Thursday,…</p>
                <a href="">Read More</a>
            </div>







        </div>
    );
}

export default Admindashboard;