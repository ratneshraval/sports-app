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
  constructor (props) {
    super(props)
    this.state = {
      profile: this.props.profile
    }
  }

  handleChange (key, value) {
    let newState = Object.assign(this.state.profile)
    newState[key] = value

    this.setState({profile: newState})
  }

  render () {
    const profile = this.state.profile

    return (
      <Card>
        <CardHeader title="Basic Information"
          action={
            <div>
              <Button color="primary" onClick={() => this.props.onSave(this.state.profile)}>
              Save
              </Button>
              <Button color="secondary" onClick={this.props.onCancel}>
              Cancel
              </Button>
            </div>
          } />

        <CardContent>
          <TextField
            id="firstName"
            label="First Name"
            value={profile.first_name || ''}
            onChange={(event) => this.handleChange('first_name', event.target.value)}
            margin="normal"
          />

          <TextField
            id="lastName"
            label="Last Name"
            value={profile.last_name || ''}
            onChange={(event) => this.handleChange('last_name', event.target.value)}
            margin="normal"
          />

          <TextField
            id="height"
            label="Height (in cm)"
            value={profile.height || ''}
            onChange={(event) => this.handleChange('height', event.target.value)}
            margin="normal"
          />

          <TextField
            id="weight"
            label="Weight (in lbs)"
            value={profile.weight || ''}
            onChange={(event) => this.handleChange('weight', event.target.value)}
            margin="normal"
          />

          <TextField
            id="email"
            label="Email"
            fullWidth
            value={profile.email || ''}
            onChange={(event) => this.handleChange('email', event.target.value)}
            margin="normal"
          />

          <Typography variant="subheading" color="inherit">
                Profile Visibility:
            <Switch
              checked={profile.is_public}
              onChange={(event) => this.handleChange('is_public', event.target.checked)}
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
    last_name: '',
    email: '',
    height: '0',
    weight: '0',
    is_public: true
  }
}
