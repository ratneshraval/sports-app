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

      <Card>
        <CardHeader
          title={this.props.title} />
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

    )
  }
}

Teams.propTypes = {
  title: PropTypes.string,
  teams: PropTypes.array
}

Teams.defaultProps = {
  title: '',
  teams: []
}
