import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import {fetchRequestWithErrors} from 'helpers/http'
import withRoot from 'components/withRoot'
import BasicProfile from './BasicProfile'
import Sports from './Sports'
import Teams from './Teams'

class UserProfileMain extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userProfile: {
        sports: undefined,
        teams: undefined
      }
    }
  }

  componentDidMount () {
    const url = '/api/users/' + '2'
    const response = fetchRequestWithErrors(url, 'GET', null)
      .then((response) => {
        this.setState({userProfile: response})
      })
  }

  render () {
    const userProfile = this.state.userProfile
    return (
      <React.Fragment>
        <Grid container spacing={16}
          style={{paddingTop: 20}}>

          <BasicProfile profile={userProfile}/>
          <Sports sports={userProfile.sports}/>
        </Grid>
        <Grid align='center' container spacing={16}
          style={{paddingTop: 20, paddingBottom: 20}}>

          <Teams teams={userProfile.teams}/>
        </Grid>
      </React.Fragment>
    )
  }
}

UserProfileMain.propTypes = {
  userProfile: PropTypes.object

}

UserProfileMain.defaultProps = {
  userProfile: {
    sports: undefined,
    teams: undefined
  }
}

export default withRoot(UserProfileMain)
