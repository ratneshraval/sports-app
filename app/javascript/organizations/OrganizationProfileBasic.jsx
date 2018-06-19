import React from 'react'
import PropTypes from 'prop-types'
import {fetchRequestWithErrors} from 'helpers/http'
import withRoot from 'components/withRoot'
import {Typography,
  Card, CardHeader, CardContent,
  Paper} from '@material-ui/core'
import Teams from 'components/Teams'

const OrganizationProfileBasic = ({name}) => (
  <Card>
    <CardHeader title="Organization Info" />
    <CardContent>

      <Typography variant="subheading" color="inherit">
        Name:
      </Typography>
      <Typography variant="title" color="inherit">
        {name}
      </Typography>

      <br/>
      <br/>
      <Typography variant="subheading" color="inherit">
        other org info here.......
      </Typography>

    </CardContent>
  </Card>
)

OrganizationProfileBasic.propTypes = {
  name: PropTypes.string
}

OrganizationProfileBasic.defaultProps = {
  name: ''
}

export default OrganizationProfileBasic
