import React from 'react'
import PropTypes from 'prop-types'
import {fetchRequestWithErrors} from 'helpers/http'
import {Card,
  CardHeader,
  CardContent,
  Grid} from '@material-ui/core'
import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip } from 'recharts'

export default class Participation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      byTeam: []
    }
  }

  componentDidMount () {
    const url = `/api/organizations/${this.props.orgId}/participations`

    fetchRequestWithErrors(`${url}/by_team`, 'GET', null)
      .then((response) => {
        this.setState({byTeam: response})
      })
  }

  render () {
    return (

      <Card>
        <CardHeader
          title="Participation by Team" />
        <CardContent>

          <BarChart width={730} height={250} data={this.state.byTeam}>
            <XAxis dataKey="name" />
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Bar type="monotone" dataKey="minutes" name='Minutes' barSize={30} fill="#8884d8" />
          </BarChart>
        </CardContent>
      </Card>

    )
  }
}

Participation.propTypes = {
  orgId: PropTypes.string
}
