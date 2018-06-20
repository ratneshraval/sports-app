import React from 'react'
import PropTypes from 'prop-types'
import {withStyles, AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import {Link} from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
}

const AppHeaderBar = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">

        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Sports Management
          </Typography>
          <Button color="inherit" component={Link} to='/users'>Users</Button>
          <Button color="inherit" component={Link} to='/organizations'>Organizations</Button>
        </Toolbar>

      </AppBar>
    </div>
  )
}

AppHeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppHeaderBar)
