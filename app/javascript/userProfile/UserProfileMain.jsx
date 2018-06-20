import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import {fetchRequestWithErrors} from 'helpers/http'
import withRoot from 'components/withRoot'
import BasicProfile from './BasicProfile'
import BasicProfileEdit from './BasicProfileEdit'
import Sports from './Sports'
import Teams from 'components/Teams'
import Participation from './Participation'

const gridStyles = {paddingTop: 20, paddingLeft: 20, paddingRight: 20}

class UserProfileMain extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userProfile: {
        sports: undefined,
        teams: undefined
      },
      editMode: false
    }
    this.updateState = this.updateState.bind(this)
    this.toggleEditMode = this.toggleEditMode.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  componentDidMount () {
    const url = `/api/users/${this.props.match.params.id}`
    const response = fetchRequestWithErrors(url, 'GET', null)
      .then((response) => {
        this.setState({userProfile: response})
      })
  }

  updateState (key, value) {
    this.setState({[key]: value})
  }

  toggleEditMode () {
    this.updateState('editMode', !this.state.editMode)
  }
  onSave (newProfile) {
    this.updateState('userProfile', newProfile)
    this.toggleEditMode()
  }

  render () {
    // console.log(this.props)
    const userProfile = this.state.userProfile
    return (
      <React.Fragment>
        <Grid container spacing={16}
          style={gridStyles}>

          <Grid item sm={4}>
            {
              this.state.editMode
                ? <BasicProfileEdit profile={userProfile}
                  onSave={this.onSave}
                  onCancel={this.toggleEditMode}
                />
                : <BasicProfile profile={userProfile}
                  toggleEditMode={this.toggleEditMode}
                />
            }
          </Grid>

          <Grid item sm={4}>
            <Sports sports={userProfile.sports}/>
          </Grid>

          <Grid item sm={4}>
            <Teams title='My Teams' teams={userProfile.teams}/>
          </Grid>

        </Grid>
        <Grid align='center' container spacing={16}
          style={gridStyles}>
          <Participation userId={this.props.match.params.id}/>
        </Grid>
      </React.Fragment>
    )
  }
}

UserProfileMain.propTypes = {
  userProfile: PropTypes.object,
  match: PropTypes.object
}

UserProfileMain.defaultProps = {
  userProfile: {
    sports: undefined,
    teams: undefined
  },
  match: {
    id: undefined
  }
}

export default withRoot(UserProfileMain)
