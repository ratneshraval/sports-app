import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'

export default class UsersListRow extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <ListItem component={Link} to={'/users/' + this.props.userId} button>
        <Avatar>
          <ImageIcon />
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
  lastName: PropTypes.string
}
