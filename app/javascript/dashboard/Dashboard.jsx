import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import UsersListView from 'users/UsersListView'
import UserProfileMain from 'userProfile/UserProfileMain'
import OrganizationsListView from 'organizations/OrganizationsListView'
import OrganizationProfileMain from 'organizations/OrganizationProfileMain'

export default class Dashboard extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/users' component={UsersListView}/>
            <Route path='/users/:id' component={UserProfileMain}/>
            <Route exact path='/organizations' component={OrganizationsListView}/>
            <Route path='/organizations/:id' component={OrganizationProfileMain}/>
            <Route component={UsersListView} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
