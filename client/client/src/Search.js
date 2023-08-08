import React, { useState } from "react"

import { Nav, Form } from "react-bootstrap"
import useOnclickOutside from "react-cool-onclickoutside"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Search = () => {
  const [search, setSearch] = useState()

  const toggle = () => {
    setSearch(true)
  }

  const closeSearch = () => (search === true ? setSearch(false) : null)

  const ref = useOnclickOutside(() => {
    closeSearch()
  })

  return (
    <Nav className="my-auto" ref={ref} 
      style = {{
        display : "flex",
        justifyContent : "center"
      }}
    >
      <Form
        className={
          search === false
            ? "searchbar fadeOutWidth"
            : search === true
            ? "searchbar fadeInWidth"
            : "searchbar"
        }
        
      >
        {search === true && (
          <input
            ref={ref}
            className={
              search === true
                ? "search-input fadeIn"
                : search === false
                ? "search-input fadeOut"
                : "search-input"
            }
            style = 
        {{
          backgroundColor: 'white',
          borderRadius: '10px',
          border: '1px solid black',
          padding: '5px',
          color: 'black',
        }}

            type="text"
            name=""
            placeholder="Search..."
            

            
          />
        )}
        <div
          className={
            search === true
              ? "icon-bg fadeOut"
              : search === false
              ? "icon-bg fadeIn"
              : "icon-bg"
          }
        >
          {search !== true && (
            <FontAwesomeIcon
              onClick={toggle}
              className={
                search === true
                  ? "search-icon fadeOut"
                  : search === false
                  ? "search-icon fadeIn"
                  : "search-icon"
              }
              icon={faSearch}
            />
          )}
        </div>
      </Form>
    </Nav>
  )
}

export default Search
