import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    flexGrow: 1
  }
}

function AppFooterBar (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
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

export default withStyles(styles)(AppFooterBar)
