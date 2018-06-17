import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import UsersListView from 'users/UsersListView'
import UserProfileMain from 'userProfile/UserProfileMain'

export default class Dashboard extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/users' component={UsersListView}/>
          <Route path='/users/:id' component={UserProfileMain}/>
          <Route exact path='/organizations' component={OrganizationsListView}/>
          <Route path='/organizations/:id' component={OrganizationProfileMain}/>
          <Route component={UsersListView} />
        </Switch>
      </BrowserRouter>
    )
  }
}
