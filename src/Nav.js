import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Nav() {
  let user=JSON.parse(localStorage.getItem('user.info'))
  console.log("user",user)

  let navigate=useNavigate()

  function Logout(){
      localStorage.clear();
      navigate('/')

   }

  return (
    <div>
              <nav className="navbar navbar-expand-md bg-light">
        <img src="/img/logo.png" style={{ width: "150px" }} alt="Logo" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Shop">Shop</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/tradeBook">Trade book</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/tradeBookList">Book Exchange</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/AboutUs">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            
          </ul>
           <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
            <div class="dropdown">
{user ?( 
<>
<button style={{width:"210px"}} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i className="fa fa-user"></i>
      {user.name}
  </button>
  <div class="dropdown-menu" style={{width:"210px"}} aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/tradeBook">Trade book</a>
  <a class="dropdown-item" href="/Panier">Panier</a>

  <a  class="dropdown-item" href='#' classNmae="text-white " style={{width:"170px",backgroundColor:"white"}} onClick={Logout}>Logout</a>

</div>
  </>
):(  
 <> 
<button style={{width:"210px"}} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i className="fa fa-user"></i>
    user
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/SignUp">SignUp</a>
    <a class="dropdown-item" href="/Login">Login</a>
  </div>
  </>
)} 
        </div>

            </li>
          </ul> 
        </div>

      </nav>
    </div>
    );
  }
 