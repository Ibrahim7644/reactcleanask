import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
    return (
        <div>
            <footer class="row align-items-end bg-light text-center text-lg-start" style={{ marginRight:"0px" , marginLeft : "0px" }}>
                <div class="text-center p-3  footer-dark bg-dark">
                <p class="text-light bg-dark p-2">© 2022 Copyright: CleanAsk.com</p>
                </div>
            </footer>
        </div>
    )
}

Footer.propTypes = {}

export default Footer
