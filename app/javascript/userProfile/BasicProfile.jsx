import React from 'react'
import PropTypes from 'prop-types'
import {Typography,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Grid,
  TextField, InputLabel, Input, Button} from '@material-ui/core'

export default class BasicProfile extends React.Component {
  render () {
    const profile = this.props.profile

    return (
      <Card>
        <CardHeader title="Basic Information"
          action={
            <Button onClick={this.props.toggleEditMode}>
              Edit
            </Button>
          } />

        <CardContent>
          <Grid container spacing={16}>
            <Grid item sm={6}>
              <Typography variant="subheading" color="inherit">
                First Name:
              </Typography>
              <Typography variant="title" color="inherit">
                {profile.first_name}
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography variant="subheading" color="inherit">
                Last Name:
              </Typography>
              <Typography variant="title" color="inherit">
                {profile.last_name}
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography variant="subheading" color="inherit">
                Height:
              </Typography>
              <Typography variant="title" color="inherit">
                {profile.height} cm
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography variant="subheading" color="inherit">
                Weight:
              </Typography>
              <Typography variant="title" color="inherit">
                {profile.weight} lbs
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography variant="subheading" color="inherit">
                Email:
              </Typography>
              <Typography variant="title" color="inherit">
                {profile.email}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

    )
  }
}

BasicProfile.propTypes = {
  profile: PropTypes.object,
  toggleEditMode: PropTypes.func
}
BasicProfile.defaultProps = {
  profile: {
    first_name: '',
    last_name: ''
  }
}
