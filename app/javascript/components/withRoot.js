import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import AppHeaderBar from 'header/AppHeaderBar'

const theme = createMuiTheme()

function withRoot (Component) {
  function WithRoot (props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeaderBar></AppHeaderBar>
        <Grid container spacing={16}>
          <Component {...props} />
        </Grid>
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
