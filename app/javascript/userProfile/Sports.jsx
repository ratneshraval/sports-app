import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import {Card,
  CardHeader,
  CardActions,
  CardContent,
  Grid,
  TextField} from '@material-ui/core'

export default class Sports extends React.Component {
  render () {
    return (

      <Grid item sm={6}>
        <Card>
          <CardHeader
            title="Sports I'm interested in" />
          <CardContent>

          </CardContent>
        </Card>
      </Grid>

    )
  }
}
