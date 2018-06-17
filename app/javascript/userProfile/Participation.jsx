import React from 'react'
import PropTypes from 'prop-types'
import {fetchRequestWithErrors} from 'helpers/http'
import {Card,
  CardHeader,
  CardContent,
  Grid} from '@material-ui/core'
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts'

export default class Participation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bySport: [],
      byTeam: []
    }
  }

  componentDidMount () {
    const url = `/api/users/${this.props.userId}/participations`
    fetchRequestWithErrors(`${url}/by_sport`, 'GET', null)
      .then((response) => {
        this.setState({bySport: response})
      })

    fetchRequestWithErrors(`${url}/by_team`, 'GET', null)
      .then((response) => {
        this.setState({byTeam: response})
      })
  }

  render () {
    return (
      <React.Fragment>
        <Grid item sm={6}>
          <Card>
            <CardHeader
              title="Participation by Sport" />
            <CardContent>

              <BarChart width={730} height={250} data={this.state.bySport}>
                <XAxis dataKey="name" />
                <YAxis/>
                <Legend />
                <Bar type="monotone" dataKey="minutes" name='Minutes' barSize={30} fill="#8884d8" />
              </BarChart>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={6}>
          <Card>
            <CardHeader
              title="Participation by Team" />
            <CardContent>

              <BarChart width={730} height={250} data={this.state.byTeam}>
                <XAxis dataKey="name" />
                <YAxis/>
                <Legend />
                <Bar type="monotone" dataKey="minutes" name='Minutes' barSize={30} fill="#8884d8" />
              </BarChart>
            </CardContent>
          </Card>
        </Grid>
      </React.Fragment>
    )
  }
}

Participation.propTypes = {
  userId: PropTypes.string
}
