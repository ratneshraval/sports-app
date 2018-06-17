import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {ListItem, ListItemText, ListItemSecondaryAction,
  Avatar, IconButton} from '@material-ui/core'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class UsersListRow extends React.Component {
  render () {
    const { classes } = this.props
    return (

      this.props.isPublic
        ? <ListItem component={Link} to={'/users/' + this.props.userId} button>
          <Avatar>
            <FontAwesomeIcon icon='user' />
          </Avatar>
          <ListItemText
            primary={this.props.firstName + ' ' + this.props.lastName} />
          <ListItemSecondaryAction>
            <IconButton aria-label="View">
              <FontAwesomeIcon icon='angle-right' />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        : <ListItem>
          <Avatar>
            <FontAwesomeIcon icon='user' />
          </Avatar>
          <ListItemText
            primary={this.props.firstName + ' ' + this.props.lastName} />
        </ListItem>

    )
  }
}

UsersListRow.propTypes = {
  userId: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  isPublic: PropTypes.bool
}
