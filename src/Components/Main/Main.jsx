import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../Navbar/Nav'
import Sidebar from '../Sidebar/Sidebar'

function Main(props) {
  return (
    <div><Nav/>
    <Sidebar/>
    </div>
  )
}

Main.propTypes = {}

export default Main
