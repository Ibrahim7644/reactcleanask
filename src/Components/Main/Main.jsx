import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../Navbar/Nav'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import Kpi from '../Kpi/Kpi'

function Main(props) {
  return (
    <div>
      <div className='row'>
        <div className='col-12'>
          <Nav />
        </div>
      </div>
      <div className='row'>
        <div className='col-1 px-7'>
          <Sidebar />
        </div>
        <div className='col-11'>
          <Kpi />
        </div>
      </div>


      <div className='row'>
        <div className='col-12'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
