
import { Link } from "react-router-dom";


function Header(){


    return (

<nav class="navbar navbar-expand-sm bg-dark navbar-dark mb-5">
<div class="container-fluid">
  <Link class="navbar-brand" href="#">Logo</Link>
  <div className="navbar-nav">
  <Link className="nav-link active me-5" aria-current="page" to="/">parent</Link>
  <Link className="nav-link active me-5" aria-current="page" to="about">About</Link>

  <Link className="nav-link active me-5" aria-current="page" to="blog" >blog </Link>
  <Link className="nav-link active me-5" aria-current="page" to="category" >Category </Link>

  


  </div>

</div>
</nav>
)

}
export default Header;

//    <img src={img} style={{width:'100%', height:'50vh'}} alt=""/>