import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import "../index.css";
import Search from "../Search";
import Burger from "../Pages/BurgurMenu";
import { useCookies } from "react-cookie";
import Cookies from 'js-cookie';
import axios from "axios";
import { useEffect } from "react";
import Explore from "../Pages/Explore"
import App from "../Pages/BurgurMenu";
import { Link, Route, Routes } from "react-router-dom";

function Navbar1() {

    const [cookies, setCookie] = useCookies(['user']);
    const [data, setData] = React.useState([]);
    useEffect(() => {
        axios
            .get("/getuser")
            .then((res) => {
                JSON.stringify(res.data);
                setData([...res.data]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(data);

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
            <Navbar
                collapseOnSelect
                expand="md"
                bg="light"
                variant="light"
                className="px-4 py-8"
                
            > 
                <h1>
                    Osmosis
                    <p
                        className="text-end"
                        style={{ fontSize: "1rem", fontWeight: "bold" }}
                    >
                        LEARN
                    </p>
                </h1>
                <div className="Navitem">
                    <Navbar.Toggle aria-controls="responsive-navbar-na" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto align-items-end px-3">
                            <Search />
                        </Nav>
                        <Nav className="mr-auto align-items-end px-4">

                            <NavLink >
                                <Link to='/' className="nav-link">Home</Link>

                            </NavLink>
                            <NavLink >
                                <Link to='/Explore' className="nav-link">Explore</Link>

                            </NavLink>
                            <NavLink >
                                <Link to='/Create' className="nav-link">Create</Link>

                            </NavLink>


                            {
                                cookies.user ? <NavLink onClick={handleLogot}>
                                    <Link className="nav-link">Logout</Link>
                                </NavLink> :

                                    <><NavLink onClick={Handlelogin} ><Link className="nav-link">Login</Link></NavLink><NavLink onClick={HandleSingup}>
                                        <Link className="nav-link">Signup</Link>
                                        </NavLink></>
                            }


                        </Nav>
                    </Navbar.Collapse>


                </div>
                <span



                ><Burger /></span>

            </Navbar>
            <Routes>
                <Route path={"/Explore"} element={<Explore />} />
            </Routes>

        </>
    );
}

export default Navbar1;
