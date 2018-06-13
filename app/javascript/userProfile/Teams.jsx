import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Typography,
  Card, CardHeader, CardActions, CardContent,
  Avatar,
  Grid, Paper,
  TextField,
  List, ListItem, ListItemText} from '@material-ui/core'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class Teams extends React.Component {
  render () {
    return (

      <Grid item sm={6}>
        <Card>
          <CardHeader
            title="My Teams" />
          <CardContent>
            <List>
              {
                this.props.teams.map((item, index) => {
                  return (
                    <ListItem key={index} button>
                      <Avatar>
                        <FontAwesomeIcon icon={item.sport.icon_name} />
                      </Avatar>
                      <ListItemText
                        primary={item.name}
                        secondary={item.organization_id}/>
                    </ListItem>
                  )
                })
              }
            </List>
          </CardContent>
        </Card>
      </Grid>

    )
  }
}

Teams.propTypes = {
  teams: PropTypes.array
}

Teams.defaultProps = {
  teams: []
}
