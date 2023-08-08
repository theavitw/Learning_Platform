import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from "react-router-dom";

import { NavLink } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Explore from './Pages/Explore';

import { useSearchParams } from 'react-router-dom';


function handleClick(event) {
  event.preventDefault();

}

export default function IconBreadcrumbs() {
  const location = window.location.href
  let y =   location.split("/").pop();
  console.log(y)

  return (
    <div role="presentation" onClick={handleClick}
      
      

      
      className="px-4 py-8"
      
    >
      <Breadcrumbs aria-label="breadcrumb" 
      

      >
        <NavLink >
          <Link to='/' className="nav-link">Home</Link>

        </NavLink>
        <NavLink >
          <Link to='/Explore' className="nav-link">{y}</Link>

        </NavLink>



      </Breadcrumbs>
      


    </div>
  );
}