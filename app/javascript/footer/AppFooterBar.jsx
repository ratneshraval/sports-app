import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import Typography from '@material-ui/core/Typography'

function AppFooterBar (props) {
  return (
    <div style={{flexGrow: 1}} >
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Footer Content
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

AppFooterBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default AppFooterBar
