import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Nav() {

  let user=JSON.parse(localStorage.getItem('user.info'))
  let navigate=useNavigate()
  console.warn(user)
  function Logout(){
    console.log("hi");
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
              <a className="nav-link" href="/contact">Trade book</a>
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
              <a className="nav-link dropdown-toggle" href="#" id="userDropdown" data-toggle="dropdown">
                {user ? (
                  <>
                    <i className="fa fa-user"></i> {user.name}
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <button onClick={Logout} className="dropdown-item">Logout</button> 
                    {/* <a className="dropdown-item" onClick={Logout}>Logout</a> */}
                    </div>
                  </>
                ) : (
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="/SignUp">Sign up</a>
                    <a className="dropdown-item" href="/CreatCompte">Login</a>
                  </div>
                )}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
