import React from 'react'
import IconBreadcrumbs from './Breadcrumb'
import Navbar1 from './Navber/Navbar'
import Burgur from './Pages/BurgurMenu'
import Explore from './Pages/Explore'
import Footer from './Footer'


function App() {

  return (
    <>

      <Navbar1 />
      <IconBreadcrumbs />
      <Explore />


      <div
        style={{
          position: 'absolute',
          top: '40%',



        }}

      >
        <div
          style={{
            position: 'fixed',



          }}
        >
          <Burgur bg="#282c34" color="white" w="200%" h="100%" id="abd" />
        </div>

      </div>
      <Footer />
      

    </>
  )
}

export default App