import React from 'react'
import PropTypes from 'prop-types'
import {Typography,
  Card, CardHeader, CardActions, CardContent,
  Avatar,
  Grid, Paper,
  TextField,
  List, ListItem, ListItemText} from '@material-ui/core'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class Sports extends React.Component {
  render () {
    return (
      <Grid item sm={6}>
        <Card>
          <CardHeader
            title="Sports I'm interested in" />
          <CardContent>
            <List>
              {
                this.props.sports.map((item, index) => {
                  return (
                    <ListItem key={index} button>
                      <Avatar>
                        <FontAwesomeIcon icon={item.icon_name} />
                      </Avatar>
                      <ListItemText
                        primary={item.name} />
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

Sports.propTypes = {
  sports: PropTypes.array
}

Sports.defaultProps = {
  sports: []
}
