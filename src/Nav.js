import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';
export default function Nav() {
  let user=JSON.parse(localStorage.getItem('user.info'))
  let navigate=useNavigate()
  console.warn(user)
  function Logout(){
      localStorage.clear();
      navigate('/')
  // console.warn(user)
  // function Logout(){
  //   console.log("hi");

  //     localStorage.clear();
  //     navigate('/register')
   }
//   function logout() {
//     // localStorage.clear();
// console.log("hi");
//     // localStorage.removeItem('user.info');
//     //  navigate('/SignUp');
//   }
  // const logout=()=>{
  //   console.log("hi")
  
  // }
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
            <li className="nav-item">
              <a className="nav-link" href="/tradeBook">Trade book</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tradeBookList">Trade book list</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/QandA">Q&A</a>
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
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <a  class="dropdown-item" href="#"><button classNmae="text-white " style={{width:"170px",backgroundColor:"white",borderColor:"white", boxShadow:"white"}} onClick={Logout}>Logout</button></a>
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
    <a class="dropdown-item" href="/CreatCompte">login</a>
  </div>
  </>
)}
        </div>

            </li>
          </ul> 
        </div>

      </nav>
    </div>
    )}
  
        {/* <a className="nav-link dropdown-toggle" href="#" id="userDropdown" data-toggle="dropdown">
                {user ? (
                  <>
                    <i className="fa fa-user"></i> {user.name}
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <button onClick={Logout} className="dropdown-item">Logout</button> 
                    <NavLink to="/contact" activeClassName="active">Category 2</NavLink>
                    <a className="dropdown-item" onClick={Logout}>Logout</a>
                    </div>
                 </> 
                ):(  
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="/SignUp">Sign up</a>
                    <a className="dropdown-item" href="/CreatCompte">Login</a>
                  </div>
                 )} 
              </a> */}