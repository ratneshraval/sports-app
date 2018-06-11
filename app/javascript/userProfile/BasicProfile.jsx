import React from 'react'
import PropTypes from 'prop-types'
import {Typography,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Grid,
  TextField} from '@material-ui/core'

// created_at
// :
// "2018-05-31T23:15:01.928Z"
// email
// :
// "mary.lane@gmail.com"
// first_name
// :
// "Mary"
// height
// :
// "5'7"
// id
// :
// 2
// is_public
// :
// false
// last_name
// :
// "Lane"
// sports
// :
// [{…}]
// teams
// :
// [{…}]
// updated_at
// :
// "2018-05-31T23:15:01.928Z"
// weight
// :
// 140
export default class BasicProfile extends React.Component {
  render () {
    const profile = this.props.profile

    return (
      <Grid item sm={6}>
        <Card>
          <CardHeader
            title="Basic Information" />
          <CardContent>
            <TextField
              id="firstName"
              label="First Name"
              value={profile.first_name || ''}
              margin="normal"
            />

            <TextField
              id="lastName"
              label="Last Name"
              value={profile.last_name || ''}
              margin="normal"
            />

          </CardContent>
        </Card>
      </Grid>

    )
  }
}

BasicProfile.propTypes = {
  profile: PropTypes.object
}
BasicProfile.defaultProps = {
  profile: {
    first_name: '',
    last_name: ''
  }
}
