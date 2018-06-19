import React from 'react'
import PropTypes from 'prop-types'
import {fetchRequestWithErrors} from 'helpers/http'
import {Link} from 'react-router-dom'
import { List, ListItem, ListItemText, ListItemSecondaryAction,
  IconButton, Avatar, Typography,
  Grid,
  Paper} from '@material-ui/core'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import withRoot from 'components/withRoot'

class OrganizationsListView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      organizationsList: []
    }
  }

  componentDidMount () {
    const url = '/api/organizations'
    const response = fetchRequestWithErrors(url, 'GET', null)
      .then((response) => {
        console.log(response)
        this.setState({organizationsList: response})
      })
  }

  render () {
    const { classes } = this.props

    return (

      <Grid item sm={9} style={{paddingLeft: 30}}>
        <Grid container justify="center" style={{paddingTop: 30}}>
          <Typography variant='headline'>
            Organizations
          </Typography>
        </Grid>
        <Paper >

          <List>
            {
              this.state.organizationsList.map((item, index) => {
                return (
                  <ListItem key={index} component={Link} to={'/organizations/' + item.id} button>
                    <Avatar>
                      <FontAwesomeIcon icon='building' />
                    </Avatar>
                    <ListItemText
                      primary={item.name} />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="View">
                        <FontAwesomeIcon icon='angle-right' />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )
              })
            }
          </List>

        </Paper>
      </Grid>

    )
  }
}

export default withRoot(OrganizationsListView)
