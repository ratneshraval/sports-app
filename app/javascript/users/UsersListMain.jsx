import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import {store} from 'store/configureStore'
import { Provider } from 'react-redux'

export default class UsersListMain extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/users' component={UsersListView}/>
            <Route path='/users/:id' component={UserProfileMain}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<UsersListMain />, document.getElementById('root'))
