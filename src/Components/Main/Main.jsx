import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../Navbar/Nav'
import Sidebar from '../Sidebar/Sidebar'
import Kpi from '../Kpi/Kpi'
import Footer from '../Footer/Footer'

function Main(props) {
  return (
    <div><Nav/>
    <Sidebar/>
    <Kpi/>

    <Footer/>
    </div>
  )
}

Main.propTypes = {}

export default Main
