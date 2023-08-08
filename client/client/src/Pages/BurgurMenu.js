import React, { useState } from 'react';
import { MDBCollapse, MDBContainer, MDBNavbar, MDBNavbarToggler } from 'mdb-react-ui-kit';
import Search from '../Search';
import '../index.css';
import { useCookies } from "react-cookie";
import Cookies from 'js-cookie';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function App(props) {
  const [cookies, setCookie] = useCookies(['user']);

  const [showAnimated, setShowAnimated] = useState(false);
  const a = {
    backgroundColor: props.bg, display: "flex", flexDirection: "column",


  }
  const btn = {
    backgroundColor: props.bg,
  }
  const b = { color: props.color }
  const sec = { width: props.w, height: props.h }
  const handleLogot = () => {

    Cookies.remove('user');


    window.location.href = "http://localhost:8080/login";
  }

  const Handlelogin = (res) => {

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log("login successfull");
        window.location.href = "http://localhost:8080/";

        setCookie('user', res.data, { path: '/' });

      }
    }

    )
      .catch((err) => {
        console.log(err);
      }
      );



  }
  const HandleSingup = (res) => {

    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {

        window.location.href = "http://localhost:8080/register";

        setCookie('user', res.data, { path: '/' });

      }
    }

    )
      .catch((err) => {
        console.log(err);
      }
      );



  }
  return (
    <>
      <section className='mb-3 burgur' id={props.id}
        style={sec}
      >
        <MDBNavbar>
          <MDBContainer >
            <MDBNavbarToggler
              type='button'
              style={btn}
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowAnimated(!showAnimated)}
            >
              <div className={`animated-icon1 ${showAnimated && 'open'}`

              }
                style={btn}
              >

                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated}>

          <div className='c-white shadow-4 p-4 d-flex mb_1'
            style={a}
          >
            <Search />
            <a className='btn' href='#' role='button'
              style={b}
            >
              Home
            </a>
            <a className='btn' href='#' role='button'
              style={b}
            >
              Explore
            </a>
            <a className='btn' href='#' role='button'
              style={b}>
              Create
            </a>
            
            {
              cookies.user ?
                <a className="nav-link btn"
                style={b}
                onClick={handleLogot}>Logout</a>
               :

                <>
                  <a className="btn" 
                  style={b}
                  onClick={Handlelogin}>Login</a>
                  <a className="btn" 
                  style={b}
                  onClick={HandleSingup}>Create</a>
                </>
            }


          </div>


        </MDBCollapse>
      </section>

    </>
  );
}