import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme()

function withRoot (Component) {
  function WithRoot (props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Grid container spacing={16}>
          <Component {...props} />
        </Grid>
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
