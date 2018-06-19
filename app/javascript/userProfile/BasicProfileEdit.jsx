import React from 'react'
import PropTypes from 'prop-types'
import {Typography,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Grid,
  TextField, InputLabel, Input, Button, Switch} from '@material-ui/core'

export default class BasicProfileEdit extends React.Component {
  render () {
    const profile = this.props.profile

    return (
      <Card>
        <CardHeader title="Basic Information"
          action={
            <div>
              <Button color="primary" onClick={this.props.toggleEditMode}>
              Save
              </Button>
              <Button color="secondary" onClick={this.props.toggleEditMode}>
              Cancel
              </Button>
            </div>
          } />

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

          <TextField
            id="height"
            label="Height (in cm)"
            value={profile.height || ''}
            margin="normal"
          />

          <TextField
            id="weight"
            label="Weight (in lbs)"
            value={profile.weight || ''}
            margin="normal"
          />

          <TextField
            id="email"
            label="Email"
            fullWidth
            value={profile.email || ''}
            margin="normal"
          />

          <Typography variant="subheading" color="inherit">
                Profile Visibility:
            <Switch
              checked={profile.is_public}
              value="public"
            />
          </Typography>
        </CardContent>
      </Card>

    )
  }
}

BasicProfileEdit.propTypes = {
  profile: PropTypes.object,
  toggleEditMode: PropTypes.func
}
BasicProfileEdit.defaultProps = {
  profile: {
    first_name: '',
    last_name: ''
  }
}
