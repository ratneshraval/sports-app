import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import {store} from 'store/configureStore'
import { Provider } from 'react-redux'
import UsersListView from 'users/UsersListView'
import UserProfileMain from 'userProfile/UserProfileMain'

export default class Dashboard extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/users' component={UsersListView}/>
            <Route path='/users/:id' component={UserProfileMain}/>
            <Route component={UsersListView} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
