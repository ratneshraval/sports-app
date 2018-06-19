import React from 'react'
import PropTypes from 'prop-types'
import {fetchRequestWithErrors} from 'helpers/http'
import withRoot from 'components/withRoot'
import { List, ListItem, ListItemText, ListItemSecondaryAction,
  IconButton, Avatar, Typography,
  Grid, Card, CardHeader, CardContent,
  Paper} from '@material-ui/core'
import Teams from 'components/Teams'
import OrganizationProfileBasic from './OrganizationProfileBasic'
import Participation from './Participation'

const gridStyles = {paddingTop: 20, paddingLeft: 20, paddingRight: 20}

class OrganizationProfileMain extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      organization: []
    }
  }

  componentDidMount () {
    const url = `/api/organizations/${this.props.match.params.id}`
    const response = fetchRequestWithErrors(url, 'GET', null)
      .then((response) => {
        console.log(response)
        this.setState({organization: response})
      })
  }

  render () {
    const org = this.state.organization

    return (
      <React.Fragment>

        <Grid container spacing={16} style={gridStyles}>
          <Grid item sm={4}>
            <OrganizationProfileBasic name={org.name} />
          </Grid>
          <Grid item sm={4}>
            <Teams title='Teams under this organization' teams={org.teams}/>
          </Grid>
          <Grid item sm={6}>
            <Participation orgId={this.props.match.params.id}/>
          </Grid>
        </Grid>
      </React.Fragment>

    )
  }
}
export default withRoot(OrganizationProfileMain)
