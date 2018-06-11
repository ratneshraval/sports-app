import React from 'react'
import PropTypes from 'prop-types'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

const AppHeaderBar = () => {
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Sports Management
          </Typography>
        </Toolbar>
      </AppBar>
    </div>

  )
}

AppHeaderBar.propTypes = {

}

export default AppHeaderBar
