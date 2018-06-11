import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {fetchRequestWithErrors} from 'helpers/http'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withRoot from 'components/withRoot'
import UsersListRow from './UsersListRow.jsx'

const styles = theme => ({
  root: {
    // width: '100%'
  }
})

class UsersListView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      usersList: []
    }
  }

  componentDidMount () {
    const url = '/api/users'
    const response = fetchRequestWithErrors(url, 'GET', null)
      .then((response) => {
        console.log(response)
        this.setState({usersList: response})
      })
  }

  render () {
    const { classes } = this.props

    return (

      <Grid item sm={6}>
        <Grid container justify="center" style={{paddingTop: 30}}>
          <Typography variant='headline'>
            Users
          </Typography>
        </Grid>

        <Grid container justify="center" style={{padding: 30}}>

          <Paper className={classes.root}>

            <List>
              {
                this.state.usersList.map((item, index) => {
                  return (
                    <UsersListRow key={index}
                      userId={item.id}
                      firstName={item.first_name}
                      lastName={item.last_name} />
                  )
                })
              }
            </List>
          </Paper>
        </Grid>
      </Grid>

    )
  }
}

export default withStyles(styles)(withRoot(UsersListView))
