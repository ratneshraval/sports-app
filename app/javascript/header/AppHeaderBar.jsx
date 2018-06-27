import React from 'react'
import PropTypes from 'prop-types'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import {Link} from 'react-router-dom'

const AppHeaderBar = (props) => {
  return (
    <div style={{flexGrow: 1}}>
      <AppBar position="static">

        <Toolbar>
          <Typography variant="title" color="inherit" style={{flex: 1}}>
            Sports Management Application
          </Typography>
          <Button color="inherit" component={Link} to='/users'>Users</Button>
          <Button color="inherit" component={Link} to='/organizations'>Organizations</Button>
        </Toolbar>

      </AppBar>
    </div>
  )
}

AppHeaderBar.propTypes = {
}

export default AppHeaderBar
